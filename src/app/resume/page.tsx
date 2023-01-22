"use client";

import { useEffect } from "react";

import FullLoading from "@app/components/FullLoading";
import { ExternalUrls } from "@constants/urls";

export default function Resume() {
  useEffect(() => {
    window.location.href = ExternalUrls.RESUME;
  }, []);

  return <FullLoading />;
}
