import { ReactNode } from "react";

import { SectionDOMId } from "@constants/sectionDOMIds";

interface Props {
  children: ReactNode;
  backgroundColor: string;
  sectionDOMId: SectionDOMId;
  shouldCoverScreen?: boolean;
}

export default function Section({
  children,
  backgroundColor,
  sectionDOMId,
  shouldCoverScreen,
}: Props) {
  return (
    <div
      id={sectionDOMId}
      className={`w-screen flex flex-row items-center ${backgroundColor}`}
      style={{
        height: shouldCoverScreen ? "100vh" : "calc(100vh - 3rem)",
      }}
    >
      {children}
    </div>
  );
}
