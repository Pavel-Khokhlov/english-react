import {
  atom,
  useRecoilState,
} from 'recoil';
import {useCallback} from 'react';
import api from '../api/api';
import { TELEGRAM_CHAT_ID } from '../utils/config';

type FormRequestOptions = {
  message?: string;
};

interface ServerErrorProps {
  error_code?: number;
  description?: string;
}

export const isDeliveredState = atom<boolean>({
  key: 'isDeliveredState',
  default: false,
});

export const isTransferingState = atom<boolean>({
  key: 'isTransferingState',
  default: false,
});

export const serverErrorState = atom<ServerErrorProps | undefined>({
  key: 'ServerErrorState',
  default: {},
});

export const useFormStore = () => {
  const [isDelivered, setIsDelivered] = useRecoilState(isDeliveredState);
  const [serverError, setServerError] = useRecoilState(serverErrorState);
  const [isTransfering, setIsTransfering] = useRecoilState(isTransferingState);
  const sendContactForm = useCallback(async (options: FormRequestOptions) => {
    setIsTransfering(true);
    const {message} = options;
    const res = await api.post(`/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${message}`);
    if (res.ok === false) {
      setServerError({
        error_code: res.error_code,
        description: res.description,
      });
    }
    if (res.ok === true) {
      setIsDelivered(res.ok);
    }
    setIsTransfering(false);
  }, [setIsDelivered, setIsTransfering, setServerError]);

  return {
    isDelivered,
    isTransfering,
    sendContactForm,
    serverError,
  };
};

