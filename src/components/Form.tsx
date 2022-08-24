import { ChangeEvent, FormEvent } from "react";
import { useAtom, useAtomValue } from "jotai";

import { cardNumberAtom } from "atoms/cardNumber";
import { cardNameAtom } from "atoms/cardName";
import { cvvAtom } from "atoms/cvv";
import { cardMonthAtom, cardYearAtom } from "atoms/cardDate";

import { Input } from "./Input";
import { MONTHS, YEARS } from "../constants";
import { Select } from "./Select";
import { payloadAtom } from "atoms/payload";

export const Form = () => {
  const [cardNumber, setCardNumber] = useAtom(cardNumberAtom);
  const [cardName, setCardName] = useAtom(cardNameAtom);
  const [cvv, setCvv] = useAtom(cvvAtom);
  const [month, setMonth] = useAtom(cardMonthAtom);
  const [year, setYear] = useAtom(cardYearAtom);

  const payload = useAtomValue(payloadAtom);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    /** TODO: Implement form validation */
    event.preventDefault();
    console.log(payload);
  };

  return (
    <form
      className="bg-white rounded-xl w-112 -m-26 p-7 pt-36"
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-3">
        <Input
          name="card-number"
          label="Card Number"
          type="tel"
          inputMode="numeric"
          pattern="[0-9\s]{13,19}"
          value={cardNumber}
          maxLength={16}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            (/^[0-9\b]+$/.test(event.target.value) ||
              event.target.value === "") &&
            setCardNumber(event.target.value)
          }
        />

        <Input
          name="card-name"
          label="Card Name"
          type="text"
          maxLength={50}
          value={cardName}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setCardName(event.target.value)
          }
        />

        <div className="flex items-start justify-between gap-5">
          <fieldset className="flex-1">
            <legend className="text-xxs pb-0.5 text-gray-500 font-bold">
              Expiration Date
            </legend>
            <div className="flex gap-2">
              <Select
                name="month"
                aria-label="month"
                options={MONTHS}
                value={month}
                onChange={(event: ChangeEvent<HTMLSelectElement>) =>
                  setMonth(event.target.value)
                }
              />
              <Select
                name="year"
                aria-label="year"
                options={YEARS}
                value={year}
                onChange={(event: ChangeEvent<HTMLSelectElement>) =>
                  setYear(event.target.value)
                }
              />
            </div>
          </fieldset>
          <div className="w-2/6">
            <Input
              name="cvv"
              label="CVV"
              type="tel"
              inputMode="numeric"
              value={cvv}
              pattern="[0-9\s]{3}"
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setCvv(event.target.value)
              }
              maxLength={3}
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="bg-clean-blue w-full rounded text-white py-2.5 text-sm mt-7 shadow-lg shadow-clean-blue/25"
      >
        Submit
      </button>
    </form>
  );
};
