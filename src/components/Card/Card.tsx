import { FunctionComponent, HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { TAILWIND_CARD_VERTICAL } from "@/utils/tailwind";

interface Props extends PropsWithChildren<HTMLAttributes<HTMLInputElement>> {
  title?: string;
}

const Card: FunctionComponent<Props> = ({
  className = TAILWIND_CARD_VERTICAL,
  title,
  children,
}) => {
  const classToRender = twMerge(
    "mb-5 rounded-xl border border-gray-200 bg-white p-5 shadow-md",
    className,
  );

  return (
    <div className={classToRender}>
      {title && <h1 className="text-lg font-medium">{title}</h1>}
      {children}
    </div>
  );
};

export default Card;
