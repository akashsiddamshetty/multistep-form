"use client";
import Button from "@/components/Button";
import Form from "@/components/Form";
import H1 from "@/components/H1";
import H5 from "@/components/H5";
import Input from "@/components/Input";
import Nav from "@/components/Nav";
import Section from "@/components/Section";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface formValues {
  name: string;
  email: string;
  phone_number: string;
}

interface FormField {
  label: string;
  name: keyof formValues;
  id: string;
  placeholder: string;
  pattern: RegExp;
}

const fields: FormField[] = [
  {
    label: "Name",
    name: "name",
    id: "name",
    placeholder: "e.g. Stephen King",
    pattern: /^.+$/,
  },
  {
    label: "Email Address",
    name: "email",
    id: "email",
    placeholder: "e.g. stephenking@lorem.com",
    pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  },
  {
    label: "Phone Number",
    name: "phone_number",
    id: "phone_number",
    placeholder: "e.g. +1 234 567 890",
    pattern: /^\d{10}$/,
  },
];

export default function Home() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formValues>();

  const onSubmit = handleSubmit(() => {
    router.push("/select_plan");
  });
  return (
    <Section>
      <Form>
        <H1>Personal info</H1>
        <H5>Please provide your name, email address, and phone number.</H5>
        {fields.map((field, index) => {
          const { name, id, label, placeholder, pattern } = field;
          return (
            <Input
              id={id}
              key={index}
              label={label}
              errorType={errors?.[name]?.type}
              placeholder={placeholder}
              {...register(name, {
                required: true,
                pattern: pattern,
              })}
            />
          );
        })}
      </Form>
      <Nav>
        <div></div>
        <Button variant="submit" type="submit" onClick={() => onSubmit()}>
          next step
        </Button>
      </Nav>
    </Section>
  );
}
