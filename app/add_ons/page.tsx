"use client";
import Button from "@/components/Button";
import Form from "@/components/Form";
import H1 from "@/components/H1";
import H5 from "@/components/H5";
import Nav from "@/components/Nav";
import Section from "@/components/Section";
import { Addons, Yearly, setAddons } from "@/redux/formSlice";
import { cn } from "@/utils/Utils";
import { useRouter } from "next/navigation";
import { FC, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

const addonsData = [
  {
    id: 0,
    title: "Online service",
    content: "Access to multiplayer games",
    monthly_amount: 1,
    yearly_amount: 10,
  },
  {
    id: 1,
    title: "Larger storage",
    content: "Extra 1TB of cloud save",
    monthly_amount: 2,
    yearly_amount: 20,
  },
  {
    id: 2,
    title: "Customizable profile",
    content: "Custom theme on your profile",
    monthly_amount: 2,
    yearly_amount: 20,
  },
];

interface AddOnsProps {}

const AddOns: FC<AddOnsProps> = ({}) => {
  const router = useRouter();
  const yearly = useSelector(Yearly);
  const addons = useSelector(Addons);
  const dispatch = useDispatch();
  const handlechecked = (e: FormEvent) => {
    const { checked, name } = e.target as HTMLInputElement;
    if (checked) {
      const selected = addonsData.filter((content) => content.title === name);
      return dispatch(
        setAddons(addons ? [...addons!, ...selected] : [...selected])
      );
    }

    const prev = addons!.filter((content) => content.title !== name);
    return dispatch(setAddons(prev.length !== 0 ? [...prev] : null));
  };

  const checked = (title: string) => {
    if (addons) {
      for (const i of addons!) {
        if (title.includes(i.title)) return true;
      }
    }
    return false;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/summary");
  };
  return (
    <Section>
      <Form>
        <H1>Pick add-ons</H1>
        <H5>Add-ons help enhance your gaming experience.</H5>
        <div className="my-10 flex flex-col gap-4">
          {addonsData.map((data) => {
            const { id, title, content, monthly_amount, yearly_amount } = data;
            return (
              <label
                htmlFor={"checkbox" + id}
                key={id}
                className={cn(
                  "cursor-pointer gap-2 lg:gap-6 px-4 lg:px-6 border-custom_border border rounded-lg w-full h-20 flex items-center justify-around",
                  {
                    "border-purpleBorder bg-veryLightGrey": checked(title),
                  }
                )}
              >
                <input
                  type="checkbox"
                  name={title}
                  checked={addons?.length !== 0 && checked(title)}
                  id={"checkbox" + id}
                  onChange={(e) => handlechecked(e)}
                />
                <div className="flex-1">
                  <h1 className="text-Denim ">{title}</h1>
                  <span className="text-sm text-Grey">{content}</span>
                </div>
                <div className="text-xs lg:text-sm text-purpleBorder">
                  {yearly ? `$${yearly_amount}/yr` : `$${monthly_amount}/mo`}
                </div>
              </label>
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
export default AddOns;
function content(
  value: { id: number; title: string; content: string; price: number },
  index: number,
  array: { id: number; title: string; content: string; price: number }[]
): value is { id: number; title: string; content: string; price: number } {
  throw new Error("Function not implemented.");
}
