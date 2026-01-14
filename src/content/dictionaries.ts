import fr from "@/content/fr";
import en from "@/content/en";

export type Lang = "fr" | "en";
export type Dictionary = typeof fr;

export function getDictionary(lang: Lang): Dictionary {
  return lang === "fr" ? fr : en;
}
