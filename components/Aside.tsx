"use client";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

interface AsideProps {}

const Aside: FC<AsideProps> = ({}) => {
  const path = usePathname();
  const asideData = [
    {
      id: 1,
      step: "step 1",
      name: "YOUR INFO",
      pathname: "/",
    },
    {
      id: 2,
      step: "step 2",
      name: "SELECT PLAN",
      pathname: "/select_plan",
    },
    {
      id: 3,
      step: "step 3",
      name: "ADD-ONS",
      pathname: "/add_ons",
    },
    {
      id: 4,
      step: "step 4",
      name: "SUMMARY",
      pathname: "/summary",
    },
  ];
  return (
    <aside className="bg-mobile_background w-full bg-cover flex sm:flex-col pt-[32px] sm:pl-[32px] sm:pt-[40px] gap-[16px]  justify-center sm:justify-start h-[172px] sm:bg-desktop_background sm:w-[274px] sm:h-[568px] ">
      {asideData.map((data) => {
        const { id, step, name, pathname } = data;
        return (
          <div
            key={id}
            className="text-white sm:flex sm:items-center sm:gap-[16px]"
          >
            <div
              className={` w-[33px] flex justify-center items-center h-[33px] border-solid border-white border-[1px] rounded-full ${
                pathname === path && "bg-skyBlue text-black"
              }`}
            >
              {id}
            </div>
            <div className="hidden sm:block">
              <span className="uppercase text-lightBlue text-xs">{step}</span>
              <h1 className="uppercase font-bold text-sm">{name}</h1>
            </div>
          </div>
        );
      })}
    </aside>
  );
};

export default Aside;
