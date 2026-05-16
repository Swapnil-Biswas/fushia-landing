import {
  FaBan,
  FaCode,
  FaCrown,
  FaDiscord,
  FaGift,
  FaLock,
  FaMusic,
  FaPen,
  FaShieldAlt,
  FaExclamationTriangle,
  FaVideo,
} from "react-icons/fa";
import TestimonialsCarousel from "./TestimonialsCarousel";

const FEATURES_LIST = [
  {
    title: "Antinuke Protection",
    text: "Block destructive raids, role abuse, and dangerous permission changes in real time.",
  },
  {
    title: "AutoMod",
    text: "Enforce smart moderation with spam control, toxicity filters, and anti-link rules.",
  },
  {
    title: "Giveaway System",
    text: "Create, manage, reroll, and end giveaways quickly with clean slash commands.",
  },
  {
    title: "Auto React + Responder",
    text: "Auto-react to key messages and send smart responses for recurring questions.",
  },
  {
    title: "Welcome + Logging",
    text: "Send polished welcome messages and keep complete moderation and audit logs.",
  },
  {
    title: "Music Module",
    text: "Keep high-quality music playback with queue controls and reliable uptime.",
  },
];

export default function Features() {
  const features = FEATURES_LIST;

  const commands = [
    "/antinuke enable",
    "/automod setup",
    "/giveaway start",
    "/autoresponder add",
    "/welcome config",
    "/play never gonna give you up",
    "/skip",
  ];

  const loopFeatures = [
    { name: "Antinuke", Icon: FaShieldAlt },
    { name: "AutoMod", Icon: FaBan },
    { name: "Giveaways", Icon: FaGift },
    { name: "Auto React", Icon: FaPen },
    { name: "Auto Responder", Icon: FaCode },
    { name: "Welcome", Icon: FaCrown },
    { name: "Logging", Icon: FaLock },
    { name: "Music", Icon: FaMusic },
    { name: "Custom Roles", Icon: FaVideo },
    { name: "Emergency", Icon: FaExclamationTriangle },
  ];

  const infiniteLoopFeatures = [...loopFeatures, ...loopFeatures];

  const faqs = [
    {
      q: "Is Fushia free to use?",
      a: "Yes. Fushia includes a powerful free tier with moderation, automation, logging, giveaways, and music. Premium unlocks higher limits and advanced controls.",
    },
    {
      q: "How do I add the bot to my server?",
      a: "Use the invite button on this page, select your server in Discord, and confirm permissions. Fushia is ready instantly with slash commands for every module.",
    },
    {
      q: "What features does Fushia include?",
      a: "Fushia includes Antinuke, AutoMod, Giveaway, Auto React, Auto Responder, Welcome, Logging, and Music in one all-in-one system.",
    },
    {
      q: "Can I customize the bot behavior?",
      a: "Yes. Each module can be configured independently in your dashboard so every server can set rules, automation, and music behavior to match its style.",
    },
  ];


  return (
    <>
      <section id="features" className="mx-auto max-w-6xl px-5 py-16 text-white" data-reveal data-reveal-delay="40">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-fuchsia-100/70">Features</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">Everything needed for a complete Discord server</h2>
          </div>
          <p className="max-w-xl text-sm text-fuchsia-100/70">
            Security, moderation, automation, utility, and entertainment modules unified in one bot.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <article key={item.title} className="glass neon-box rounded-2xl p-5">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-fuchsia-100/70">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="commands" className="mx-auto max-w-6xl px-5 py-10 text-white" data-reveal data-reveal-delay="60">
        <div className="glass neon-box rounded-3xl p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-fuchsia-100/70">Commands</p>
          <h2 className="mt-2 text-3xl font-black">Control your whole server in seconds</h2>
          <p className="mt-3 max-w-2xl text-sm text-fuchsia-100/75">
            Fushia keeps commands predictable, fast, and readable across moderation, automation, and music.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {commands.map((cmd) => (
              <code
                key={cmd}
                className="neon-box-soft rounded-xl border border-[var(--line)] bg-[#160b24] px-4 py-3 text-sm text-fuchsia-100/90"
              >
                {cmd}
              </code>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <a
              href="/commands"
              className="btn-alive rounded-xl bg-gradient-to-r from-[var(--aqua)] to-[var(--aqua-2)] px-6 py-2.5 text-sm font-semibold text-[#1c0d2b] shadow-[0_8px_28px_rgba(236,72,255,0.34)]"
            >
              View all commands
            </a>
          </div>
        </div>
      </section>

      <section
        id="powerful-features"
        className="mx-auto max-w-6xl px-5 py-12 text-white"
        data-reveal
        data-reveal-delay="65"
      >
        <div className="text-center">
          <h2 className="text-4xl font-black text-fuchsia-200 sm:text-5xl">Powerful Features</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-fuchsia-100/70 sm:text-2xl">
            Everything your Discord server needs, engineered with precision and built for performance.
          </p>
        </div>

        <div className="feature-logo-loop mt-9">
          <div className="feature-logo-track">
            {infiniteLoopFeatures.map((item, index) => (
              <article
                key={`${item.name}-${index}`}
                className="feature-logo-item neon-box-soft group w-[180px] flex-none rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center backdrop-blur-sm transition hover:border-fuchsia-300/35 hover:bg-fuchsia-300/10"
              >
                <span className="mx-auto grid h-14 w-14 place-content-center rounded-2xl border border-white/10 bg-white/[0.03] text-2xl text-fuchsia-100/75 transition group-hover:text-fuchsia-100">
                  <item.Icon />
                </span>
                <p className="mt-3 text-sm font-semibold text-fuchsia-100/70 transition group-hover:text-fuchsia-100">
                  {item.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      <section
        id="premium"
        className="mx-auto max-w-6xl px-5 py-16 text-white"
        data-reveal
        data-reveal-delay="75"
      >
        <div className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-400/10 px-4 py-1 text-sm font-semibold text-amber-300">
            <FaCrown className="text-xs" />
            Premium Features
          </p>
          <h2 className="mt-6 text-4xl font-black leading-tight sm:text-6xl">
            You would like{" "}
            <span className="bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
              even more features?
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-fuchsia-100/70 sm:text-2xl">
            Unlock the full potential of Fushia with premium features designed for power users and large communities.
          </p>
        </div>

        <div className="premium-card group mx-auto mt-10 max-w-5xl rounded-[2rem] border border-amber-300/25 bg-[linear-gradient(180deg,rgba(8,12,20,0.95),rgba(5,8,14,0.96))] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.5)] transition-all duration-400 sm:p-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <article className="group/item flex items-start gap-4">
                <span className="grid h-10 w-10 place-content-center rounded-xl bg-amber-400 text-black"><FaShieldAlt /></span>
                <div>
                  <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover/item:text-amber-300 sm:text-2xl">Advanced Security System</h3>
                  <p className="mt-1 text-sm text-fuchsia-100/65 transition-colors duration-300 group-hover/item:text-amber-200/95">Enhanced limit systems with granular control</p>
                </div>
              </article>
              <article className="group/item flex items-start gap-4">
                <span className="grid h-10 w-10 place-content-center rounded-xl bg-amber-400 text-black"><FaShieldAlt /></span>
                <div>
                  <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover/item:text-amber-300 sm:text-2xl">Antinuke Engine</h3>
                  <p className="mt-1 text-sm text-fuchsia-100/65 transition-colors duration-300 group-hover/item:text-amber-200/95">Real-time anti-raid and dangerous action prevention</p>
                </div>
              </article>
              <article className="group/item flex items-start gap-4">
                <span className="grid h-10 w-10 place-content-center rounded-xl bg-amber-400 text-black"><FaExclamationTriangle /></span>
                <div>
                  <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover/item:text-amber-300 sm:text-2xl">Emergency Situations</h3>
                  <p className="mt-1 text-sm text-fuchsia-100/65 transition-colors duration-300 group-hover/item:text-amber-200/95">Instant lockdown and threat mitigation</p>
                </div>
              </article>
              <article className="group/item flex items-start gap-4">
                <span className="grid h-10 w-10 place-content-center rounded-xl bg-amber-400 text-black"><FaVideo /></span>
                <div>
                  <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover/item:text-amber-300 sm:text-2xl">Camera Enforcement</h3>
                  <p className="mt-1 text-sm text-fuchsia-100/65 transition-colors duration-300 group-hover/item:text-amber-200/95">Mandatory camera-on with auto-move</p>
                </div>
              </article>
              <article className="group/item flex items-start gap-4">
                <span className="grid h-10 w-10 place-content-center rounded-xl bg-amber-400 text-black"><FaPen /></span>
                <div>
                  <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover/item:text-amber-300 sm:text-2xl">Custom Roles</h3>
                  <p className="mt-1 text-sm text-fuchsia-100/65 transition-colors duration-300 group-hover/item:text-amber-200/95">Create premium role flows, mappings, and advanced role automation</p>
                </div>
              </article>
            </div>

            <div className="space-y-6">
              <article className="group/item flex items-start gap-4">
                <span className="grid h-10 w-10 place-content-center rounded-xl bg-amber-400 text-black"><FaLock /></span>
                <div>
                  <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover/item:text-amber-300 sm:text-2xl">Secure Channel Protection</h3>
                  <p className="mt-1 text-sm text-fuchsia-100/65 transition-colors duration-300 group-hover/item:text-amber-200/95">Channel-level security configurations</p>
                </div>
              </article>
              <article className="group/item flex items-start gap-4">
                <span className="grid h-10 w-10 place-content-center rounded-xl bg-amber-400 text-black"><FaBan /></span>
                <div>
                  <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover/item:text-amber-300 sm:text-2xl">Anti-Token Spam</h3>
                  <p className="mt-1 text-sm text-fuchsia-100/65 transition-colors duration-300 group-hover/item:text-amber-200/95">Intelligent spam detection and prevention</p>
                </div>
              </article>
              <article className="group/item flex items-start gap-4">
                <span className="grid h-10 w-10 place-content-center rounded-xl bg-amber-400 text-black"><FaMusic /></span>
                <div>
                  <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover/item:text-amber-300 sm:text-2xl">Music Module</h3>
                  <p className="mt-1 text-sm text-fuchsia-100/65 transition-colors duration-300 group-hover/item:text-amber-200/95">Access advanced queue controls and smart playback tools</p>
                </div>
              </article>
              <article className="group/item flex items-start gap-4">
                <span className="grid h-10 w-10 place-content-center rounded-xl bg-amber-400 text-black"><FaPen /></span>
                <div>
                  <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover/item:text-amber-300 sm:text-2xl">No Prefix Commands</h3>
                  <p className="mt-1 text-sm text-fuchsia-100/65 transition-colors duration-300 group-hover/item:text-amber-200/95">Use commands without prefix and streamline interactions</p>
                </div>
              </article>
              <article className="group/item flex items-start gap-4">
                <span className="grid h-10 w-10 place-content-center rounded-xl bg-amber-400 text-black"><FaCrown /></span>
                <div>
                  <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover/item:text-amber-300 sm:text-2xl">And many more features</h3>
                  <p className="mt-1 text-sm text-fuchsia-100/65 transition-colors duration-300 group-hover/item:text-amber-200/95">Explore additional premium tools built for scaling communities</p>
                </div>
              </article>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="/premium"
              className="premium-cta btn-alive inline-flex items-center gap-3 rounded-2xl border border-amber-300/40 bg-gradient-to-r from-amber-500 to-yellow-400 px-8 py-4 text-lg font-bold text-[#1f1400] shadow-[0_10px_28px_rgba(245,158,11,0.4)]"
            >
              <FaCrown className="premium-crown" />
              Unlock Premium Features
            </a>
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="mx-auto max-w-6xl px-5 py-16 text-white"
        data-reveal
        data-reveal-delay="80"
      >
        <div className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-fuchsia-300/25 bg-fuchsia-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-fuchsia-100/85">
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--aqua)] shadow-[0_0_18px_rgba(199,124,255,0.95)]" />
            Support Center
          </p>
          <h2 className="mt-4 text-3xl font-black leading-[1.05] sm:text-5xl">
            <span className="bg-gradient-to-r from-[var(--aqua)] to-[var(--aqua-2)] bg-clip-text text-transparent">
              Frequently Asked
            </span>
            <br />
            Questions
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-fuchsia-100/65 sm:text-base">
            Everything you need to know about setting up Fushia for security, automation, and music.
          </p>
        </div>

        <div className="neon-box mx-auto mt-8 max-w-3xl rounded-[1.6rem] border border-white/10 bg-[linear-gradient(140deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-4 shadow-[0_20px_90px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.12)] sm:p-6">
          <div className="space-y-3 rounded-[1.25rem] border border-white/8 bg-[linear-gradient(130deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-3 sm:p-5">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="neon-box-soft group overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(130deg,rgba(199,124,255,0.14),rgba(255,255,255,0.03))]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-left text-lg font-semibold [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <span className="grid h-8 w-8 place-content-center rounded-full border border-white/12 bg-white/5 text-base text-fuchsia-100 transition group-open:border-fuchsia-300/40 group-open:bg-[var(--aqua)] group-open:text-[#1c0d2b]">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">-</span>
                  </span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="rounded-2xl border border-white/10 bg-[#140a1f]/88 px-4 py-3 text-xs leading-relaxed text-fuchsia-100/80 sm:text-sm">
                    {item.a}
                  </p>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-5 flex justify-center">
            <a
              href="#"
              className="btn-alive inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-5 py-2.5 text-xs font-semibold text-fuchsia-100/85 hover:text-white sm:text-sm"
            >
              Still have questions? Visit our documentation
              <span aria-hidden="true" className="text-base leading-none text-[var(--aqua)]">{"->"}</span>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-6 text-white" data-reveal data-reveal-delay="100">
        <div className="glass neon-box flex min-h-[260px] flex-col items-center justify-center overflow-hidden rounded-3xl px-6 py-10 text-center sm:px-10 sm:py-12">
          <h2 className="mx-auto text-3xl font-black sm:text-4xl">Bring Fushia to your server</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-fuchsia-100/75">
            Deploy moderation, automation, utility tools, and music features in minutes.
          </p>
          <div className="mx-auto mt-7 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              className="btn-alive rounded-xl bg-gradient-to-r from-[var(--aqua)] to-[var(--aqua-2)] px-7 py-3 text-sm font-semibold text-[#1c0d2b] shadow-[0_8px_35px_rgba(199,124,255,0.35)]"
            >
              Add Fushia
            </button>
            <a
              href="#commands"
              className="btn-alive rounded-xl border border-[var(--line)] px-7 py-3 text-sm font-semibold text-fuchsia-100/90"
            >
              View Commands
            </a>
          </div>
        </div>
      </section>

      <section className="mt-14 border-t border-white/10 bg-[radial-gradient(880px_420px_at_12%_8%,rgba(170,64,168,0.24),transparent_62%),radial-gradient(840px_460px_at_95%_95%,rgba(232,95,198,0.18),transparent_58%),#090312] text-white" data-reveal data-reveal-delay="120">
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
                Your complete Discord companion with antinuke security, smart moderation, automation, giveaways, logging, and music.
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
                <li><a href="#features" className="transition hover:text-white">Features</a></li>
                <li><a href="#commands" className="transition hover:text-white">Commands</a></li>
                <li><a href="#premium" className="transition hover:text-white">Pricing</a></li>
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

    </>
  );
}


