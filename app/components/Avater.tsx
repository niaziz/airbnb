"use client";
import React from "react";
import Image from "next/image";

type Props = {};

const Avater = (props: Props) => {
  return (
    <Image
      className="rounded-full"
      height="27"
      width="27"
      alt="Avater"
      src="/images/placeholder.jpg"
    />
  );
};

export default Avater;
