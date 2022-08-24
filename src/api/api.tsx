import { TELEGRAM_API, TELEGRAM_BOT, TELEGRAM_TOKEN } from "../utils/config";
const axios = require('axios');

const api = axios.create({
  baseURL: `${TELEGRAM_API}${TELEGRAM_BOT}:${TELEGRAM_TOKEN}`
});

export default api;
