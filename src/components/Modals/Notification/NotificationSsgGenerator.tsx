import React from 'react';

interface Props {
  id: string,
  color: string,
}

const NotificationSvgGenerator = ({id, color}: Props) => {
  switch (id) {
    case 'error':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10"/>
      <path d="M15.25 8.75L8.75 15.25" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M8.75 8.75L15.25 15.25" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
      </svg>
      );
    case 'ok': 
      return (<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.9903 8.6605C20.4303 9.686 20.6758 10.8145 20.6758 12C20.6758 16.687 16.8628 20.5 12.1758 20.5C7.48878 20.5 3.67578 16.687 3.67578 12C3.67578 7.313 7.48878 3.5 12.1758 3.5C14.3988 3.5 16.4188 4.3645 17.9348 5.7665L18.9948 4.7065C17.2063 3.033 14.8123 2 12.1758 2C6.66178 2 2.17578 6.486 2.17578 12C2.17578 17.514 6.66178 22 12.1758 22C17.6898 22 22.1758 17.514 22.1758 12C22.1758 10.3955 21.7868 8.8835 21.1123 7.538L19.9903 8.6605Z" fill={color} />
      <path d="M8.42578 12.75L10.9258 15.25L19.9258 6.25" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      )
    default:
      return <svg></svg>
  }
}

export default NotificationSvgGenerator;
