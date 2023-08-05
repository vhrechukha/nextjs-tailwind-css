import { FunctionComponent, HTMLAttributes, PropsWithChildren } from "react";
import * as Switch from "@radix-ui/react-switch";

interface Props extends PropsWithChildren<HTMLAttributes<HTMLInputElement>> {
  name: string;
  error?: string;
  label?: string;
  value?: boolean;
  required?: boolean;
}

const SwitchControl: FunctionComponent<Props> = ({
  name,
  error,
  label,
  value,
  required,
}) => {
  return (
    <Switch.Root
      name={name}
      checked={value}
      className={[
        "group",
        "radix-state-checked:bg-blue-600",
        "radix-state-unchecked:bg-blue-200 dark:radix-state-unchecked:bg-blue-800",
        "relative inline-flex h-[24px] w-[44px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out",
        "focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75",
      ].join(" ")}
    >
      <Switch.Thumb
        // defaultChecked={value}
        className={[
          "group-radix-state-checked:translate-x-5",
          "group-radix-state-unchecked:translate-x-0",
          "pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-black shadow-lg ring-0 transition duration-200 ease-in-out",
        ].join(" ")}
      />
    </Switch.Root>
  );
};

export default SwitchControl;
