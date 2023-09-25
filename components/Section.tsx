import React, { FC } from "react";

interface SectionProps {}

const Section: FC<SectionProps> = ({ ...props }) => {
  return <section className="relative bg-custom_bg sm:bg-white" {...props} />;
};

export default Section;
