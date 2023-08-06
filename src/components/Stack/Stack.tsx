import { FunctionComponent, HTMLAttributes, PropsWithChildren } from "react";

interface Props extends PropsWithChildren<HTMLAttributes<HTMLInputElement>> {
  alignItems?: "start" | "end" | "center" | "baseline" | "stretch";
  alignContent?:
    | "start"
    | "end"
    | "center"
    | "between"
    | "around"
    | "evenly"
    | "stretch";
  direction?: "column" | "row" | "row-reverse" | "column-reverse";
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: number | string;
  justifyContent?: "start" | "end" | "center" | "between" | "around" | "evenly";
}

const Stack: FunctionComponent<Props> = ({
  alignItems,
  alignContent,
  className,
  children,
  direction = "column",
  flexWrap,
  gap,
  justifyContent,
  style,
}) => {
  const styleToRender = {
    alignItems,
    alignContent,
    display: "flex",
    flexDirection: direction,
    flexWrap,
    gap,
    justifyContent,
    ...style,
  };
  return (
    <div className={className} style={styleToRender}>
      {children}
    </div>
  );
};

export default Stack;
