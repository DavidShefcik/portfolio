import Link from "next/link";
import { IconType } from "react-icons/lib";

interface Props {
  text: string;
  icon: IconType;
  url: string;
  backgroundColor: string;
  contentColor: string;
}

export default function HeaderLinkButton({
  text,
  icon: IconComponent,
  url,
  backgroundColor,
  contentColor,
}: Props) {
  const component = (
    <Link href={url} title={text} target="_blank">
      <button
        className={`w-10 md:w-36 h-10 px-0 md:px-2 mx-2 ${backgroundColor} ${contentColor} flex flex-row items-center justify-evenly rounded-full transition-all duration-150 drop-shadow-sm hover:drop-shadow-xl hover:-mt-1`}
      >
        <IconComponent size={20} />
        <p className="font-medium hidden md:flex">{text}</p>
      </button>
    </Link>
  );

  return component;
}
