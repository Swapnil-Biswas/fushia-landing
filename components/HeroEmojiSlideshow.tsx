"use client";

import { type ReactNode, useEffect, useMemo, useRef, useState } from "react";
import {
  FaCheckCircle,
  FaGavel,
  FaMusic,
  FaShieldAlt,
  FaSlidersH,
  FaExclamationTriangle,
  FaWaveSquare,
} from "react-icons/fa";

type SlideItem = {
  icon: ReactNode;
  label: string;
  sub: string;
};

type Slide = {
  key: "security" | "moderation" | "music";
  title: string;
  subtitle: string;
  items: SlideItem[];
};

type HeroEmojiSlideshowProps = {
  onSlideChange?: (slideKey: Slide["key"]) => void;
};

const SLIDE_MS = 5000;
const MUSIC_START = 97;
const MUSIC_END = 274;
const MUSIC_WINDOW_SEC = 5;

const slides: Slide[] = [
  {
    key: "security",
    title: "FUSHIA",
    subtitle: "ANTI-NUKE + SECURITY",
    items: [
      { icon: <FaShieldAlt />, label: "Anti-Raid", sub: "Live shield" },
      { icon: <FaCheckCircle />, label: "Permission Guard", sub: "Role safety" },
      { icon: <FaExclamationTriangle />, label: "Emergency Lock", sub: "Fast mitigation" },
      { icon: <FaSlidersH />, label: "Auto Rules", sub: "Adaptive limits" },
    ],
  },
  {
    key: "moderation",
    title: "FUSHIA",
    subtitle: "AUTOMOD + MODERATION",
    items: [
      { icon: <FaGavel />, label: "Smart Warnings", sub: "Context aware" },
      { icon: <FaCheckCircle />, label: "Auto Responder", sub: "Trigger replies" },
      { icon: <FaExclamationTriangle />, label: "Spam Filter", sub: "Flood control" },
      { icon: <FaSlidersH />, label: "Custom Roles", sub: "Role flows" },
    ],
  },
  {
    key: "music",
    title: "FUSHIA",
    subtitle: "MUSIC + ENTERTAINMENT",
    items: [
      { icon: <FaMusic />, label: "HQ Playback", sub: "Stable audio" },
      { icon: <FaWaveSquare />, label: "Queue Sync", sub: "Smart ordering" },
      { icon: <FaCheckCircle />, label: "Auto React", sub: "Community fun" },
      { icon: <FaSlidersH />, label: "Giveaways", sub: "Timed drops" },
    ],
  },
];

function formatClock(totalSec: number) {
  const min = Math.floor(totalSec / 60);
  const sec = totalSec % 60;
  return `${min}:${sec.toString().padStart(2, "0")}`;
}

export default function HeroEmojiSlideshow({ onSlideChange }: HeroEmojiSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const startedAtRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const step = (ts: number) => {
      if (startedAtRef.current === null) startedAtRef.current = ts;
      const elapsed = ts - startedAtRef.current;
      const ratio = Math.min(elapsed / SLIDE_MS, 1);
      setProgress(ratio);

      if (ratio >= 1) {
        startedAtRef.current = ts;
        setActiveIndex((prev) => (prev + 1) % slides.length);
        setProgress(0);
      }

      rafRef.current = window.requestAnimationFrame(step);
    };

    rafRef.current = window.requestAnimationFrame(step);
    return () => {
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const activeSlide = slides[activeIndex];

  useEffect(() => {
    onSlideChange?.(activeSlide.key);
  }, [activeSlide.key, onSlideChange]);

  const musicCurrent = useMemo(() => {
    return Math.min(MUSIC_START + Math.round(MUSIC_WINDOW_SEC * progress), MUSIC_END);
  }, [progress]);

  return (
    <div className="hero-entry-left relative min-h-[430px]">
      <div className="hero-card-tilt hero-card-breathe glass neon-box relative overflow-hidden rounded-[30px] p-6">
        <div className="hero-scan-line" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-fuchsia-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-[var(--aqua-2)]/10 blur-3xl" />

        <div className="relative">
          {slides.map((slide, slideIndex) => {
            const isActive = slideIndex === activeIndex;

            return (
              <article
                key={slide.key}
                className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isActive ? "translate-x-0 opacity-100 blur-0" : "translate-x-8 opacity-0 blur-[6px]"
                }`}
              >
                <header className="border-b border-fuchsia-100/10 pb-4">
                  <p className="text-sm font-black tracking-[0.1em] text-fuchsia-200">{slide.title}</p>
                  <p className="text-lg font-semibold tracking-wide text-fuchsia-50/90">{slide.subtitle}</p>
                </header>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  {slide.items.map((item) => (
                    <div
                      key={`${slide.key}-${item.label}`}
                      className="neon-box-soft rounded-xl border border-fuchsia-100/10 bg-white/[0.03] p-3 transition hover:border-fuchsia-300/35 hover:bg-fuchsia-200/[0.06]"
                    >
                      <p className="inline-flex items-center gap-2 text-base font-semibold text-fuchsia-50">
                        <span className="text-fuchsia-300">{item.icon}</span>
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm text-fuchsia-100/65">{item.sub}</p>
                    </div>
                  ))}
                </div>

                {slide.key === "music" && (
                  <div className="neon-box-soft mt-5 rounded-xl border border-fuchsia-100/10 bg-[#140a20]/80 p-3">
                    <p className="text-sm text-fuchsia-200/80">Now Playing</p>
                    <p className="text-base font-semibold text-fuchsia-50">Neon Drift - Skyline Echo</p>
                    <div className="mt-2 h-1.5 rounded-full bg-fuchsia-100/20">
                      <div
                        className="hero-progress h-1.5 rounded-full bg-gradient-to-r from-[var(--aqua)] to-[var(--aqua-2)]"
                        style={{ width: `${(musicCurrent / MUSIC_END) * 100}%` }}
                      />
                    </div>
                    <div className="mt-2 flex items-center justify-between text-xs text-fuchsia-100/75">
                      <span>{formatClock(musicCurrent)}</span>
                      <span>{formatClock(MUSIC_END)}</span>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <div className="absolute bottom-3 right-3 z-20 flex items-center gap-2">
          {slides.map((_, dotIndex) => (
            <span
              key={`dot-${dotIndex}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                dotIndex === activeIndex ? "w-8 bg-fuchsia-300 shadow-[0_0_14px_rgba(199,124,255,0.75)]" : "w-2.5 bg-fuchsia-100/35"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


