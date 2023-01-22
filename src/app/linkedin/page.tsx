"use client";

import { useEffect } from "react";

import FullLoading from "@app/components/FullLoading";
import { ExternalUrls } from "@constants/urls";

export default function LinkedIn() {
  useEffect(() => {
    window.location.href = ExternalUrls.LINKEDIN;
  }, []);

  return <FullLoading />;
}
