"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`btn-alive z-50 grid h-14 w-14 place-content-center rounded-full border border-fuchsia-300/40 bg-[#140d26] text-2xl text-fuchsia-100 shadow-[0_0_28px_rgba(199,124,255,0.3)] transition-all duration-200 ${
        visible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      style={{ position: "fixed", right: "24px", bottom: "24px", left: "auto", top: "auto", insetInlineEnd: "24px", insetInlineStart: "auto" }}
    >
      <FaArrowUp />
    </button>
  );
}

