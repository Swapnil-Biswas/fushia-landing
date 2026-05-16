"use client";

import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [phase, setPhase] = useState<"show" | "hide" | "done">("show");

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const revealTimer = window.setTimeout(() => {
      setPhase("hide");
    }, 2300);

    const removeTimer = window.setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = prevOverflow;
    }, 3150);

    return () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(removeTimer);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`intro-loader fixed inset-0 z-[100] ${
        phase === "hide" ? "intro-loader--exit" : ""
      }`}
      aria-hidden="true"
    >
      <div className="intro-loader__veil" />
      <div className="intro-loader__ring">
        <svg viewBox="0 0 100 100" className="intro-loader__ring-svg" role="img" aria-hidden="true">
          <circle className="intro-loader__ring-track" cx="50" cy="50" r="48" />
          <circle className="intro-loader__ring-progress" cx="50" cy="50" r="48" />
        </svg>
        <div className="intro-loader__logo" aria-label="Fushia logo">
          <svg viewBox="0 0 128 128" className="intro-loader__logo-svg" role="img">
            <path
              d="M42 16
                 Q37 16 35 21
                 L35 108
                 Q35 113 40 113
                 L49 104
                 Q53 101 53 96
                 L53 72
                 L84 72
                 Q88 72 91 69
                 L97 63
                 Q100 60 100 56
                 Q100 52 97 49
                 L91 43
                 Q88 40 84 40
                 L53 40
                 L53 32
                 L88 32
                 Q92 32 95 29
                 L102 22
                 Q105 19 105 16
                 Q105 13 102 10
                 L96 5
                 Q93 2 89 2
                 L42 16 Z"
              pathLength="100"
            />
          </svg>
        </div>
      </div>
      <div className="intro-loader__scanlines" />
    </div>
  );
}
