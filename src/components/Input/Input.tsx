import { FunctionComponent, PropsWithChildren } from "react";
import * as Form from "@radix-ui/react-form";

interface Props extends PropsWithChildren {
  name: string;
  label?: string;
  value?: string;
  required?: boolean;
}

const Input: FunctionComponent<Props> = ({
  name,
  label,
  value = "",
  required,
  ...restOfProps
}) => {
  return (
    <Form.Field className="mb-[10px] grid w-full" name={name}>
      <div className="flex items-baseline justify-between">
        {label && (
          <Form.Label className="text-[15px] font-medium leading-[35px]">
            {label} {required && <span className="pl-1 text-red-600">*</span>}
          </Form.Label>
        )}
        {/*{errors[name] && (*/}
        {/*  <Form.Message className="text-[13px] text-red-600 opacity-[0.8]">*/}
        {/*    Field is required*/}
        {/*  </Form.Message>*/}
        {/*)}*/}
      </div>
      <Form.Control asChild>
        <input
          className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded-[4px] border-slate-300 bg-slate-50 px-[10px] text-[15px] leading-none outline-none selection:bg-blue-600 hover:border-blue-600"
          name={name}
          value={value}
          {...restOfProps}
        />
      </Form.Control>
    </Form.Field>
  );
};

export default Input;
