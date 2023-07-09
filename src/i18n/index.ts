import { createI18n } from 'vue-i18n';
import zhCN from './zh-cn';
import en from './en';

export default createI18n({
  legacy: false,
  locale: navigator.language === 'zh' ? 'zh-CN' : navigator.language,
  fallbackLocale: 'en',
  messages: {
    'zh-CN': {
      ...zhCN,
    },
    en: {
      ...en,
    },
  },
});
