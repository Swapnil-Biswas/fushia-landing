import { FaArrowLeft, FaBolt, FaCrown } from "react-icons/fa";

export default function PremiumComingSoonPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08020f] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_520px_at_12%_14%,rgba(255,78,209,0.2),transparent_62%),radial-gradient(780px_460px_at_90%_90%,rgba(160,76,255,0.22),transparent_66%),linear-gradient(180deg,#090312_0%,#06010c_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-6">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-fuchsia-100/85 transition hover:text-white"
          >
            <FaArrowLeft className="text-xs" />
            Back to Home
          </a>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/35 bg-amber-400/10 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-amber-200/90">
            <span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_12px_rgba(252,211,77,0.95)]" />
            PREMIUM
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center py-10">
          <section className="dashboard-launch-card glass relative w-full max-w-xl rounded-[2rem] border border-amber-300/45 p-8 text-center shadow-[0_0_0_1px_rgba(250,204,21,0.2),0_0_30px_rgba(250,204,21,0.32),0_0_70px_rgba(245,158,11,0.24),0_22px_80px_rgba(0,0,0,0.45)] sm:p-10">
            <div className="pointer-events-none absolute -left-8 -top-8 h-24 w-24 rounded-full bg-amber-300/20 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-[var(--aqua-2)]/20 blur-2xl" />

            <div className="premium-cta mx-auto grid h-20 w-20 place-content-center rounded-3xl border border-amber-300/45 bg-gradient-to-b from-amber-300/30 to-amber-500/10 shadow-[0_0_30px_rgba(252,211,77,0.24)]">
              <FaCrown className="premium-crown text-3xl text-amber-200" />
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
              Premium Plans{" "}
              <span className="bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
                Launching Soon
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-md text-base text-fuchsia-100/75 sm:text-lg">
              We are preparing premium plans with higher limits, priority tools, and advanced controls for growing communities.
            </p>

            <div className="mx-auto mt-6 grid w-full max-w-xl grid-cols-3 gap-2 text-xs sm:text-sm">
              <div className="flex min-h-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-center leading-tight text-fuchsia-100/80">Advanced Security</div>
              <div className="flex min-h-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-center leading-tight text-fuchsia-100/80">Higher Limits</div>
              <div className="flex min-h-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-center leading-tight text-fuchsia-100/80">Priority Features</div>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                className="premium-cta btn-alive inline-flex items-center gap-2 rounded-xl border border-amber-300/40 bg-gradient-to-r from-amber-500 to-yellow-400 px-6 py-3 text-sm font-bold text-[#1f1400] shadow-[0_10px_28px_rgba(245,158,11,0.4)]"
              >
                <FaCrown className="premium-crown" />
                Unlock Premium Features
              </button>
              <a
                href="/commands"
                className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-fuchsia-100/85 transition hover:text-white"
              >
                <FaBolt />
                Explore Commands
              </a>
            </div>

            <p className="mt-6 text-xs text-fuchsia-100/50">Private beta invites will open shortly.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
