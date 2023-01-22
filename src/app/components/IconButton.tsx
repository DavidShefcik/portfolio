"use client";

import { IconType } from "react-icons/lib";

export interface IconButtonProps {
  text: string;
  icon: IconType;
  backgroundColor: string;
  hoverBackgroundColor?: string;
  contentColor: string;
  onClick?(): void;
}

export default function IconButton({
  text,
  icon: IconComponent,
  backgroundColor,
  hoverBackgroundColor = backgroundColor,
  contentColor,
  onClick,
}: IconButtonProps) {
  const component = (
    <button
      className={`w-10 md:w-36 h-10 px-0 md:px-2 mx-2 ${backgroundColor} ${hoverBackgroundColor} ${contentColor} flex flex-row items-center justify-evenly rounded-full transition-all duration-150 drop-shadow-sm hover:drop-shadow-xl hover:-mt-1`}
      onClick={() => onClick && onClick()}
    >
      <IconComponent size={20} />
      <p className="font-medium hidden md:flex">{text}</p>
    </button>
  );

  return component;
}
