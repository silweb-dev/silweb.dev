import { NavigationItem } from "../models/navigation";
import { Technique } from "../models/technique";

export type Locale = "en" | "nl";

export type Localization = {
  site: {
    title: string;
    navigation: Record<NavigationItem, string>;
  };
  intro: {
    title: string;
    description: {
      line1: string;
      line2: string;
    };
    showWork: string;
  };
  projects: {
    subtitle: string;
    title: string;
    seeProject: string;
  };
  techniques: Record<Technique, string>;
};

export type Namespace = keyof Localization;
