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
          Bulding teams & products that beat complexity with delight so that
          people can do what they need and get on with their lives
        </p>
      </header>

      <Projects />

      <Collaborators />

      {/* <section className="my-[6vh]">
        <h2 className="text-base font-normal">Buzzwords:</h2>
        <p className="text-base font-normal">
          <u>Design:</u> Systems Design, User Research, Information
          Architecture, User Flows, Wireframing, UI Design, Testing, Data-driven
          design
        </p>
        <p className="text-base font-normal">
          <u>Development:</u> Javascript, CSS, HTML, React, Typescript, Next.js,
          EVM, MongoDB, Postgres, SQL
        </p>
        <p className="text-base font-normal">
          <u>Org:</u> Product Leadership, Design & Development Integration,
          Cross-functional Delivery, Strategic Thinking
        </p>
      </section>

      <footer className="my-[6vh]">
        <h2 className="text-base font-normal">Contact</h2>
        <p className="text-base font-normal">
          If you know of an opportunity to build products that scale under
          constraint and lead teams that ship with clarity and speed, please
          reach out.
        </p>
        <p className="text-base font-normal">
          <b>
            <a href="mailto:hi@carlfairclough.me">hi@carlfairclough.me</a>
          </b>
        </p>
        <p className="text-base font-normal">@carlfairclough</p>
      </footer> */}
    </div>
  );
}
