"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  const router = useRouter();
  return (
    <Image
      className="hidden md:block cursor-pointer"
      height="100"
      width="100"
      src="/images/logo.png"
      alt="logo"
    />
  );
};

export default Logo;
