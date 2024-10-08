import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { enHeader, enCard } from '../json/en/translation';
import { arHeader, arCard } from '../json/ar/translation';
const resources = {
  en: {
    header: enHeader,
    translation: enCard,
  },
  ar: {
    header: arHeader,
    translation: arCard,
  },
};

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
  });

export default i18n;
