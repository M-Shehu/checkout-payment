import { atom } from "jotai";
import { cardMonthAtom, cardYearAtom } from "./cardDate";
import { cardNameAtom } from "./cardName";
import { cardNumberAtom } from "./cardNumber";
import { cvvAtom } from "./cvv";

// Payload is reconstructed from state atoms
export const payloadAtom = atom((get) => ({
  cardNumber: get(cardNumberAtom),
  cardName: get(cardNameAtom),
  cvv: get(cvvAtom),
  expiryMonth: get(cardMonthAtom),
  expiryYear: get(cardYearAtom),
}));
