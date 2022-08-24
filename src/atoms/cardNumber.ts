import { atom } from "jotai";

export const cardNumberAtom = atom("");

/**
 * This atom chunks the card number into groups of 4
 */
export const cardNumberGroupAtom = atom<string[]>((get) => {
  const cardNumber = get(cardNumberAtom);

  let numberChunks = [];

  for (let idx = 0; idx < 16; idx++) {
    let numberToAdd = cardNumber[idx] || "#";

    /** Change the 4th - 12th character to star (*) */
    if (idx > 3 && idx < 12 && cardNumber[idx] !== undefined) {
      numberToAdd = "*";
    }

    if (idx % 4 === 0) {
      numberChunks.push(numberToAdd);
    } else {
      numberChunks[numberChunks.length - 1] += numberToAdd;
    }
  }

  return numberChunks;
});
