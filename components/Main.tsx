import React, { FC } from "react";

interface MainProps {}

const Main: FC<MainProps> = ({ ...props }) => {
  return (
    <main
      className="bg-transparent sm:bg-white sm:flex sm:p-[16px] sm:rounded-[15px]"
      {...props}
    />
  );
};

export default Main;
