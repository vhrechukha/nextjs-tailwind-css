"use client";

import { FunctionComponent, HTMLAttributes, PropsWithChildren } from "react";
import { TAILWIND_INPUT, TAILWIND_ROUNDED_BORDER } from "@/utils/tailwind";
import { Card } from "@/components/Card";
import { twMerge } from "tailwind-merge";
import { Stack } from "@/components/Stack";

const TAILWIND_CIRCLE_ICON =
  "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full";

const TAILWIND_OUTER_CIRCLE_ICON = [
  TAILWIND_CIRCLE_ICON,
  "h-4 w-4 bg-blue-300 opacity-50",
].join(" ");

const TAILWIND_INNER_CIRCLE_ICON = [
  TAILWIND_CIRCLE_ICON,
  "h-1 w-1 bg-blue-600",
].join(" ");

const StatusBar: FunctionComponent<
  PropsWithChildren<HTMLAttributes<HTMLInputElement>>
> = ({ className, children }) => {
  const classToRender = twMerge(
    TAILWIND_INPUT,
    TAILWIND_ROUNDED_BORDER,
    "h-[35px] flex bg-white w-fit text-sm items-center justify-between gap-20 focus:border-none hover:border-color-none py-5 px-4 rounded-xl",
    className,
  );

  return (
    <>
      <Card className={classToRender}>
        {children}
        <Stack direction="row" justifyContent="center" alignContent="center">
          <div className="relative h-8 w-8">
            <div className={TAILWIND_OUTER_CIRCLE_ICON}></div>
            <div className={TAILWIND_INNER_CIRCLE_ICON}></div>
          </div>
        </Stack>
      </Card>
    </>
  );
};

export default StatusBar;
