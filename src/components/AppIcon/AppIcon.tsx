import { ComponentType, FunctionComponent, SVGAttributes } from "react";
import { APP_ICON_SIZE } from "../config";

// React Icons
import { FiLogOut } from "react-icons/fi";
import { BsCalendar4Event } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";

export const ICONS: Record<string, ComponentType> = {
  // default: DefaultIcon,
  // logo: LogoIcon,
  logout: FiLogOut,
  arrowDown: RiArrowDownSLine,
  calendar: BsCalendar4Event,
};

export interface AppIconProps extends SVGAttributes<SVGElement> {
  color?: string;
  icon?: string;
  size?: string | number;
  title?: string;
}

const AppIcon: FunctionComponent<AppIconProps> = ({
  color,
  icon = "default",
  size = APP_ICON_SIZE,
  style,
  ...restOfProps
}) => {
  const iconName = (icon || "default").trim().toLowerCase();

  let ComponentToRender = ICONS[iconName];
  if (!ComponentToRender) {
    console.warn(`AppIcon: icon "${iconName}" is not found!`);
    // ComponentToRender = DefaultIcon;
  }

  const classToRender = {
    height: size,
    color,
    fill: color,
    size,
    style: { ...style, color },
    width: size,
    ...restOfProps,
  };

  return <ComponentToRender data-icon={iconName} {...classToRender} />;
};

export default AppIcon;
