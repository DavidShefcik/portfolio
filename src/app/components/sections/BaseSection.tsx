import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  backgroundColor: string;
  shouldCoverScreen?: boolean;
}

export default function Section({
  children,
  backgroundColor,
  shouldCoverScreen,
}: Props) {
  return (
    <div
      className={`w-screen flex flex-row items-center ${backgroundColor}`}
      style={{
        height: shouldCoverScreen ? "100vh" : "calc(100vh - 3rem)",
        paddingBottom: shouldCoverScreen ? "0" : "3rem",
      }}
    >
      {children}
    </div>
  );
}
