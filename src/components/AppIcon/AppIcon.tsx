import { ComponentType, FunctionComponent, SVGAttributes } from "react";
import { APP_ICON_COLOR, APP_ICON_SIZE } from "../config";

// React Icons
import { FiLogOut } from "react-icons/fi";
import { BsCalendar4Event } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";
import { FaRegCheckCircle } from "react-icons/fa";

export const ICONS: Record<string, ComponentType> = {
  // default: DefaultIcon,
  // logo: LogoIcon,
  logout: FiLogOut,
  arrowdown: RiArrowDownSLine,
  calendar: BsCalendar4Event,
  success: FaRegCheckCircle,
};

export interface AppIconProps extends SVGAttributes<SVGElement> {
  color?: string;
  icon?: string;
  size?: string | number;
  title?: string;
}

const AppIcon: FunctionComponent<AppIconProps> = ({
  color: providedColor,
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
  const color = providedColor || APP_ICON_COLOR;

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
