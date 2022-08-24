import { Input } from "./Input";
import { MONTHS, YEARS } from "../constants";
import { Select } from "./Select";

export const Form = () => {
  return (
    <form className="bg-white rounded-xl w-112 -m-26 p-7 pt-36">
      <div className="flex flex-col gap-3">
        <Input
          name="card-number"
          label="Card Number"
          type="tel"
          inputMode="numeric"
          pattern="[0-9\s]{13,19}"
          maxLength={19}
        />
        <Input name="card-name" label="Card Name" type="text" maxLength={50} />
        <div className="flex items-start justify-between gap-5">
          <fieldset className="flex-1">
            <legend className="text-xxs pb-0.5 text-gray-500 font-bold">
              Expiration Date
            </legend>
            <div className="flex gap-2">
              <Select name="month" aria-label="month" options={MONTHS} />
              <Select name="year" aria-label="year" options={YEARS} />
            </div>
          </fieldset>
          <div className="w-2/6">
            <Input
              name="cvv"
              label="CVV"
              type="tel"
              inputMode="numeric"
              pattern="[0-9\s]{3}"
              maxLength={3}
            />
          </div>
        </div>
      </div>
      <button className="bg-clean-blue w-full rounded text-white py-2.5 text-sm mt-7 shadow-lg shadow-clean-blue/25">
        Submit
      </button>
    </form>
  );
};
