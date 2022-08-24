// API PARAMETERS
export const TELEGRAM_API = `https://api.telegram.org/bot`;
export const TELEGRAM_BOT = `5066999260`; //`1636295564`;
export const TELEGRAM_TOKEN = `AAHk9QysWmlH-q3FfT9aeTQiG6Sbgwm-Eiw
`; // `AAFMw5lTG94fohlDejTxFi_8jyvTjwl8E7Q`;
export const TELEGRAM_CHAT_ID = `-606630655`; //`-504085068`;

export const links = [
  {path: "/", name: "Обо мне"},
  {path: "/achivements", name: "Достижения"},
  {path: "/price", name: "Стоимость"},
  {path: "/feedbacks", name: "Отзывы"},
  {path: "/contacts", name: "Контакты"},
]

export const ESC_CODE = 27;


export const REG_NAME = /^[a-zA-Zа-яА-ЯЁё\s-_']+$/i;
export const REG_TELEGRAM = /^@[A-Za-z\d_]{5,64}$/;
export const REG_PHONE = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
export const REG_EMAIL = /^([a-zA-Z\d_.+-])+\@(([a-zA-Z\d-])+\.)+([a-zA-Z0\d]{2,4})+$/;
