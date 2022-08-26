import { ChangeEvent } from 'react';
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import { REG_EMAIL, REG_NAME, REG_PHONE, REG_TELEGRAM } from '../utils/config';
import {useCallback} from 'react';
import api from '../api/api';
import { TELEGRAM_CHAT_ID } from '../utils/config';
import { isOpenNotificationState } from './globalUI';

type RadioProps = string | 'telegram' | 'whatsapp' | 'phone' | 'email';

interface FormValuesProps {
  name?: string;
  contact?: string;
  message?: string;
  radio?: RadioProps;
}

interface ErrorsMap {
  [index: string]: string | null | undefined,
}

export const formValuesState = atom<FormValuesProps>({
  key: 'formValuesState',
  default: {},
});

export const formErrorsState = atom<ErrorsMap>({
  key: 'formErrorsState',
  default: {},
});

export const isFormValidState = atom<boolean>({
  key: 'isFormValidState',
  default: false,
});

export const useFormValidationStore = () => {
  const [values, setValues] = useRecoilState(formValuesState);
  const [errors, setErrors] = useRecoilState(formErrorsState);
  const [isValid, setIsValid] = useRecoilState(isFormValidState);

  const validate = (n: string, v: string) => {
    if (n === 'name') {
      if (v.length === 0) return 'Введите ваше имя';
      if (v.length < 2)
        return 'Имя должно быть больше одной буквы';
      if (!REG_NAME.test(v))
        return `Только буквы, пробел - _ '`;
      return '';
    }

    if (n === 'contact') {
      if (v.length === 0) return 'Поле должно быть заполнено';
      if (values.radio === 'telegram') {
        if (!/^@/.test(v)) return 'Первый символ @';
        if (!REG_TELEGRAM.test(v)) return 'Только латинские буквы и _, больше 5 символов';
      }
      if (values.radio === 'email') {
        if (!REG_EMAIL.test(v)) return 'Введите корректный адрес почты';
      }
      if (values.radio === 'phone' || values.radio === 'whatsapp') {
        if(!/^\+/.test(v)) return 'Первый символ +';
        if(!REG_PHONE.test(v)) return 'Введите корректный номер, больше 10 цифр';
      }
      return '';
    }

    if (n === 'message') {
      if (v.length === 0) return 'Поле должно быть заполнено';
      if (v.length < 30)
        return 'Сообщение должно быть больше 30 букв';
      return '';
    }
  };

  const isFormValid = () => {
    for (let key in errors) {
      if (errors.hasOwnProperty(key)) {
        if (errors[key] === null || !(errors[key] === '')) {
          setIsValid(false)
          break
        } else {
          setIsValid(true)
          continue
        }
      }
    }
  };

  const handleSetInput = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.target;
    const inputName = input.name;
    const inputValue = input.value;
    const newValue = inputName === 'name' || inputName === 'message' ? inputValue.charAt(0).toUpperCase() + inputValue.slice(1) : inputValue;
    setValues((prev) => {return { ...prev, [inputName]: newValue }});
    setErrors((prev) => {return {...prev, [inputName]: validate(inputName, inputValue)}});
  };

  const handleSetRadio = (str: string) => {
    const contactValue = str === 'telegram' ? '@' : str === 'whatsapp' || str === 'phone' ? '+7' : '';
    setValues((prev) => {return {...prev, radio: str, contact: contactValue}});
    setErrors((prev) => {return {...prev, contact: null}});
  };

  const initForm = (values: FormValuesProps, errors: ErrorsMap) => {
    setValues(values);
    setErrors(errors);
  };

  return {
    values,
    errors,
    isValid,
    handleSetInput,
    handleSetRadio,
    isFormValid,
    initForm,
  };
};

type FormRequestOptions = {
  message: string;
};

interface NotificationProps {
  title: string | number;
  message: string;
}

export const isDeliveredState = atom<boolean>({
  key: 'isDeliveredState',
  default: false,
});

export const isTransferingState = atom<boolean>({
  key: 'isTransferingState',
  default: false,
});

export const NotificationState = atom<NotificationProps>({
  key: 'ServerErrorState',
  default: {
    title: '',
    message: '',
  },
});

export const useFormStore = () => {
  const setIsOpenNotification = useSetRecoilState(isOpenNotificationState)
  const values = useRecoilValue(formValuesState);
  const [isDelivered, setIsDelivered] = useRecoilState(isDeliveredState);
  const [notification, setNotification] = useRecoilState(NotificationState);
  const [isTransfering, setIsTransfering] = useRecoilState(isTransferingState);
  const sendContactForm = useCallback(async (options: FormRequestOptions) => {
    setIsTransfering(true);
    const {message} = options;
    api.post(`/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${message}`)
      .then((res: any) => {
        // обработка успешного запроса
        setIsDelivered(true);
        setNotification({
          title: `Спасибо ${values.name}!`,
          message: `Ваше сообщение доставлено`,
        });
        setIsOpenNotification(true);
      })
      .catch((error: any) => {
        // обработка ошибки
        setIsDelivered(false);
        setNotification({
          title: `Ошибка ${error.response.status}`,
          message: error.response.data.description,
        });
        setIsOpenNotification(true);
      });
    setIsTransfering(false);
  }, [setIsTransfering, setIsDelivered, setNotification, values.name, setIsOpenNotification]);

  return {
    isDelivered,
    isTransfering,
    sendContactForm,
    notification,
  };
};
