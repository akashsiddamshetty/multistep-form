import Form from "@/components/Form";
import Section from "@/components/Section";
import Image from "next/image";
import { FC } from "react";

interface ThankyouProps {}

const Thankyou: FC<ThankyouProps> = ({}) => {
  return (
    <Section>
      <Form  >
        <div className="flex flex-col items-center justify-center">
          <Image src="/thankyou.svg" alt="thankyou" width={80} height={80} />
          <h1 className="text-Denim my-4 text-4xl font-semibold">Thank you!</h1>
        </div>
        <p className="text-Grey text-center">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </Form>
    </Section>
  );
};
export default Thankyou;
