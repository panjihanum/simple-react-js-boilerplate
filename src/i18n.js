import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import locale from './locale';

i18next
  .use(initReactI18next)
  .init({
    resources: locale,
    lng: "id",
    interpolation: {
      escapeValue: false,
    },
    debug: true
});

export default i18next;