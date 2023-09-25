import React, { FC } from "react";

interface H1Props {}

const H1: FC<H1Props> = ({ ...props }) => {
  return (
    <h1
      className="text-[24px] sm:text-[32px] sm:p-0 font-bold text-Denim"
      {...props}
    />
  );
};

export default H1;
