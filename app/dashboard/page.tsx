import { FaArrowLeft, FaBolt, FaDiscord } from "react-icons/fa6";

export default function DashboardComingSoonPage() {
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
          <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-300/30 bg-fuchsia-400/10 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-fuchsia-100/85">
            <span className="h-2 w-2 rounded-full bg-fuchsia-300 shadow-[0_0_12px_rgba(255,94,231,0.95)]" />
            DASHBOARD
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center py-10">
          <section className="dashboard-launch-card glass neon-box relative w-full max-w-xl rounded-[2rem] p-8 text-center sm:p-10">
            <div className="pointer-events-none absolute -left-8 -top-8 h-24 w-24 rounded-full bg-fuchsia-400/20 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-[var(--aqua-2)]/20 blur-2xl" />

            <div className="mx-auto grid h-20 w-20 place-content-center rounded-3xl border border-fuchsia-300/35 bg-gradient-to-b from-fuchsia-300/25 to-fuchsia-500/10 shadow-[0_0_30px_rgba(255,96,222,0.28)]">
              <img
                src="/aqua-logo.png"
                alt="Fushia logo"
                className="h-14 w-14 rounded-2xl object-cover"
              />
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
              Dashboard{" "}
              <span className="bg-gradient-to-r from-[var(--aqua)] to-[var(--aqua-2)] bg-clip-text text-transparent">
                Launching Soon
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-md text-base text-fuchsia-100/75 sm:text-lg">
              We are building a faster control panel for Fushia with real-time analytics, module controls, and role-safe automation.
            </p>

            <div className="mx-auto mt-6 grid max-w-md grid-cols-3 gap-2 text-xs sm:text-sm">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-fuchsia-100/80">Role Manager</div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-fuchsia-100/80">Logs Panel</div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-fuchsia-100/80">AutoMod Rules</div>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#"
                className="btn-alive inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--aqua)] to-[var(--aqua-2)] px-6 py-3 text-sm font-semibold text-[#1c0d2b] shadow-[0_10px_36px_rgba(199,124,255,0.35)]"
              >
                <FaDiscord />
                Get Update Ping
              </a>
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
