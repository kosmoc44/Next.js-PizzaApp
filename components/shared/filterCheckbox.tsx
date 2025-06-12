import React from "react";
import { Checkbox } from "../ui";

export interface FilterCheckboxProps {
  text: string;
  value: string;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  name?: string;
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  text,
  value,
  checked,
  endAdornment,
  onCheckedChange,
  name,
}) => {
  return (
    <div className="flex items-center space-x-2 w-max">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className=" w-5 h-5 bg-gray-200/30 border-0"
        id={`checkbox-${String(name)}-${String(value)}`}
      />
      <label
        htmlFor={`checkbox-${String(name)}-${String(value)}`}
        className="leading-none cursor-pointer flex-1`"
      >
        {text}
      </label>
      {endAdornment}
    </div>
  );
};

export default FilterCheckbox;
