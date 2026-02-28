import { FaCode, FaDiscord } from "react-icons/fa6";

export default function SiteFooter() {
  return (
    <section className="mt-14 border-t border-white/10 bg-[radial-gradient(880px_420px_at_12%_8%,rgba(170,64,168,0.24),transparent_62%),radial-gradient(840px_460px_at_95%_95%,rgba(232,95,198,0.18),transparent_58%),#090312] text-white">
      <footer className="mx-auto max-w-6xl px-5 pb-22 pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <div className="brand-avatar-wrap h-14 w-14 rounded-2xl">
                <img
                  src="/fushia-logo.gif"
                  alt="Fushia logo"
                  className="brand-avatar h-14 w-14 rounded-2xl object-cover"
                />
              </div>
              <div>
                <p className="text-4 font-semibold sm:text-5">Fushia</p>
                <p className="mt-1 text-xs tracking-[0.18em] text-fuchsia-300/80">ALL-IN-ONE PLATFORM</p>
              </div>
            </div>
            <p className="mt-7 max-w-md text-xl leading-relaxed text-fuchsia-100/65">
              Your complete Discord companion with antinuke security, smart moderation, automation, giveaways, logging,
              and music.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-emerald-400/35 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
                v1 Stable
              </span>
              <span className="rounded-full border border-fuchsia-400/35 bg-fuchsia-400/10 px-3 py-1 text-sm text-fuchsia-300">
                Turbo Enabled
              </span>
            </div>
            <div className="mt-7 flex gap-3">
              <a className="btn-alive grid h-12 w-12 place-content-center rounded-xl border border-white/12 bg-white/6 text-fuchsia-100/85 hover:text-white" href="#">
                <FaDiscord />
              </a>
              <a className="btn-alive grid h-12 w-12 place-content-center rounded-xl border border-white/12 bg-white/6 text-fuchsia-100/85 hover:text-white" href="#">
                <FaCode />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-fuchsia-100/90">Product</h4>
            <ul className="mt-5 space-y-3 text-fuchsia-100/70">
              <li><a href="/#features" className="transition hover:text-white">Features</a></li>
              <li><a href="/commands" className="transition hover:text-white">Commands</a></li>
              <li><a href="/#premium" className="transition hover:text-white">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-fuchsia-100/90">Community</h4>
            <ul className="mt-5 space-y-3 text-fuchsia-100/70">
              <li><a href="#" className="transition hover:text-white">Join Discord</a></li>
              <li><a href="#" className="transition hover:text-white">Vote on Top.gg</a></li>
              <li><a href="#" className="transition hover:text-white">Discord Bot List</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-fuchsia-100/90">Legal</h4>
            <ul className="mt-5 space-y-3 text-fuchsia-100/70">
              <li><a href="/terms" className="transition hover:text-white">Terms of Service</a></li>
              <li><a href="/privacy" className="transition hover:text-white">Privacy Policy</a></li>
              <li><a href="/refund-policy" className="transition hover:text-white">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-fuchsia-100/60">
          <p>(c) {new Date().getFullYear()} Fushia. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-xl border border-white/12 px-4 py-2">English (US)</span>
            <span className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-emerald-300">
              All Systems Operational
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
}
