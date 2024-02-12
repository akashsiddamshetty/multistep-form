import { Yearly } from "@/redux/formSlice";
import Image from "next/image";
import React, { FC, InputHTMLAttributes } from "react";

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  src: string;
  alt: string;
  title: string;
  amount: number;
  free: string;
  yearly: boolean;
}

const Radio: FC<RadioProps> = ({
  id,
  src,
  alt,
  title,
  checked,
  free,
  amount,
  yearly,
  ...props
}) => {
  return (
    <label
      className={` cursor-pointer w-[295px] px-[16px] gap-[16px] pt-[14px] sm:flex-col sm:p-0 items-start sm:gap-0 justify-start flex  border-[1px] sm:px-[16px] sm:py-[20px] sm:w-[138px] sm:h-[183px] border-solid border-Grey  rounded-[8px] ${
        checked && "border-purpleBorder bg-veryLightGrey"
      }`}
      htmlFor={id}
    >
      <Image
        src={src}
        alt={alt}
        width={40}
        height={40}
        className="sm:mb-[39px]"
      />
      <div>
        <h5 className="sm:text-[16px] text-Denim font-medium">{title}</h5>
        <span className="sm:text-[14px] font-normal sm:my-[7px] text-Grey ">
          {yearly ? `$${amount}/yr` : `$${amount}/mo`}
        </span>
        <h6 className="text-[12px] text-Denim">{free}</h6>
        <input
          className="w-0 h-0"
          id={id}
          checked={checked}
          type="radio"
          {...props}
        />
      </div>
    </label>
  );
};

export default Radio;
