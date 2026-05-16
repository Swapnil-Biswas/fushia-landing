import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";
import SiteFooter from "../../components/SiteFooter";

export default function TermsPage() {
  return (
    <main className="min-h-screen px-5 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 px-4 py-1.5 text-sm font-semibold text-fuchsia-300 transition hover:bg-fuchsia-500/20"
        >
          Back
        </Link>

        <section className="mx-auto mt-8 max-w-3xl rounded-2xl border border-fuchsia-400/45 bg-[#0b090d]/92 p-6 shadow-[0_0_36px_rgba(236,72,255,0.2)] sm:p-8">
          <h1 className="text-center text-4xl font-black tracking-tight text-fuchsia-400">Terms of Service</h1>
          <p className="mt-2 text-center text-xs text-white/60">Last updated: August 25, 2025</p>

          <div className="mt-8 space-y-7 text-sm leading-relaxed text-white/85">
            <section>
              <h2 className="text-2xl font-bold text-fuchsia-400">1. Agreement to Terms</h2>
              <p className="mt-2">
                By adding or using Fushia, you agree to these Terms of Service. These terms apply to all users who
                interact with the bot, including server owners, admins, moderators, and members.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-fuchsia-400">2. Allowed Use</h2>
              <p className="mt-2">
                Fushia must be used lawfully and in line with Discord policies. Use of the service for spam, abuse,
                harassment, fraud, or illegal activity is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-fuchsia-400">3. Enforcement &amp; Developer Authority</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-white/80">
                <li>Investigate suspicious activity linked to misuse of bot features.</li>
                <li>Apply moderation actions, including temporary or permanent restrictions.</li>
              </ul>
              <ul className="mt-2 list-disc space-y-1 pl-10 text-white/70">
                <li>Deliberately triggering outages or rate-limit abuse.</li>
                <li>Attempting exploitation, reverse-engineering, or attacks.</li>
                <li>Distributing harmful, explicit, or unlawful content through the bot.</li>
                <li>Impersonating Fushia staff, support, or brand identity.</li>
                <li>Coordinating raids or harmful automation against communities.</li>
              </ul>
            </section>

            <section className="rounded-xl border border-fuchsia-400/45 bg-fuchsia-500/10 p-4">
              <p className="inline-flex items-center gap-2 text-sm font-bold text-fuchsia-300">
                <FaExclamationTriangle />
                Global Enforcement
              </p>
              <p className="mt-2 text-white/85">
                In severe cases, we may enforce network-wide safety actions across shared servers where Fushia is
                present, in order to prevent repeated abuse.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-fuchsia-400">4. Investigative Access</h2>
              <p className="mt-2">This may apply in cases involving:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-white/80">
                <li>Exploit attempts targeting bot functionality</li>
                <li>Organized raid or coordinated abuse patterns</li>
                <li>Evidence tampering or intentional service disruption</li>
              </ul>
              <p className="mt-2">
                We may perform temporary investigative actions needed to validate abuse and preserve platform
                stability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-fuchsia-400">5. Intellectual Property</h2>
              <p className="mt-2">
                Fushia code, systems, branding, and assets remain the property of Fushia Development. Reproduction,
                resale, or redistribution without written permission is not permitted.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-fuchsia-400">6. Suspension or Termination</h2>
              <p className="mt-2">
                Access may be restricted or terminated at any time, particularly when these Terms, Discord policy, or
                safety standards are violated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-fuchsia-400">7. Updates to Terms</h2>
              <p className="mt-2">
                We may revise these Terms from time to time. Continued use after revisions means you accept the
                updated version.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-fuchsia-400">8. Contact</h2>
              <p className="mt-2">
                Questions about these Terms can be sent to our team through the official Fushia support channel.
              </p>
            </section>
          </div>

          <p className="mt-8 border-t border-white/10 pt-4 text-xs text-white/45">
            © {new Date().getFullYear()} Fushia Development. All Rights Reserved.
          </p>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}

