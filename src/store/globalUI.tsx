import {
  atom,
} from 'recoil';

export const isOpenNotificationState = atom<boolean>({
  key: 'isOpenNotificationState',
  default: false,
});
