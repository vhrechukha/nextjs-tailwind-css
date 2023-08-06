"use client";

import { forwardRef, PropsWithChildren, SelectHTMLAttributes } from "react";
import * as Form from "@radix-ui/react-form";
import { twMerge } from "tailwind-merge";
import {
  TAILWIND_DISABLED_INPUT,
  TAILWIND_INPUT,
  TAILWIND_ROUNDED_BORDER,
} from "@/utils/tailwind";
import * as Select from "@radix-ui/react-select";
import { AppIcon } from "@/components";
import SelectItem from "@/components/Select/SelectItem";

export type Option = {
  value: string;
  label: string;
};

export interface SelectProps
  extends PropsWithChildren<SelectHTMLAttributes<HTMLButtonElement>> {
  name: string;
  error?: string;
  label?: string;
  options?: ReadonlyArray<Option>;
  required?: boolean;
}

const CustomSelect = forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      value,
      defaultValue,
      className,
      disabled,
      name,
      error,
      label,
      options = [],
      required,
      onChange,
      ...restOfProps
    },
    ref,
  ) => {
    const id = name; // TODO: useId(); - Doesn't work, server htmlFor is not equal to client one
    const classToRender = twMerge(
      TAILWIND_INPUT,
      TAILWIND_DISABLED_INPUT ?? TAILWIND_DISABLED_INPUT,
      TAILWIND_ROUNDED_BORDER,
      "box-border inline-flex w-full appearance-none items-center justify-between leading-none outline-none",
      className,
    );

    return (
      <Form.Field className="w-full" name={name}>
        <div className="flex justify-between">
          {label && (
            <Form.Label
              htmlFor={id}
              className="text-sm font-medium whitespace-nowrap mb-1"
            >
              {label} {required && <span className="pl-1 text-red-600">*</span>}
            </Form.Label>
          )}
          {error && (
            <Form.Message className="text-xs text-end text-red-600">
              {error}
            </Form.Message>
          )}
        </div>
        <Select.Root
          disabled={disabled}
          name={name}
          onValueChange={(value) =>
            onChange ? onChange({ target: { name, value } } as any) : null
          }
          {...(restOfProps as any)}
        >
          <Select.Trigger
            className={classToRender}
            aria-label={id}
            aria-controls={id}
          >
            <Select.Value />
            <Select.Icon>
              <AppIcon icon="arrowdown" />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content
              className={twMerge(
                TAILWIND_INPUT,
                TAILWIND_ROUNDED_BORDER,
                "overflow-hidden",
                "p-0 m-0 w-full",
              )}
            >
              <Select.Viewport>
                <Select.Group>
                  {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </Select.Group>
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </Form.Field>
    );
  },
);

CustomSelect.displayName = "CustomSelect";

export default CustomSelect;
