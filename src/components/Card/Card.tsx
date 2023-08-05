import { FunctionComponent, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  title?: string;
}

const Card: FunctionComponent<Props> = ({ title, children }) => {
  return (
    <div
      className={`relative col-span-1 mb-5 overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow-md md:col-span-2`}
    >
      <div className="mx-auto max-w-md">
        {title && <h1 className="text-lg font-medium">{title}</h1>}
        {children}
      </div>
    </div>
  );
};

export default Card;
