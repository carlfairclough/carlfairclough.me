import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Link from "next/link";
import { Logo } from "./components/Logo";

export const metadata: Metadata = {
  metadataBase: new URL("https://carl.fyi"),
  title: {
    default: "Carl Fairclough: Product Designer & Engineer",
    template: "%s — Carl Fairclough",
  },
  description:
    "Designing meaningful experiences and shipping products that matter",
  openGraph: {
    siteName: "Carl Fairclough",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og?title=Carl Fairclough&subtitle=Product Designer %26 Engineer",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased relative"
        style={{
          fontFamily:
            '"Helvetica Neue", Helvetica, Arial, "Nimbus Sans", sans-serif',
        }}
      >
        <Analytics />
        <div className="min-h-screen cursor-crosshair selection:bg-black selection:text-white  leading-[1.2em] text-blue-800 bg-[#FEFDF9] flex w-full flex-col">
          <header className="px-2 w-full border-b flex justify-between py-2">
            <Link className="flex justify-start items-baseline" href="/">
              Carl Fairclough{" "}
            </Link>
            <Link href="/writing">Writing</Link>
            <p>
              <Link href="mailto:hi@carl.fyi">Email</Link>,{" "}
              <Link href="https://www.linkedin.com/in/carl-fairclough/">
                LinkedIn
              </Link>
              , <Link href="https://x.com/carlfairclough">X</Link>
            </p>
          </header>
          {children}
          <Logo className="fill-blue-800 h-3 w-auto mt-auto ml-2 mb-2 mr-auto" />
        </div>
      </body>
    </html>
  );
}
