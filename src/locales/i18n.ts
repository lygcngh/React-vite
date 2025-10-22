import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from './en/common';
import zhCommon from './zh/common';

i18n.use(initReactI18next).init({
  resources: {
    en: { common: enCommon },
    zh: { common: zhCommon }
  },
  lng: 'zh',
  fallbackLng: 'en',
  ns: ['common'],
  defaultNS: 'common'
});

export default i18n;