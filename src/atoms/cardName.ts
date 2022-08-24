import { atom } from "jotai";

export const cardNameAtom = atom("");

export const displayCardNameAtom = atom(
  (get) => get(cardNameAtom) || "AD SOYAD"
);
