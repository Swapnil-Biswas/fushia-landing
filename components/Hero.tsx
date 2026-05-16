"use client";

import { useCallback, useState } from "react";
import HeroEmojiSlideshow from "./HeroEmojiSlideshow";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState<"security" | "moderation" | "music">("security");

  // Safety check for activeSlide reference consistency
  if (!activeSlide) return null;

  const wordClass = useCallback(
    (word: "Secure" | "Moderate" | "Entertain") => {
      const highlighted =
        (activeSlide === "security" && word === "Secure") ||
        (activeSlide === "moderation" && word === "Moderate") ||
        (activeSlide === "music" && word === "Entertain");

      return highlighted
        ? "bg-gradient-to-r from-[var(--aqua)] to-[var(--aqua-2)] bg-clip-text text-transparent"
        : "text-white";
    },
    [activeSlide],
  );

  return (
    <section className="px-5 pb-16 pt-16 text-white" data-reveal data-reveal-delay="20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-4 inline-flex items-center rounded-full border border-[var(--line)] px-4 py-1 text-xs uppercase tracking-[0.22em] text-fuchsia-100/80">
            All-In-One Discord Bot
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight leading-tight sm:text-6xl">
            Fushia
            <br />
            <span className={wordClass("Secure")}>Secure.</span>
            <br />
            <span className={wordClass("Moderate")}>Moderate.</span>
            <br />
            <span className={wordClass("Entertain")}>Entertain.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-fuchsia-50/75 sm:text-lg">
            Fushia handles Antinuke, AutoMod, Giveaways, Auto React, Auto Responder,
            Welcome, Logging, and Music in one clean Discord setup.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              className="btn-alive rounded-xl bg-gradient-to-r from-[var(--aqua)] to-[var(--aqua-2)] px-7 py-3 text-sm font-semibold text-[#1c0d2b] shadow-[0_10px_40px_rgba(199,124,255,0.35)] transition hover:brightness-110"
            >
              Invite Fushia
            </button>
            <a
              href="#commands"
              className="btn-alive rounded-xl border border-[var(--line)] px-7 py-3 text-sm font-semibold text-fuchsia-100/90 transition hover:bg-white/5"
            >
              Explore Commands
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-3">
            <div className="glass rounded-xl p-4">
              <p className="text-2xl font-bold">10k+</p>
              <p className="text-xs uppercase tracking-wide text-fuchsia-100/70">Servers</p>
            </div>
            <div className="glass rounded-xl p-4">
              <p className="text-2xl font-bold">8+</p>
              <p className="text-xs uppercase tracking-wide text-fuchsia-100/70">Core Modules</p>
            </div>
            <div className="glass rounded-xl p-4">
              <p className="text-2xl font-bold">99.9%</p>
              <p className="text-xs uppercase tracking-wide text-fuchsia-100/70">Uptime</p>
            </div>
          </div>
        </div>
        <HeroEmojiSlideshow onSlideChange={setActiveSlide} />
      </div>
    </section>
  );
}

