"use client";

import { useEffect, useState } from "react";

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) {
        setProgress(0);
        return;
      }

      setProgress(clamp(window.scrollY / maxScroll, 0, 1));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const pct = `${Math.round(progress * 100)}%`;

  return (
    <div className="scroll-progress opacity-100" aria-hidden="true">
      <div className="scroll-progress__track" />
      <div className="scroll-progress__fill" style={{ height: pct }} />
      <div className="scroll-progress__orb" style={{ bottom: pct }} />
    </div>
  );
}
