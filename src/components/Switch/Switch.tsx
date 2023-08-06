"use client";

import { FunctionComponent, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  label: string;
  onChange: () => void;
}

const SwitchControl: FunctionComponent<Props> = ({ label, onChange }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" onChange={onChange} />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {label}
      </span>
    </label>
  );
};

export default SwitchControl;
