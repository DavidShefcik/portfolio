import { Component, ReactNode } from "react";

export type BaseButtonProps = {
  backgroundColor: string;
  hoverBackgroundColor?: string;
  activeBackgroundColor?: string;
  contentColor: string;
  onClick?(): void;
  shouldShrinkOnMobile: boolean;
};
export type TextButtonProps = BaseButtonProps & {
  text: string;
  children?: never;
};
export type ChildrenButtonProps = BaseButtonProps & {
  children: ReactNode;
  text?: never;
};
type ButtonProps = TextButtonProps | ChildrenButtonProps;

export default function Button({
  backgroundColor,
  contentColor,
  activeBackgroundColor,
  hoverBackgroundColor,
  onClick,
  shouldShrinkOnMobile,
  ...props
}: ButtonProps) {
  let content = null;

  if (typeof props.text !== "undefined") {
    content = <p className="font-medium hidden md:flex">{props.text}</p>;
  } else {
    content = props.children;
  }

  return (
    <button
      className={`h-10 mx-2 ${
        shouldShrinkOnMobile ? "w-10 px-0 md:w-36 md:px-2" : "w-36 px-2"
      } ${backgroundColor} ${hoverBackgroundColor} ${activeBackgroundColor} ${contentColor} flex flex-row items-center justify-evenly rounded-full transition-all duration-150 drop-shadow-sm hover:drop-shadow-xl hover:-mt-1`}
      onClick={() => onClick && onClick()}
    >
      {content}
    </button>
  );
}
