"use client";
import { forwardRef } from "react";
import Select, { SelectProps } from "./Select";
import { Controller, Control } from "react-hook-form";

export interface RHFSelectProps extends SelectProps {
  control: Control<any>;
}

const RHFSelect = forwardRef<HTMLSelectElement, RHFSelectProps>(
  ({ control, ...props }, ref) => {
    return (
      <Controller
        name={props.name}
        control={control}
        render={({ field }) => <Select {...field} {...props} />}
      />
    );
  },
);

RHFSelect.displayName = "RHFSelect";

export default RHFSelect;
