import Link from "next/link";
import Collaborators from "./components/Collaborators";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen leading-relaxed cursor-crosshair selection:bg-black selection:text-white">
      <header className="py-[15vh] px-[4vw] max-w-[50em] ">
        <img src="/portrait.png" width="80" className="-mx-4" />
        <h1 className="text-[1.6em] font-normal">
          Carl Fairclough{" "}
          <span className="opacity-70">is a Product Designer & Engineer</span>
        </h1>
        <p className="opacity-70 font-normal text-[1.6em] lowercase">
          Building easy-to-use tools and top-notch teams that help people to
          understand, express, and connect.
        </p>
      </header>

      <Projects />

      <Collaborators />

      <footer className="my-[6vh] md:flex justify-between items-end px-[4vw] w-full ">
        <h2 className="text-3xl">
          Let's work together <span className="bold">→</span>{" "}
          <a
            href="mailto:hi@carl.fyi"
            className="decoration-wavy decoration-3 decoration-blue-700 text-blue-700 underline"
          >
            hi@carl.fyi
          </a>
        </h2>
        <div className="mt-[6vh] md:mt-auto">
          <Link href="/privacy" className="text-slate-500  ">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}
