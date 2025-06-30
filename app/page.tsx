import Collaborators from "./components/Collaborators";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen px-[4vw] max-w-[50em] font-mono leading-relaxed cursor-crosshair selection:bg-black selection:text-white">
      <header className="py-[15vh]">
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
    </div>
  );
}
