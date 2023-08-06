"use client";

import { forwardRef, InputHTMLAttributes, PropsWithChildren } from "react";
import * as Form from "@radix-ui/react-form";
import { twMerge } from "tailwind-merge";

const TAILWIND_INPUT =
  "bg-gray-50 border h-[42px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

const TAILWIND_DISABLED_INPUT =
  "bg-gray-200 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400";

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
