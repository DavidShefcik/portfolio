"use client";

import { MdEmail } from "react-icons/md";

import IconButton from "./IconButton";

export default function ContactButton() {
  return (
    <div className="fixed right-10 bottom-10">
      <IconButton
        icon={MdEmail}
        text="Contact Me"
        contentColor="text-gray-800"
        backgroundColor="bg-gray-50"
        hoverBackgroundColor="hover:bg-gray-300"
      />
    </div>
  );
}
