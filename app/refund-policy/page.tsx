import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen px-5 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 px-4 py-1.5 text-sm font-semibold text-fuchsia-300 transition hover:bg-fuchsia-500/20"
        >
          Back
        </Link>

        <section className="mx-auto mt-8 max-w-3xl rounded-2xl border border-fuchsia-400/35 bg-[#0b090d]/92 p-6 shadow-[0_0_36px_rgba(236,72,255,0.16)] sm:p-8">
          <h1 className="text-center text-4xl font-black tracking-tight text-fuchsia-400 sm:text-5xl">
            Refund and Cancellation Policy
          </h1>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-6 text-white/85 sm:p-8">
            <p>
              Fushia Premium is a digital subscription product delivered instantly after successful payment.
              Because access is granted in real time, refunds are limited and evaluated case by case.
            </p>

            <p className="mt-5 font-semibold text-white/95">Refunds may be approved when:</p>
            <ul className="mt-3 list-disc space-y-2 pl-7">
              <li>A verified technical fault on our side prevents premium features from activating.</li>
              <li>You were billed more than once for the same plan and report it within 72 hours.</li>
            </ul>

            <p className="mt-6">
              Refunds are generally not issued for accidental purchases, changed preferences, partial usage, or
              incorrect plan selection made by the user.
            </p>

            <p className="mt-6">
              You may cancel your subscription at any time. Cancellation stops renewal, and premium access remains
              active until the current billing cycle ends.
            </p>

            <p className="mt-6">
              For refund requests, contact support with your payment proof, account details, and a clear description
              of the issue so we can investigate quickly.
            </p>
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
