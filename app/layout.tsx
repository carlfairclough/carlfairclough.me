import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

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
      <body
        className="antialiased relative"
        style={{
          fontFamily:
            '"Helvetica Neue", Helvetica, Arial, "Nimbus Sans", sans-serif',
        }}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
