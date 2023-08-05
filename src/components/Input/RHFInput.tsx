import { forwardRef } from "react";
import Input, { InputProps } from "./Input";
import { Controller, Control, FieldValues } from "react-hook-form";

interface Props extends InputProps {
  control: Control<any> | undefined;
}

const RHFInput = forwardRef<HTMLInputElement, Props>(
  ({ control, ...props }, ref) => {
    return (
      <Controller
        name={props.name}
        control={control}
        render={({ field }) => <Input {...field} {...props} />}
      />
    );
  },
);

RHFInput.displayName = "RHFInput";

export default RHFInput;
