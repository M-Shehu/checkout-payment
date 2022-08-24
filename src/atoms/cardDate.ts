import { atom } from "jotai";

export const cardMonthAtom = atom("");

export const cardYearAtom = atom("");

export const displayDateAtom = atom(
  (get) => `${get(cardMonthAtom) || "MM"}/${get(cardYearAtom) || "YY"}`
);
