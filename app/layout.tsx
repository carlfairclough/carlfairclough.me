import type { Metadata } from "next";
import "./globals.css";

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
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
