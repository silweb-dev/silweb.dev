import i18next from "i18next";

import { localizations } from "../constants";

i18next.init({
  lng: "en",
  resources: {
    en: {
      translation: localizations.en,
    },
    nl: {
      translation: localizations.nl,
    },
  },
});

export default i18next;
