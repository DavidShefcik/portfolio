"use client";

import { useEffect } from "react";

import FullLoading from "@app/components/FullLoading";
import { ExternalUrls } from "@constants/urls";

export default function GitHub() {
  useEffect(() => {
    window.location.href = ExternalUrls.GITHUB;
  }, []);

  return <FullLoading />;
}
