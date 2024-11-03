import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Initialize i18n with inline translation resources
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome",
        description: "This is a sample description.",
      },
    },
    es: {
      translation: {
        welcome: "Bienvenido",
        description: "Esta es una descripción de ejemplo.",
      },
    },
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
