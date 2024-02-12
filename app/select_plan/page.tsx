"use client";
import Button from "@/components/Button";
import Form from "@/components/Form";
import H1 from "@/components/H1";
import H5 from "@/components/H5";
import Nav from "@/components/Nav";
import Radio from "@/components/Radio";
import Section from "@/components/Section";
import {
  SubscriptionPlan,
  Yearly,
  setSubscriptionPlan,
  setYearly,
} from "@/redux/formSlice";
import { useAppDispatch } from "@/redux/store";
import { cn } from "@/utils/Utils";
import { useRouter } from "next/navigation";
import React, { FC, FormEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const options = [
  {
    id: "arcade",
    title: "Arcade",
    src: "/arcade-svg.svg",
    monthly_amount: 9,
    yearly_amount: 90,
    free: "2 months free",
  },
  {
    id: "advanced",
    title: "Advanced",
    src: "/advance-svg.svg",
    monthly_amount: 12,
    yearly_amount: 120,
    free: "2 months free",
  },
  {
    id: "pro",
    title: "Pro",
    src: "/pro-svg.svg",
    monthly_amount: 15,
    yearly_amount: 150,
    free: "2 months free",
  },
];

interface pageProps {}

const SelectPlan: FC<pageProps> = ({}) => {
  const router = useRouter();
  const yearly = useSelector(Yearly);
  const subscriptionPlan = useSelector(SubscriptionPlan);
  const dispatch = useAppDispatch();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/add_ons");
  };

  const handleCheckboxChange = () => {
    dispatch(setYearly(!yearly));
  };

  return (
    <Section>
      <Form>
        <H1>Select your plan</H1>
        <H5>You have the option of monthly or yearly billing.</H5>
        <div className="flex flex-col gap-[12px] sm:flex-row mt-[22px] sm:gap-0 justify-between items-center sm:mt-[35px]">
          {options.map((option) => {
            const { id, title, src, monthly_amount, yearly_amount, free } =
              option;
            return (
              <Radio
                key={id}
                id={id}
                src={src}
                alt={title}
                yearly={yearly}
                amount={yearly ? yearly_amount : monthly_amount}
                checked={subscriptionPlan?.title === title}
                title={title}
                onChange={() => {
                  dispatch(setSubscriptionPlan(option));
                }}
                free={yearly ? free : ""}
              />
            );
          })}
        </div>
        <div className="my-8 bg-veryLightGrey h-12 w-full flex items-center justify-center gap-6 rounded-lg text-center">
          <span className={cn("text-Grey", { "text-Denim": !yearly })}>
            Monthly
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={yearly}
              onChange={handleCheckboxChange}
            />
            <div
              className={cn(
                "w-[38px] h-5 bg-Denim rounded-full  peer  after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[7px] after:bg-white  after:border after:rounded-full after:h-3 after:w-3 after:transition-all ",
                {
                  "peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full":
                    yearly,
                }
              )}
            ></div>
          </label>
          <span className={cn("text-Grey", { "text-Denim": yearly })}>
            Yearly
          </span>
        </div>
      </Form>
      <Nav>
        <Button onClick={() => router.back()}>Go Back</Button>
        <Button variant="submit" onClick={(e) => handleSubmit(e)}>
          next step
        </Button>
      </Nav>
    </Section>
  );
};

export default SelectPlan;
