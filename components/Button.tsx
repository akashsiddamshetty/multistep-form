import { cn } from "@/utils/Utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes, FC } from "react";

const buttonVariants = cva("", {
  variants: {
    variant: {
      default:
        " text-Grey hover:text-Denim text-[14px] font-bold sm:text-[16px]",
      submit:
        "bg-Denim w-[97px] h-[40px] hover:bg-lightDenim text-[14px] font-medium rounded-[4px] sm:w-[123px] sm:h-[48px] sm:text-[16px] sm:rounded-[8px] text-white capitalize",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = ({ className, variant, ...props }) => {
  return (
    <button className={cn(buttonVariants({ className, variant }))} {...props} />
  );
};

export default Button;
