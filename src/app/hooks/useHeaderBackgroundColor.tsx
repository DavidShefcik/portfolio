import { useCallback, useLayoutEffect, useState } from "react";

import { SectionDOMId } from "@constants/sectionDOMIds";

export enum HeaderBackgroundColor {
  OVERVIEW = "bg-dark",
  UPSTAIRS = "bg-upstairs-purple",
  WAZAME = "bg-wazame-green",
}

interface ReturnType {
  backgroundColor: HeaderBackgroundColor;
}

/** Note: this hook has to be used client side since we work with the DOM scroll position */
export default function useHeaderBackgroundColor(): ReturnType {
  const [backgroundColor, setBackgroundColor] = useState<HeaderBackgroundColor>(
    HeaderBackgroundColor.OVERVIEW
  );

  const getScrollRanges = () => {
    const overviewSection = document.getElementById(SectionDOMId.OVERVIEW);
    const upstairsSection = document.getElementById(SectionDOMId.UPSTAIRS);
    const wazameSection = document.getElementById(SectionDOMId.WAZAME);
    const header = document.getElementById(SectionDOMId.HEADER);

    const overviewYPosition = overviewSection?.getBoundingClientRect().top;
    const upstairsYPosition = upstairsSection?.getBoundingClientRect().top;
    const wazameYPosition = wazameSection?.getBoundingClientRect().top;
    const overviewHeight = overviewSection?.clientHeight;
    const upstairsHeight = upstairsSection?.clientHeight;
    const wazameHeight = overviewSection?.clientHeight;
    const headerHeight = header?.clientHeight;

    if (
      overviewYPosition === undefined ||
      upstairsYPosition === undefined ||
      wazameYPosition === undefined ||
      overviewHeight === undefined ||
      upstairsHeight === undefined ||
      wazameHeight === undefined ||
      headerHeight === undefined
    ) {
      return null;
    }

    /**
     * Section range is the Y position of the section + the y position - the header height.
     * This lets us transition the header color when the bottom of the header reaches the section
     */
    const overviewSectionRange =
      window.scrollY + (overviewYPosition - headerHeight);
    const upstairsSectionRange =
      window.scrollY + (upstairsYPosition - headerHeight);
    const wazameSectionRange =
      window.scrollY + (wazameYPosition - headerHeight);

    return {
      overviewSectionRange,
      upstairsSectionRange,
      wazameSectionRange,
    };
  };

  /** This should be used in `useLayoutEffect` to properly calculate heights */
  const calculateBackgroundColor = useCallback(() => {
    const currentPosition = window.scrollY;
    const ranges = getScrollRanges();

    if (!ranges) {
      setBackgroundColor(HeaderBackgroundColor.OVERVIEW);

      return;
    }

    const { overviewSectionRange, upstairsSectionRange, wazameSectionRange } =
      ranges;

    let newColor = HeaderBackgroundColor.OVERVIEW;

    if (currentPosition <= upstairsSectionRange) {
      newColor = HeaderBackgroundColor.OVERVIEW;
    } else if (
      currentPosition > overviewSectionRange &&
      currentPosition <= wazameSectionRange
    ) {
      newColor = HeaderBackgroundColor.UPSTAIRS;
    } else if (currentPosition > wazameSectionRange) {
      newColor = HeaderBackgroundColor.WAZAME;
    }

    setBackgroundColor(newColor);

    /**
     * Update DOM background color to prevent wrong color from being shown
     * when rubber-banding scroll on MacOS
     */

    // Remove existing tailwind background styles
    document.body.classList.forEach((className) => {
      if (new RegExp(/bg-.*/gi).test(className)) {
        document.body.classList.remove(className);
      }
    });

    document.body.classList.add(newColor);
  }, []);

  useLayoutEffect(() => {
    calculateBackgroundColor();

    const scrollEventListener = () => {
      calculateBackgroundColor();
    };

    window.addEventListener("scroll", scrollEventListener);

    return () => {
      window.removeEventListener("scroll", scrollEventListener);
    };
  }, [calculateBackgroundColor]);

  return {
    backgroundColor,
  };
}
