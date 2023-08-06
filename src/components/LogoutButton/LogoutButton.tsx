"use client";

import { FunctionComponent, HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { FiLogOut } from "react-icons/fi";
import AppIcon from "@/components/AppIcon";

const LogoutButton: FunctionComponent<
  PropsWithChildren<HTMLAttributes<HTMLInputElement>>
> = ({ className }) => {
  const classToRender = twMerge(
    "inline-flex h-[35px] w-fit items-center text-sm justify-center gap-[5px] rounded-xl px-[15px] leading-none text-gray-600 hover:bg-gray-50",
    className,
  );

  return (
    <button className={classToRender}>
      <AppIcon icon="logout" className="h-[20px]" color="none" />
      Logout
    </button>
  );
};

export default LogoutButton;
