"use client";

import { useContactModalStore } from "@app/store/contactModal";
import { Dialog } from "@headlessui/react";

import Button from "./Button";

export default function ContactModal() {
  const { isModalOpen, email, setEmail, setIsModalOpen } =
    useContactModalStore();

  return (
    <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <div className="fixed inset-0 bg-gray-800/80" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="text-gray-800 flex flex-col bg-white h-96 w-11/12 md:w-1/3 2xl:w-1/6 rounded-lg p-4">
          <Dialog.Title className="text-2xl font-medium italic">
            Contact Me
          </Dialog.Title>
          {!email && (
            <Dialog.Description className="py-4 px-1">
              Complete the captcha to view my email address
            </Dialog.Description>
          )}
          <div className="grow flex items-center justify-center">
            <p>TODO: Captcha</p>
          </div>
          <div className="w-full flex items-center justify-center md:justify-end">
            <Button
              text="Done"
              contentColor="text-gray-50"
              backgroundColor="bg-blue-500"
              hoverBackgroundColor="hover:bg-blue-600"
              activeBackgroundColor="active:bg-blue-700"
              shouldShrinkOnMobile={false}
              shouldMoveOnHover={false}
              onClick={() => setIsModalOpen(false)}
            />
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
