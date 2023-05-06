import React from 'react';
import NotificationSvgGenerator from './NotificationSsgGenerator';
import { useFormStore } from '../../../store/form';
import { isOpenNotificationState } from '../../../store/globalUI';

import "./PopupNotification.sass";
import { useRecoilValue} from 'recoil';

const PopupNotification = () => {
  const {notification, isDelivered} = useFormStore();
  const isOpenNotification = useRecoilValue(isOpenNotificationState);
  const d = new Date();
  const timeNow = `${d.getHours()}:${d.getMinutes()}`;
  return (
    <section className={`notification${isOpenNotification ? ' active' : ''}`}>
      <div className='notification__body'>
        <NotificationSvgGenerator id={isDelivered ? 'ok' : 'error'} color={isDelivered ? '#49B066' : '#FF355D'} />
        <div className="notification__info">
          <h3 className="notification__title">{notification.title}</h3>
          <p className='notification__text'>{notification.message}</p>
        </div>
        <h3 className="notification__time">{timeNow}</h3>
      </div>
    </section>
  )
}

export default PopupNotification;
