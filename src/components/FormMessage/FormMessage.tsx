import React, {
  FormEvent,
  MouseEvent,
  MouseEventHandler,
  useEffect,
} from "react";
import { nanoid } from "nanoid";
import Button from "../Button/Button";
import FieldInput from "../FieldInput/FieldInput";

import "./FormMessage.sass";

import Icons from "../../assets/icons/socials/index";
import { useFormValidationStore, useFormStore } from "../../store/form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isOpenNotificationState } from "../../store/globalUI";

type RadioProps = string | "telegram" | "whatsapp" | "phone" | "email";
interface RadioOptionsProps {
  link: RadioProps;
  src: string;
}

const radioOptions: RadioOptionsProps[] = [
  { link: "telegram", src: Icons.telegram },
  { link: "whatsapp", src: Icons.whatsapp },
  { link: "phone", src: Icons.phone },
  { link: "email", src: Icons.email },
];

interface RenderItemProps {
  item: RadioOptionsProps;
  onClick: MouseEventHandler<HTMLButtonElement>;
  active?: RadioProps;
}

interface FormProps {
  name?: string;
  contact?: string;
  message?: string;
  radio?: RadioProps;
}

const initValuesForm: FormProps = {
  name: "",
  contact: "@",
  message: "Здравствуйте, меня зовут ",
  radio: "telegram",
};

type ErrorsMap = {
  [index: string]: string | null | undefined;
};

const initErrorForm: ErrorsMap = {
  name: null,
  contact: null,
  message: null,
};

function FormMessage() {
  const {
    values,
    errors,
    isValid,
    handleSetInput,
    handleSetRadio,
    initForm,
    isFormValid,
  } = useFormValidationStore();
  const { isTransfering, sendContactForm } = useFormStore();
  const isOpenNotification = useRecoilValue(isOpenNotificationState);
  const setIsOpenNotification = useSetRecoilState(isOpenNotificationState);

  useEffect(() => {
    initForm(initValuesForm, initErrorForm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    isFormValid();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  useEffect(() => {
    setTimeout(() => {
      if (isOpenNotification === true) {
        setIsOpenNotification(false)
        initForm(initValuesForm, initErrorForm);
      }
    }, 4000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpenNotification])

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (values) {
      sendContactForm({
        message: `Request: English Portfolio%0AName: ${values.name}%0ACommunication: ${values.radio}%0AContact: ${values.contact}%0AMessage: ${values.message}`,
      });
    }
  };

  const handleRadioClick = (e: MouseEvent<HTMLButtonElement>) => {
    const option = e.currentTarget.name;
    handleSetRadio(option);
  };

  const getContactLabel =
    values.radio === "telegram"
      ? "Имя пользователя телеграм"
      : values.radio === "whatsapp"
      ? "Номер WhatsApp"
      : values.radio === "phone"
      ? "Номер телефона"
      : "E-mail";
  
  const getContactPlaceholder =
    values.radio === "telegram"
      ? "@your_telegram"
      : values.radio === "whatsapp"
      ? "+7 (999) 999-99-99"
      : values.radio === "phone"
      ? "+7 (999) 999-99-99"
      : "your-email@mail.com";

  return (
    <form className="form" onSubmit={(e) => handleFormSubmit(e)}>
      <p className="form__subtitle">Укажите предпочитаемый вид связи</p>
      <section className="form__radio">
        {Object.values(radioOptions).map((item: RadioOptionsProps) => {
          return (
            <RenderItem
              key={nanoid()}
              item={item}
              active={values.radio}
              onClick={handleRadioClick}
            />
          );
        })}
      </section>

      <FieldInput
        type="text"
        name="name"
        label="Имя"
        value={values.name || ""}
        placeholder="Введите ваше имя"
        onChange={handleSetInput}
        error={errors.name || ""}
      />
      <FieldInput
        type="text"
        name="contact"
        label={getContactLabel}
        placeholder={getContactPlaceholder}
        option={values.radio}
        value={values.contact || ""}
        onChange={handleSetInput}
        error={errors.contact || ""}
      />
      <FieldInput
        type="textarea"
        name="message"
        label="Напишите мне или оставьте отзыв."
        value={values.message || ""}
        onChange={handleSetInput}
        error={errors.message || ""}
      />
      <Button
        type="submit"
        title={isTransfering ? "Отправка" : "Отправить"}
        main
        disabled={!isValid}
      />
    </form>
  );
}

export default FormMessage;

const RenderItem = ({ item, onClick, active }: RenderItemProps) => {
  const radioClassName = `form__label ${item.link === active ? "active" : ""}`;
  return (
    <button
      type="button"
      className={radioClassName}
      name={item.link}
      onClick={onClick}
    >
      <img src={item.src} alt={`иконка ${item.link}`} className="form__icon" />
    </button>
  );
};
