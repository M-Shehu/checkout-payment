import { HTMLProps } from "react";

type SelectProps = HTMLProps<HTMLSelectElement> & {
  options: { label: string; value: string }[];
  name: string;
};

export const Select = ({ options, name, ...selectProps }: SelectProps) => {
  return (
    <select
      name={name}
      className="rounded border border-gray-300 h-8 text-xs text-[#051636] flex-1"
      {...selectProps}
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};
