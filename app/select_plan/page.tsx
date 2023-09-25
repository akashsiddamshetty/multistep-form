"use client";
import Button from "@/components/Button";
import Form from "@/components/Form";
import H1 from "@/components/H1";
import H5 from "@/components/H5";
import Nav from "@/components/Nav";
import Radio from "@/components/Radio";
import Section from "@/components/Section";
import { useRouter } from "next/navigation";
import React, { FC, FormEvent, useState } from "react";

interface pageProps {}

const SelectPlan: FC<pageProps> = ({}) => {
  const router = useRouter();
  const [yearly, setYearly] = useState(true);
  const options = [
    {
      id: "arcade",
      title: "Arcade",
      src: "/arcade-svg.svg",
      monthly_amount: "$9/mo",
      yearly_amount: "$90/yr",
      free: "2 months free",
    },
    {
      id: "advanced",
      title: "Advanced",
      src: "/advance-svg.svg",
      monthly_amount: "$12/mo",
      yearly_amount: "$120/yr",
      free: "2 months free",
    },
    {
      id: "pro",
      title: "Pro",
      src: "/pro-svg.svg",
      monthly_amount: "$15/mo",
      yearly_amount: "$150/yr",
      free: "2 months free",
    },
  ];
  const [selectedCard, setSelectedCard] = useState("Arcade");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
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
                amount={yearly ? yearly_amount : monthly_amount}
                checked={selectedCard === title}
                title={title}
                onChange={() => setSelectedCard(title)}
                free={yearly ? free : ""}
              />
            );
          })}
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
