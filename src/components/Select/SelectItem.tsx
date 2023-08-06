"use client";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import * as Select from "@radix-ui/react-select";
import { AppIcon } from "@/components";
import { TAILWIND_INPUT, TAILWIND_ROUNDED_BORDER } from "@/utils/tailwind";

const SelectItem = forwardRef(
  ({ children, className, ...props }: any, forwardedRef: any) => {
    return (
      <Select.Item
        className={twMerge(
          TAILWIND_INPUT,
          TAILWIND_ROUNDED_BORDER,
          "relative flex h-[46px] w-full select-none items-center bg-white leading-none data-[disabled]:pointer-events-none data-[highlighted]:bg-blue-300 data-[disabled]:text-blue-50 data-[highlighted]:text-blue-600 data-[highlighted]:outline-none border-none hover:border-none",
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute pr-[10px] right-0 inline-flex items-center justify-center">
          <AppIcon icon="success" />
        </Select.ItemIndicator>
      </Select.Item>
    );
  },
);

SelectItem.displayName = "SelectItem";

export default SelectItem;
