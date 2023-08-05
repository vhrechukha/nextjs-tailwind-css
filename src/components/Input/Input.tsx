"use client";

import { forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import * as Form from "@radix-ui/react-form";

const TAILWIND_ROUNDED_BORDER =
  "rounded-[4px] border-slate-300 hover:border-blue-600";

const TAILWIND_INPUT =
  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

export interface InputProps
  extends PropsWithChildren<HTMLAttributes<HTMLInputElement>> {
  name: string;
  error?: string;
  label?: string;
  value?: string;
  required?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, name, error, label, value = "", required, ...restOfProps },
    ref,
  ) => {
    const id = name; // TODO: useId(); - Doesn't work, server htmlFor is not equal to client one
    const classToRender = [TAILWIND_INPUT, TAILWIND_ROUNDED_BORDER, className]
      .filter(Boolean)
      .join(" ");

    return (
      <Form.Field className="w-full" name={name}>
        <div className="flex justify-between">
          {label && (
            <Form.Label
              htmlFor={id}
              className="text-sm font-medium whitespace-nowrap"
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
