import { ButtonProps } from "@/types";
import React from "react";

const Button = ({ text, onClick, isDisabled, style }: ButtonProps) => {
  return (
    <div className="mb-6">
      <button
        className={`bg-blue-500 disabled:bg-blue-400 disabled:cursor-not-allowed hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${style} `}
        type="button"
        onClick={onClick}
        disabled={isDisabled}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
