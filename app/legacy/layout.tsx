import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Nav } from "../legacy/components/Nav";

export const metadata: Metadata = {
  title: "Carl Fairclough: Product Designer & Engineer",
  description:
    "Designing meaningful experiences and shipping products that matter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased relative`}>
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-dot-grid opacity-30 animate-shimmer"></div>
        </div>
        <div className="relative z-10">
          <div className="min-h-screen">
            <Nav />
            <main>{children}</main>
            <footer className="my-[6vh] md:flex justify-between items-end px-[4vw] w-full ">
              <div>
                <h2 className="text-3xl mb-4">
                  Let's work together <span className="bold">→</span>{" "}
                  <a
                    href="mailto:hi@carl.fyi"
                    className="decoration-wavy decoration-3 decoration-blue-700 text-blue-700 underline"
                  >
                    hi@carl.fyi
                  </a>
                </h2>
              </div>
              <div className="mt-[6vh] md:mt-auto">
                <Link href="/privacy" className="text-slate-500  ">
                  Privacy Policy
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
