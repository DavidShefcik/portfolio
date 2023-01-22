import { ReactNode } from "react";

export type BaseButtonProps = {
  backgroundColor: string;
  hoverBackgroundColor?: string;
  activeBackgroundColor?: string;
  contentColor: string;
  onClick?(): void;
  shouldShrinkOnMobile?: boolean;
  shouldMoveOnHover?: boolean;
  tabIndex?: number;
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
  hoverBackgroundColor = backgroundColor,
  activeBackgroundColor = hoverBackgroundColor,
  onClick,
  shouldShrinkOnMobile,
  shouldMoveOnHover = true,
  tabIndex = 0,
  ...props
}: ButtonProps) {
  let content = null;

  if (typeof props.text !== "undefined") {
    content = (
      <p
        className={`font-medium ${
          shouldShrinkOnMobile ? "hidden md:flex" : "flex"
        }`}
      >
        {props.text}
      </p>
    );
  } else {
    content = props.children;
  }

  return (
    <button
      className={`h-10 mx-2 ${
        shouldShrinkOnMobile ? "w-10 px-0 md:w-36 md:px-2" : "w-36 px-2"
      } ${backgroundColor} ${hoverBackgroundColor} ${activeBackgroundColor} ${contentColor} flex flex-row items-center justify-evenly rounded-full transition-all duration-150 drop-shadow-sm ${
        shouldMoveOnHover ? "hover:-mt-1 hover:drop-shadow-xl" : ""
      }`}
      onClick={() => onClick && onClick()}
      tabIndex={tabIndex}
    >
      {content}
    </button>
  );
}
