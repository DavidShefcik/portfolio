"use client";

import { MdEmail } from "react-icons/md";

import IconButton from "./IconButton";
import { useContactModalStore } from "@app/store/contactModal";

export default function ContactButton() {
  const { setIsModalOpen } = useContactModalStore();

  return (
    <div className="fixed right-10 bottom-10">
      <IconButton
        icon={MdEmail}
        text="Contact Me"
        contentColor="text-gray-800"
        backgroundColor="bg-gray-50"
        hoverBackgroundColor="hover:bg-gray-300"
        activeBackgroundColor="active:bg-gray-400"
        onClick={() => setIsModalOpen(true)}
        shouldShrinkOnMobile={false}
      />
    </div>
  );
}
