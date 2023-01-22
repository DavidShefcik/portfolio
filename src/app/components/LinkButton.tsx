import Link from "next/link";

import IconButton, { IconButtonProps } from "./IconButton";

type Props = Omit<IconButtonProps, "onPress"> & {
  url: string;
};

export default function LinkButton({ url, ...props }: Props) {
  return (
    <Link href={url} title={props.text}>
      <IconButton {...props} />
    </Link>
  );
}
