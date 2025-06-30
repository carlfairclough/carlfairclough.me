import Image from "next/image";
import Link from "next/link";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="px-[4vw] py-1 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-70 transition-opacity"
          >
            <div
              className="w-12 h-12 rounded-full bg-cover bg-center bg-no-repeat -ml-4"
              style={{ backgroundImage: "url(/portrait.png)" }}
            />

            <span className="font-mono text-base text-black">
              Carl Fairclough
            </span>
          </Link>
        </div>
      </nav>

      <main className="pt-16">{children}</main>

      <footer className="my-[6vh] px-[4vw]">
        <Link href="/" className="text-base font-normal hover:underline">
          ← Back to home
        </Link>
      </footer>
    </div>
  );
}
