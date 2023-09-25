"use client";
import Button from "@/components/Button";
import Form from "@/components/Form";
import H1 from "@/components/H1";
import H5 from "@/components/H5";
import Input from "@/components/Input";
import Nav from "@/components/Nav";
import Section from "@/components/Section";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

interface formValues {
  name: string;
  email: string;
  phone_number: string;
}
interface formErrors {
  name: boolean;
  email: boolean;
  phone_number: boolean;
}
export default function Home() {
  const router = useRouter();
  const initalValues = { name: "", email: "", phone_number: "" };
  const initalErrors = {
    name: false,
    email: false,
    phone_number: false,
  };
  const [formValues, setFormValues] = useState<formValues>(initalValues);
  const [formErrors, setFormErrors] = useState<formErrors>(initalErrors);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    let isValid = false;
    const newErrors = { ...initalErrors };

    if (!formValues.name) {
      newErrors.name = true;
      isValid = true;
    }

    if (!formValues.email) {
      newErrors.email = true;
      isValid = true;
    }

    if (!formValues.phone_number) {
      newErrors.phone_number = true;
      isValid = true;
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      router.push("/select_plan");
    }
  };

  return (
    <Section>
      <Form>
        <H1>Personal info</H1>
        <H5>Please provide your name, email address, and phone number.</H5>
        <Input
          label="Name"
          name="name"
          id="name"
          value={formValues.name}
          errorMessage={formErrors.name}
          placeholder="e.g. Stephen King"
          required
          onChange={(e) => handleChange(e)}
        />
        <Input
          label="Email Address"
          name="email"
          id="email"
          errorMessage={formErrors.email}
          required
          placeholder="e.g. stephenking@lorem.com"
          onChange={(e) => handleChange(e)}
        />
        <Input
          label="Phone Number"
          name="phone_number"
          id="phone_number"
          errorMessage={formErrors.phone_number}
          required
          placeholder="e.g. +1 234 567 890"
          onChange={(e) => handleChange(e)}
        />
      </Form>
      <Nav>
        <div></div>
        <Button variant="submit" onClick={(e) => handleSubmit(e)}>
          next step{" "}
        </Button>
      </Nav>
    </Section>
  );
}
