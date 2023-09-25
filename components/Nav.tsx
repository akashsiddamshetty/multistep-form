import React, { FC } from "react";

interface NavProps {}

const Nav: FC<NavProps> = ({ ...props }) => {
  return (
    <nav
      className="fixed bottom-0 w-full flex items-center justify-between p-[16px] sm:px-[10px] lg:px-[100px] h-[72px] sm:absolute bg-white"
      {...props}
    />
  );
};

export default Nav;
