import { InputFieldProps } from "@/types";
import React, { ChangeEvent } from "react";

const InputField = ({
  label,
  value,
  setValue,
  isDisabled,
}: InputFieldProps) => {
  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <div className="mb-4">
      <label
        className="block text-white text-sm font-bold mb-2"
        htmlFor="monthlySalary"
      >
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline disabled:text-white"
        id="inputField"
        type="number"
        placeholder="Enter amount here"
        value={value}
        onChange={handleValueChange}
        disabled={isDisabled}
      />
    </div>
  );
};

export default InputField;
