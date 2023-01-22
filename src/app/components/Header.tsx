"use client";
import Link from "next/link";
import { BsGithub, BsLinkedin, BsInboxFill } from "react-icons/bs";

import LinkButton from "./LinkButton";

// TODO: Animate header background color change based on scroll position above section
// TODO: Animate content fading in an out when scrolling past macbook model
export default function Header() {
  const backgroundColor = "bg-wazame-green";

  return (
    <div
      className={`flex flex-row items-center justify-between w-full h-20 px-4 md:px-16 fixed ${backgroundColor}`}
    >
      <span>
        <Link href="/">
          <p className="text-gray-100 text-2xl font-medium italic">
            David Shefcik
          </p>
        </Link>
      </span>
      <span className="flex flex-row items-center justify-evenly">
        <LinkButton
          text="GitHub"
          url="/github"
          icon={BsGithub}
          contentColor="text-github-white"
          backgroundColor="bg-github-gray"
        />
        <LinkButton
          text="LinkedIn"
          url="/linkedin"
          icon={BsLinkedin}
          contentColor="text-white"
          backgroundColor="bg-linkedin-blue"
        />
        <span className="hidden sm:flex">
          <LinkButton
            text="Resume"
            url="/resume"
            icon={BsInboxFill}
            contentColor="text-gray-800"
            backgroundColor="bg-gray-50"
          />
        </span>
      </span>
    </div>
  );
}
