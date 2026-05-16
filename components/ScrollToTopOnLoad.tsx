"use client";

import { useEffect } from "react";

export default function ScrollToTopOnLoad() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const url = new URL(window.location.href);
    if (url.hash) {
      window.history.replaceState({}, "", `${url.pathname}${url.search}`);
    }

    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  }, []);

  return null;
}

