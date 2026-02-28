import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";

export default function PrivacyPage() {
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
          <h1 className="text-center text-4xl font-black tracking-tight text-fuchsia-400">Privacy Policy</h1>
          <p className="mt-2 text-center text-xs text-white/60">Last updated: October 31, 2025</p>

          <div className="mt-8 space-y-7 text-sm leading-relaxed text-white/85">
            <section>
              <h2 className="text-2xl font-bold text-fuchsia-400">1. Overview</h2>
              <p className="mt-2">
                This Privacy Policy explains what information Fushia collects, how it is used, and how we protect it.
                Our goal is to provide useful automation features without collecting unnecessary personal data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-fuchsia-400">2. Data We Process</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-white/80">
                <li>
                  <span className="font-semibold text-white/90">Account and Server IDs:</span> Used to identify guilds,
                  users, and permissions required for bot operations.
                </li>
                <li>
                  <span className="font-semibold text-white/90">Command and Event Metadata:</span> Processed to run
                  moderation, logging, utility, and automation modules.
                </li>
                <li>
                  <span className="font-semibold text-white/90">Configuration Data:</span> Stored settings such as
                  role mappings, filters, and module preferences.
                </li>
                <li>
                  <span className="font-semibold text-white/90">Service Analytics:</span> Aggregated usage metrics used
                  for reliability and product improvements.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-fuchsia-400">3. Why We Use Data</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-white/80">
                <li>Operate core features requested by server administrators.</li>
                <li>Prevent abuse, protect communities, and enforce security rules.</li>
                <li>Deliver better stability, performance, and user experience.</li>
                <li>Diagnose incidents and respond to support requests.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-fuchsia-400">4. Retention and Security</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-white/80">
                <li>
                  Data is retained only for as long as needed to provide active services and maintain required
                  functionality.
                </li>
                <li>
                  We use access controls, encryption where applicable, and operational safeguards to protect stored
                  data.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-fuchsia-400">5. Third-Party Integrations</h2>
              <p className="mt-2">
                Some features may rely on external providers (for example, APIs or infrastructure services). Where
                applicable, we work with providers that follow reasonable data-protection practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-fuchsia-400">6. Your Choices and Rights</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-white/80">
                <li>Request information about data associated with your account or server.</li>
                <li>Request correction or removal of eligible stored information.</li>
                <li>Disable or remove the bot from a server at any time.</li>
                <li>Contact support for privacy-related assistance.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-fuchsia-400">7. Children’s Privacy</h2>
              <p className="mt-2">
                Fushia is not intended for children under 13. If we discover that restricted-age personal data has
                been provided, we will take steps to delete it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-fuchsia-400">8. Policy Changes</h2>
              <p className="mt-2">
                We may update this Privacy Policy when product features, legal requirements, or operational practices
                change. The latest version on this page always applies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-fuchsia-400">9. Contact</h2>
              <p className="mt-2">
                For questions about privacy, data handling, or policy requests, contact the Fushia support team via
                official channels.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-fuchsia-400">10. Support Server Membership</h2>
              <p className="mt-2">
                When you authorize Fushia through approved flows, your Discord account may be linked with our official
                support ecosystem to receive service notices and assistance. No additional private profile data is
                collected for this process beyond identifiers required for account mapping.
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
