import { NavigationItem } from "../models/navigation";

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
  };
};

export type Namespace = keyof Localization;
