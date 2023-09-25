import React, { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage: boolean;
}

const Input: FC<InputProps> = ({ label, errorMessage, ...props }) => {
  return (
    <div className="my-[16px] sm:my-[24px]">
      <div className="flex items-center justify-between w-[295px] sm:w-[450px]">
        <label className="text-[12px] text-Denim capitalize sm:text-[14px]">
          {label}
        </label>
        {errorMessage && (
          <span className="text-[12px] font-bold mb-[6px] sm:mb-[11px] sm:text-[14px] text-redError ">
            This field required
          </span>
        )}
      </div>
      <input
        className={` text-Denim text-[16px] font-medium border-[1px] border-solid border-custom_border h-[40px] w-[295px] rounded-[4px] px-[16px] sm:w-[450px] sm:h-[48px] sm:rounded-[8px] ${
          errorMessage && "border-redError"
        }`}
        {...props}
      />
    </div>
  );
};

export default Input;
