import Link from "next/link";

export default function Disco() {
  return (
    <div className="min-h-screen px-[4vw] max-w-[50em] font-mono leading-relaxed cursor-crosshair selection:bg-black selection:text-white">
      <header className="my-[6vh]">
        <h1 className="text-[1.6em] font-normal">
          Disco
          <span className="opacity-70 text-base block">2022-2023</span>
        </h1>
        <p className="opacity-70 text-base font-normal">
          Product Design Lead, Decentralized Identity
        </p>
      </header>

      <section className="my-[6vh]">
        <h2 className="text-base font-normal">Project Details</h2>
        <p className="text-base font-normal">
          Details about Disco project coming soon.
        </p>
      </section>
    </div>
  );
}
