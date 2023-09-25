import React, { FC, FormHTMLAttributes } from "react";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {}

const Form: FC<FormProps> = ({ ...props }) => {
  return (
    <form
      className="absolute rounded-[10px] py-[32px] px-[24px] sm:pt-[40px] sm:p-0 bg-white max-w-[343px] sm:min-w-[450px] sm:mx-[10px] lg:mx-[100px] sm:relative right-0 left-0 m-auto -top-[73px] sm:top-0"
      {...props}
    />
  );
};

export default Form;
