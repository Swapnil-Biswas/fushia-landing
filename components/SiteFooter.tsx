import { FaCode, FaDiscord } from "react-icons/fa";
import type { CSSProperties } from "react";

function RevealText({ text, className = "", baseDelay = 0 }: { text: string; className?: string; baseDelay?: number }) {
  return (
    <span className={`footer-char-reveal ${className}`.trim()} aria-label={text}>
      {Array.from(text).map((char, index) => (
        <span
          key={`${text}-${index}`}
          aria-hidden="true"
          className="footer-char"
          style={
            {
              "--char-index": index,
              "--char-base": `${baseDelay}ms`,
            } as CSSProperties
          }
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

export default function SiteFooter() {
  return (
    <section
      className="mt-14 border-t border-white/10 bg-[radial-gradient(880px_420px_at_12%_8%,rgba(170,64,168,0.24),transparent_62%),radial-gradient(840px_460px_at_95%_95%,rgba(232,95,198,0.18),transparent_58%),#090312] text-white"
      data-reveal
      data-reveal-delay="120"
    >
      <footer className="mx-auto max-w-6xl px-5 pb-22 pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr_1fr_1fr]">
          <div data-reveal data-reveal-delay="140">
            <div className="flex items-center gap-4">
              <div className="brand-avatar-wrap h-14 w-14 rounded-2xl">
                <img
                  src="/fushia-logo.gif"
                  alt="Fushia logo"
                  className="brand-avatar h-14 w-14 rounded-2xl object-cover"
                />
              </div>
              <div>
                <p className="text-4 font-semibold sm:text-5">
                  <RevealText text="Fushia" />
                </p>
                <p className="mt-1 text-xs tracking-[0.18em] text-fuchsia-300/80">
                  <RevealText text="ALL-IN-ONE PLATFORM" baseDelay={120} />
                </p>
              </div>
            </div>
            <p className="mt-7 max-w-md text-xl leading-relaxed text-fuchsia-100/65">
              <RevealText
                text="Your complete Discord companion with antinuke security, smart moderation, automation, giveaways, logging, and music."
                baseDelay={180}
              />
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-emerald-400/35 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
                <RevealText text="v1 Stable" baseDelay={240} />
              </span>
              <span className="rounded-full border border-fuchsia-400/35 bg-fuchsia-400/10 px-3 py-1 text-sm text-fuchsia-300">
                <RevealText text="Turbo Enabled" baseDelay={280} />
              </span>
            </div>
            <div className="mt-7 flex gap-3">
              <a
                className="btn-alive grid h-12 w-12 place-content-center rounded-xl border border-white/12 bg-white/6 text-fuchsia-100/85 hover:text-white"
                href="#"
                aria-label="Join our Discord community"
              >
                <FaDiscord />
              </a>
              <a
                className="btn-alive grid h-12 w-12 place-content-center rounded-xl border border-white/12 bg-white/6 text-fuchsia-100/85 hover:text-white"
                href="#"
                aria-label="View our source code"
              >
                <FaCode />
              </a>
            </div>
          </div>

          <div data-reveal data-reveal-delay="160">
            <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-fuchsia-100/90">
              <RevealText text="Product" />
            </h4>
            <ul className="mt-5 space-y-3 text-fuchsia-100/70">
              <li><a href="/#features" className="transition hover:text-white"><RevealText text="Features" baseDelay={60} /></a></li>
              <li><a href="/commands" className="transition hover:text-white"><RevealText text="Commands" baseDelay={120} /></a></li>
              <li><a href="/#premium" className="transition hover:text-white"><RevealText text="Pricing" baseDelay={180} /></a></li>
            </ul>
          </div>

          <div data-reveal data-reveal-delay="180">
            <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-fuchsia-100/90">
              <RevealText text="Community" />
            </h4>
            <ul className="mt-5 space-y-3 text-fuchsia-100/70">
              <li><a href="#" className="transition hover:text-white"><RevealText text="Join Discord" baseDelay={60} /></a></li>
              <li><a href="#" className="transition hover:text-white"><RevealText text="Vote on Top.gg" baseDelay={120} /></a></li>
              <li><a href="#" className="transition hover:text-white"><RevealText text="Discord Bot List" baseDelay={180} /></a></li>
            </ul>
          </div>

          <div data-reveal data-reveal-delay="200">
            <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-fuchsia-100/90">
              <RevealText text="Legal" />
            </h4>
            <ul className="mt-5 space-y-3 text-fuchsia-100/70">
              <li><a href="/terms" className="transition hover:text-white"><RevealText text="Terms of Service" baseDelay={60} /></a></li>
              <li><a href="/privacy" className="transition hover:text-white"><RevealText text="Privacy Policy" baseDelay={120} /></a></li>
              <li><a href="/refund-policy" className="transition hover:text-white"><RevealText text="Refund Policy" baseDelay={180} /></a></li>
            </ul>
          </div>
        </div>

        <div
          className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-fuchsia-100/60"
          data-reveal
          data-reveal-delay="220"
        >
          <p>
            <RevealText text={`(c) ${new Date().getFullYear()} Fushia. All rights reserved.`} />
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-xl border border-white/12 px-4 py-2">
              <RevealText text="English (US)" baseDelay={80} />
            </span>
            <span className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-emerald-300">
              <RevealText text="All Systems Operational" baseDelay={120} />
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
}

