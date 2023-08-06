"use client";

import { forwardRef, InputHTMLAttributes, PropsWithChildren } from "react";
import * as Form from "@radix-ui/react-form";
import { twMerge } from "tailwind-merge";
import {
  TAILWIND_DISABLED_INPUT,
  TAILWIND_INPUT,
  TAILWIND_ROUNDED_BORDER,
} from "@/utils/tailwind";

export interface InputProps
  extends PropsWithChildren<InputHTMLAttributes<HTMLInputElement>> {
  name: string;
  error?: string;
  label?: string;
  value?: string;
  required?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      disabled,
      name,
      error,
      label,
      value = "",
      required,
      ...restOfProps
    },
    ref,
  ) => {
    const id = name; // TODO: useId(); - Doesn't work, server htmlFor is not equal to client one
    const classToRender = twMerge(
      TAILWIND_INPUT,
      disabled && TAILWIND_DISABLED_INPUT,
      TAILWIND_ROUNDED_BORDER,
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
        <Form.Control id={id} asChild>
          <input
            className={classToRender}
            disabled={disabled}
            name={name}
            value={value}
            {...restOfProps}
          />
        </Form.Control>
      </Form.Field>
    );
  },
);

Input.displayName = "Input";

export default Input;
