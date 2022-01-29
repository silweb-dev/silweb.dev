import { Locale, Localization } from "../models/localization";
import { Project } from "../models/project";

import localizationsEN from "./localizations/en.json";
import localizationsNL from "./localizations/nl.json";
import projectsEN from "./projects/en.json";
import projectsNL from "./projects/nl.json";

export const localizations: Record<Locale, Localization> = {
  en: localizationsEN,
  nl: localizationsNL,
};

export const projects: Record<Locale, Project[]> = {
  en: projectsEN,
  nl: projectsNL,
};

export default {
  localizations,
  projects,
};
