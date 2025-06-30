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
          <div>
            <span className="bold mr-2">→</span>
            <a
              href="mailto:hi@carl.fyi"
              className="decoration-wavy decoration-blue-700 text-blue-700 underline decoration-1 hover:scale-105"
            >
              hi@carl.fyi
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-16">{children}</main>

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
          <Link href="/" className="text-base font-normal hover:underline">
            ← Back to home
          </Link>
        </div>
        <div className="mt-[6vh] md:mt-auto">
          <Link href="/privacy" className="text-slate-500  ">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}
