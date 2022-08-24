type SelectProps = {
  options: { label: string; value: string }[];
  name: string;
};

export const Select = ({ options, name }: SelectProps) => {
  return (
    <select
      name={name}
      className="rounded border border-gray-300 h-8 text-xs text-[#051636] flex-1"
    >
      {options.map(({ value, label }) => (
        <option value={value}>{label}</option>
      ))}
    </select>
  );
};
