"use client";

import Loading from "./Loading";

export default function FullLoading() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Loading color="fill-blue-500" />
    </div>
  );
}
