"use client";
import Button from "@/components/Button";
import Form from "@/components/Form";
import H1 from "@/components/H1";
import H5 from "@/components/H5";
import Nav from "@/components/Nav";
import Section from "@/components/Section";
import { Addons, SubscriptionPlan, Yearly, setYearly } from "@/redux/formSlice";
import { useRouter } from "next/navigation";
import { FC, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface SummaryProps {}

const Summary: FC<SummaryProps> = ({}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const yearly = useSelector(Yearly);
  const subscriptionPlan = useSelector(SubscriptionPlan);
  const [totalAmount, setTotalAmount] = useState(0);
  const addons = useSelector(Addons);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/thankyou");
  };

  useEffect(() => {
    const sumOfAddons = addons?.reduce(
      (acc, addon) =>
        acc + (yearly ? addon.yearly_amount : addon.monthly_amount),
      0
    );
    if (subscriptionPlan && sumOfAddons)
      setTotalAmount(
        sumOfAddons +
          (yearly
            ? subscriptionPlan.yearly_amount
            : subscriptionPlan.monthly_amount)
      );
  }, [addons, subscriptionPlan, yearly]);

  return (
    <Section>
      <Form>
        <H1>Finishing up</H1>
        <H5>Double-check everything looks OK before confirming.</H5>
        <div className="my-10">
          <div className="rounded-lg text-Grey p-4 w-full bg-veryLightGrey">
            <div className="flex text-Denim items-center justify-between">
              <div>
                <h1 className="text-Denim">
                  {subscriptionPlan?.title}({yearly ? "Yearly" : "Monthly"})
                </h1>
                <button
                  type="button"
                  className="hover:text-purpleBorder"
                  onClick={() => dispatch(setYearly(!yearly))}
                >
                  change
                </button>
              </div>
              <span className="font-semibold">
                {yearly
                  ? `$${subscriptionPlan?.yearly_amount}/yr`
                  : `$${subscriptionPlan?.monthly_amount}/mo`}
              </span>
            </div>
            <div className="h-[1px] mt-6 mb-4 w-full bg-Grey rounden-full" />
            {addons?.map((addon) => {
              const { id, title, monthly_amount, yearly_amount } = addon;
              return (
                <div key={id} className="flex items-center justify-between">
                  <h1>{title}</h1>
                  <span className="text-Denim text-xs">
                    {yearly ? `$${yearly_amount}/yr` : `$${monthly_amount}/mo`}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="mt-6 text-Grey p-4 flex items-center justify-between">
            <h1>Total({yearly ? "per yearly" : "per monthly"})</h1>
            <span className="text-purpleBorder text-xl font-bold">
              {yearly ? `$${totalAmount}/yr` : `$${totalAmount}/mo`}
            </span>
          </div>
        </div>
      </Form>
      <Nav>
        <Button onClick={() => router.back()}>Go Back</Button>
        <Button
          variant="submit"
          className="bg-purpleBorder hover:bg-[#928CFF]"
          onClick={(e) => handleSubmit(e)}
        >
          Confirm
        </Button>
      </Nav>
    </Section>
  );
};
export default Summary;
