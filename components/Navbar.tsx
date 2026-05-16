"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const navLinkClass =
    "relative rounded-lg px-3 py-2 font-semibold text-fuchsia-100/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-fuchsia-400/10 hover:text-white hover:shadow-[0_8px_24px_rgba(199,124,255,0.24)] after:absolute after:bottom-1 after:left-3 after:h-[2px] after:w-[calc(100%-1.5rem)] after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-[var(--aqua)] after:to-[var(--aqua-2)] after:transition-transform after:duration-300 hover:after:scale-x-100";

  return (
    <header className="sticky top-0 z-50 px-5 pt-5 text-white">
      <div
        className={`fixed inset-0 z-40 bg-black/55 transition-opacity duration-300 md:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      />

      <nav className="glass mx-auto flex h-16 w-full max-w-6xl items-center justify-between rounded-2xl px-5">
        <a href="#" className="group flex items-center gap-3">
          <img
            src="/fushia-logo.gif"
            alt="Fushia logo"
            loading="lazy"
            className="brand-avatar h-9 w-9 rounded-full object-cover"
          />
          <span className="brand-wordmark bg-gradient-to-r from-fuchsia-100 via-fuchsia-50 to-fuchsia-200 bg-clip-text text-xl font-extrabold tracking-[0.01em] text-transparent">
            Fushia
          </span>
        </a>
        <div className="hidden items-center gap-4 text-sm md:flex">
          <a href="#features" className={navLinkClass}>Features</a>
          <a href="#commands" className={navLinkClass}>Commands</a>
          <a href="#testimonials" className={navLinkClass}>Reviews</a>
          <a href="#faq" className={navLinkClass}>FAQ</a>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/dashboard"
            className="btn-alive hidden rounded-lg border border-[var(--line)] px-4 py-2 text-sm text-fuchsia-100/80 transition hover:text-white sm:inline-block"
          >
            Dashboard
          </a>
          <button
            type="button"
            className="btn-alive rounded-lg bg-gradient-to-r from-[var(--aqua)] to-[var(--aqua-2)] px-4 py-2 text-sm font-semibold text-[#1c0d2b] shadow-[0_6px_30px_rgba(199,124,255,0.35)] transition hover:brightness-110"
          >
            Add To Discord
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            className="btn-alive rounded-lg bg-gradient-to-r from-[var(--aqua)] to-[var(--aqua-2)] px-3 py-2 text-xs font-semibold text-[#1c0d2b] shadow-[0_6px_22px_rgba(199,124,255,0.28)]"
          >
            Add
          </button>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="grid h-10 w-10 place-content-center rounded-lg border border-[var(--line)] bg-white/[0.04]"
          >
            <span
              className={`block h-[2px] w-5 rounded-full bg-fuchsia-100 transition duration-300 ${
                menuOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`mt-[5px] block h-[2px] w-5 rounded-full bg-fuchsia-100 transition duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`mt-[5px] block h-[2px] w-5 rounded-full bg-fuchsia-100 transition duration-300 ${
                menuOpen ? "-translate-y-[8px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`mx-auto mt-3 w-full max-w-6xl overflow-hidden rounded-2xl border border-[var(--line)] bg-[linear-gradient(180deg,rgba(35,14,46,0.96),rgba(19,8,28,0.96))] backdrop-blur-md p-3 shadow-[0_14px_36px_rgba(0,0,0,0.4)] transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-[420px] translate-y-0 opacity-100" : "pointer-events-none max-h-0 -translate-y-2 opacity-0 p-0"
        }`}
      >
        <div className="space-y-1 text-fuchsia-100/85">
          <a href="#features" onClick={closeMenu} className="block rounded-lg px-3 py-2 text-base font-semibold hover:bg-white/[0.06] hover:text-white">Features</a>
          <a href="#commands" onClick={closeMenu} className="block rounded-lg px-3 py-2 text-base font-semibold hover:bg-white/[0.06] hover:text-white">Commands</a>
          <a href="#testimonials" onClick={closeMenu} className="block rounded-lg px-3 py-2 text-base font-semibold hover:bg-white/[0.06] hover:text-white">Reviews</a>
          <a href="#faq" onClick={closeMenu} className="block rounded-lg px-3 py-2 text-base font-semibold hover:bg-white/[0.06] hover:text-white">FAQ</a>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <a
            href="/dashboard"
            onClick={closeMenu}
            className="flex-1 rounded-lg border border-[var(--line)] px-3 py-2 text-center text-sm font-semibold text-fuchsia-100/85"
          >
            Dashboard
          </a>
          <button
            type="button"
            className="btn-alive flex-1 rounded-lg bg-gradient-to-r from-[var(--aqua)] to-[var(--aqua-2)] px-3 py-2 text-center text-sm font-bold text-[#1c0d2b]"
          >
            Add To Discord
          </button>
        </div>
      </div>
    </header>
  );
}

