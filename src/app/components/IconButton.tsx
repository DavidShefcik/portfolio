"use client";

import { IconType } from "react-icons/lib";
import Button, { BaseButtonProps } from "./Button";

export type IconButtonProps = BaseButtonProps & {
  icon: IconType;
  text: string;
  tabIndex?: number;
};

export default function IconButton({
  text,
  icon: IconComponent,
  shouldShrinkOnMobile = true,
  tabIndex = -1,
  ...props
}: IconButtonProps) {
  return (
    <Button
      {...props}
      shouldShrinkOnMobile={shouldShrinkOnMobile}
      tabIndex={-1}
    >
      <IconComponent size={20} />
      <p
        className={`font-medium ${
          shouldShrinkOnMobile ? "hidden md:flex" : "flex"
        }`}
      >
        {text}
      </p>
    </Button>
  );
}
