import React, { FC } from "react";

interface H5Props {}

const H5: FC<H5Props> = ({ ...props }) => {
  return <h6 className="text-Grey text-[16px] font-[400]" {...props} />;
};

export default H5;
