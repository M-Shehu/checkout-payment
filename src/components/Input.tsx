import { HTMLProps } from "react";

type InputProps = HTMLProps<HTMLInputElement> & {
  name: string;
  label: string;
};

export const Input = ({ name, label, ...inputProps }: InputProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-xxs pb-0.5 text-gray-500 font-bold">
        {label}
      </label>
      <input
        className="rounded border border-gray-300 h-8"
        name={name}
        {...inputProps}
      />
    </div>
  );
};
