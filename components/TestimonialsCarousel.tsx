"use client";

import { useEffect, useMemo, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

type Review = {
  quote: string;
  name: string;
  role: string;
  server: string;
};

const reviews: Review[] = [
  {
    quote: "Antinuke and AutoMod caught risky actions instantly. Our staff workload dropped overnight.",
    name: "RetroGamer99",
    role: "Admin",
    server: "NeonCity Server",
  },
  {
    quote: "Welcome messages, auto reactions, and autoresponders made onboarding smooth for every member.",
    name: "SynthWave",
    role: "Moderator",
    server: "Pulse Arena",
  },
  {
    quote: "Giveaways are simple to run, logs are clear, and slash commands are easy for new moderators.",
    name: "LunaBeats",
    role: "Community Lead",
    server: "Moonlight Guild",
  },
  {
    quote: "Playback stays stable during events, and the moderation stack is reliable under heavy activity.",
    name: "EchoPrime",
    role: "Owner",
    server: "Atlas Lounge",
  },
  {
    quote: "Fushia replaced multiple bots for us. One setup now covers security, utility, and music.",
    name: "NexaFlow",
    role: "Event Host",
    server: "Horizon Hub",
  },
  {
    quote: "Logging and AutoMod are powerful, and music controls still feel clean and fast.",
    name: "VoltRush",
    role: "Admin",
    server: "Velocity Network",
  },
];

function wrap(index: number, length: number) {
  return (index + length) % length;
}

export default function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  const [phase, setPhase] = useState<"idle" | "exit" | "enter">("idle");
  const [direction, setDirection] = useState<1 | -1>(1);

  const current = reviews[active];
  const previous = reviews[wrap(active - 1, reviews.length)];
  const next = reviews[wrap(active + 1, reviews.length)];
  const isAnimating = phase !== "idle";

  useEffect(() => {
    if (phase !== "exit") return;

    const timer = window.setTimeout(() => {
      setActive((prev) => wrap(prev + direction, reviews.length));
      setPhase("enter");
    }, 240);

    return () => window.clearTimeout(timer);
  }, [direction, phase]);

  useEffect(() => {
    if (phase !== "enter") return;

    let rafA = 0;
    let rafB = 0;
    rafA = window.requestAnimationFrame(() => {
      rafB = window.requestAnimationFrame(() => {
        setPhase("idle");
      });
    });

    return () => {
      window.cancelAnimationFrame(rafA);
      window.cancelAnimationFrame(rafB);
    };
  }, [phase]);

  const transitionClass = useMemo(() => {
    if (phase === "idle") {
      return "opacity-100 blur-0 scale-100 translate-x-0";
    }

    if (phase === "exit") {
      return direction === 1
        ? "opacity-0 blur-[4px] scale-[0.986] -translate-x-12"
        : "opacity-0 blur-[4px] scale-[0.986] translate-x-12";
    }

    if (phase === "enter") {
      return direction === 1
        ? "opacity-0 blur-[4px] scale-[0.986] translate-x-12"
        : "opacity-0 blur-[4px] scale-[0.986] -translate-x-12";
    }

    return "opacity-100 blur-0 scale-100 translate-x-0";
  }, [direction, phase]);

  const sideCardMotion = useMemo(() => {
    if (phase === "idle") return "opacity-35 blur-[2px] scale-100";

    return direction === 1
      ? "opacity-20 blur-[3px] scale-[0.97]"
      : "opacity-20 blur-[3px] scale-[0.97]";
  }, [direction, phase]);

  const switchReview = (step: 1 | -1) => {
    if (isAnimating) return;

    setDirection(step);
    setPhase("exit");
  };

  return (
    <section
      id="testimonials"
      className="mx-auto max-w-6xl px-5 py-16 text-white"
      data-reveal
      data-reveal-delay="70"
    >
      <div className="text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-fuchsia-300/25 bg-fuchsia-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-100/85">
          <span className="inline-block h-2 w-2 rounded-full bg-[var(--aqua)] shadow-[0_0_14px_rgba(199,124,255,0.9)]" />
          Trusted by Communities
        </p>
        <h2 className="mt-5 text-4xl font-black sm:text-5xl">Loved by Thousands</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-fuchsia-100/70 sm:text-base">
          Trusted by communities running moderation, automation, giveaways, logging, and music from one bot.
        </p>
        <div className="mx-auto mt-6 flex w-fit items-center gap-4 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm">
          <span className="text-xl font-black">5.0</span>
          <span className="text-fuchsia-100/35">|</span>
          <span className="flex items-center gap-1 text-amber-300">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </span>
          <span className="text-fuchsia-100/35">|</span>
          <span className="font-bold">5k+ reviews</span>
        </div>
      </div>

      <div className="relative mx-auto mt-10 flex max-w-5xl items-center justify-center py-6 sm:py-8">
        <article
          className={`neon-box-soft pointer-events-none absolute left-2 hidden w-[250px] rounded-2xl border border-white/6 bg-white/[0.03] p-4 transition-[opacity,filter,transform] duration-500 ease-out lg:block ${sideCardMotion}`}
        >
          <p className="line-clamp-3 text-sm text-fuchsia-100/55">&ldquo;{previous.quote}&rdquo;</p>
          <p className="mt-3 text-xs uppercase tracking-wide text-fuchsia-100/40">{previous.name}</p>
        </article>

        <button
          type="button"
          aria-label="Previous review"
          onClick={() => switchReview(-1)}
          className="btn-alive absolute left-0 z-20 grid h-11 w-11 place-content-center rounded-full border border-white/15 bg-white/5 text-fuchsia-100/90 hover:bg-white/10"
        >
          <FaChevronLeft />
        </button>

        <article
          className={`review-card-motion neon-box w-full max-w-[560px] rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] transition-[opacity,filter,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:p-8 ${transitionClass}`}
        >
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-content-center rounded-full border border-fuchsia-300/30 bg-fuchsia-400/15 font-bold text-fuchsia-100">
              {current.name.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <p className="text-xl font-bold">{current.name}</p>
              <p className="text-sm text-fuchsia-100/70">
                {current.role} - {current.server}
              </p>
            </div>
          </div>

          <p className="mt-6 text-3xl leading-none text-fuchsia-300/30">&ldquo;</p>
          <p className="mt-2 text-xl italic leading-relaxed text-fuchsia-50/95 sm:text-[2rem]">
            {current.quote}
          </p>

          <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-semibold text-amber-200">
              <span className="flex items-center gap-0.5 text-amber-300">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              5.0 Rating
            </span>
            <span className="text-sm font-semibold text-fuchsia-100/80">Verified Review</span>
          </div>
        </article>

        <button
          type="button"
          aria-label="Next review"
          onClick={() => switchReview(1)}
          className="btn-alive absolute right-0 z-20 grid h-11 w-11 place-content-center rounded-full border border-white/15 bg-white/5 text-fuchsia-100/90 hover:bg-white/10"
        >
          <FaChevronRight />
        </button>

        <article
          className={`neon-box-soft pointer-events-none absolute right-2 hidden w-[250px] rounded-2xl border border-white/6 bg-white/[0.03] p-4 transition-[opacity,filter,transform] duration-500 ease-out lg:block ${sideCardMotion}`}
        >
          <p className="line-clamp-3 text-sm text-fuchsia-100/55">&ldquo;{next.quote}&rdquo;</p>
          <p className="mt-3 text-xs uppercase tracking-wide text-fuchsia-100/40">{next.name}</p>
        </article>
      </div>
    </section>
  );
}


