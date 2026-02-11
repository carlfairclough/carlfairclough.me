import type { Metadata } from "next";
import { BackBar } from "../legacy/components/BackBar";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How carl.fyi handles analytics, cookies, and your data.",
  openGraph: {
    images: ["/og?title=Privacy Policy"],
  },
};

export default function Privacy() {
  return (
    <div className="min-h-screen leading-relaxed selection:bg-black selection:text-white text-slate-700">
      <BackBar />
      <header className="mb-[6vh] max-w-[50em] px-[4vw]">
        {" "}
        <h1 className="text-[1.6em] font-normal text-black">
          Privacy Policy
          <span className="opacity-70 text-base block">
            Last updated: 30 June 2025
          </span>
        </h1>
      </header>

      <section className="my-[6vh] max-w-[50em] px-[4vw]">
        <p className="text-base font-normal mb-4">
          This website exists to share my work and help people understand what I
          do. It's not here to harvest data—but I do use analytics, including
          session recordings, to understand what's useful and what's not. Below
          is a clear breakdown of what's collected, why, and how it's handled.
        </p>

        <h2 className="text-xl font-normal mt-[2vw] mb-4 text-black">
          What's Collected
        </h2>
        <p className="text-base font-normal mb-4">
          I use PostHog to collect basic analytics, including:
        </p>
        <ul className="text-base font-normal mb-4 list-disc ml-6">
          <li>Pages visited and time spent on them</li>
          <li>Clicks and scrolls</li>
          <li>Device and browser type</li>
          <li>Referral paths (how you got here)</li>
          <li>Occasionally, anonymised session recordings</li>
        </ul>
        <p className="text-base font-normal mb-4">
          Session recordings help me identify which case studies are actually
          useful and which ones miss the mark. These recordings don't include
          any personal details—no names, emails, or keystrokes.
        </p>

        <h2 className="text-xl font-normal mt-[2vw] mb-4 text-black">
          How It Works
        </h2>
        <p className="text-base font-normal mb-4">
          PostHog is a third-party tool that may set cookies or store small bits
          of information in your browser to distinguish visits. It also briefly
          processes your IP address to determine general location and device
          type. This information is used solely for site improvement and never
          to identify or track individuals.
        </p>
        <p className="text-base font-normal mb-4">
          I don't use heatmaps, ad pixels, or any marketing trackers. I've kept
          things minimal on purpose.
        </p>
        <p className="text-base font-normal mb-4">
          You can read{" "}
          <a
            href="https://posthog.com/privacy"
            className="underline decoration-wavy decoration-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            PostHog's privacy policy here
          </a>
          .
        </p>

        <h2 className="text-xl font-normal mt-[2vw] mb-4 text-black">
          No Ads. No Cross-Site Tracking. No Selling Data.
        </h2>
        <p className="text-base font-normal mb-4">
          I don't use advertising networks, I don't track you across other
          websites, and I don't sell your data. That's not the business I'm in.
        </p>
        <p className="text-base font-normal mb-4">
          If you email me, it stays between us. I won't put you on a list, and I
          won't share your message with anyone else.
        </p>

        <h2 className="text-xl font-normal mt-[2vw] mb-4 text-black">
          Your Rights
        </h2>
        <p className="text-base font-normal mb-4">
          Under UK GDPR and related data protection laws, you have rights over
          your data, including:
        </p>
        <ul className="text-base font-normal mb-4 list-disc ml-6">
          <li>The right to access or delete any personal data</li>
          <li>The right to object to processing</li>
          <li>The right to know what's collected and why</li>
        </ul>
        <p className="text-base font-normal mb-4">
          That said, I collect as little as possible and nothing personally
          identifying unless you email me directly.
        </p>

        <h2 className="text-xl font-normal mt-[2vw] mb-4 text-black">
          Opting Out
        </h2>
        <p className="text-base font-normal mb-4">
          You're welcome to block analytics using browser extensions like uBlock
          Origin or built-in protections like Firefox's Enhanced Tracking
          Protection. I often do the same, and I encourage others to take
          control over what gets collected about them online.
        </p>
        <p className="text-base font-normal mb-4">
          No hard feelings—unfortunately, too many sites take more data than
          they need, then misuse it. Everyone should protect themselves from
          that. And if someone's business depends on that kind of data
          collection, it's worth asking whether it should be a business at all.
        </p>

        <h2 className="text-xl font-normal mt-[2vw] mb-4 text-black">
          Contact
        </h2>
        <p className="text-base font-normal mb-4">
          If you have any questions, concerns, or just want to get in touch, you
          can reach me at{" "}
          <a
            href="mailto:hi@carl.fyi"
            className="underline decoration-wavy decoration-blue-700"
          >
            hi@carl.fyi
          </a>
          .
        </p>
        <p className="text-base font-normal">
          This site is here to be useful, respectful, and transparent. Nothing
          hidden—just the work.
        </p>
      </section>
    </div>
  );
}
