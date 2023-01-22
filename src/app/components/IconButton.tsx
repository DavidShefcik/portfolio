"use client";

import { IconType } from "react-icons/lib";
import Button, { BaseButtonProps } from "./Button";

export type IconButtonProps = BaseButtonProps & {
  icon: IconType;
  text: string;
};

export default function IconButton({
  text,
  icon: IconComponent,
  shouldShrinkOnMobile = true,
  ...props
}: IconButtonProps) {
  return (
    <Button {...props} shouldShrinkOnMobile={shouldShrinkOnMobile}>
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
