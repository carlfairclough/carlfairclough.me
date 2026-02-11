import Link from "next/link";
import { collaborators } from "./legacy/components/Collaborators";

const gridClasses =
  "grid col-span-1 sm:col-span-2 sm:grid-cols-2 md:col-span-4 md:grid-cols-4 lg:col-span-4 lg:grid-cols-4";

function Section({
  title,
  children,
  as: Element = "div",
}: {
  title: string;
  children: React.ReactNode;
  as?: "div" | "ol";
}) {
  return (
    <section className="w-full px-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 py-2 border-b">
      <h2>{title}</h2>
      <Element className={gridClasses}>{children}</Element>
    </section>
  );
}

function ArrowLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isExternal = href.startsWith("http");
  return (
    <Link
      href={href}
      className="group flex"
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children} <ArrowIcon />
    </Link>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="6"
      height="6"
      viewBox="0 0 6 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mt-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
    >
      <path
        d="M0.353578 0.500658C0.353578 0.224533 0.577407 0.000739929 0.853525 0.00071109L5.35373 2.05243e-05C5.62975 0.000104671 5.8536 0.223948 5.85368 0.499967L5.85299 5.00018C5.85296 5.27629 5.62917 5.50012 5.35304 5.50012C5.07717 5.49983 4.85313 5.27612 4.8531 5.00018L4.85379 1.70702L0.707131 5.85368L2.46747e-05 5.14657L4.14668 0.999914L0.853525 1.0006C0.577585 1.00058 0.353867 0.776537 0.353578 0.500658Z"
        className="fill-blue-800/40 group-hover:fill-pink-300"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <section className="w-full px-2 border-b py-[1em]">
        <h1 className="max-w-[45ch] text-3xl md:text-5xl leading-[1em] text-balance">
          {/* <mark className="bg-blue-800 text-white"> */}
          Hi there, I'm Carl. I've spent 15 years designing products that
          disappear into use. I've worked with bootstrapped startups, Fortune
          500s, governments, neobanks, and blockchain companies. My work focuses
          on clarity above embellishment.
          <br />
          <br />
          The best work is always anonymous.
          {/* </mark> */}
        </h1>
      </section>

      <Section title="Current">
        {current.map(({ name, url, description }, i) => (
          <div key={i}>
            <h3>{url ? <ArrowLink href={url}>{name}</ArrowLink> : name}</h3>
            {description && <p className="text-blue-800/60">{description}</p>}
          </div>
        ))}
      </Section>

      {/* <Section title="Skills" as="ol">
        {skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </Section> */}

      <Section title="Projects, Brands" as="ol">
        {projects.map(({ name, url }, i) => (
          <li key={i} className="flex">
            {url ? <ArrowLink href={url}>{name}</ArrowLink> : name}
          </li>
        ))}
      </Section>

      <Section title="Founded">
        {ventures.map(({ name, url, description }, i) => (
          <div key={i}>
            <h3>{url ? <ArrowLink href={url}>{name}</ArrowLink> : name}</h3>
            {description && <p className="text-blue-800/60">{description}</p>}
          </div>
        ))}
      </Section>

      <Section title="Collaborators" as="ol">
        {collaborators.map(({ name, url }, i) => (
          <li key={i} className="flex">
            <ArrowLink href={url}>{name}</ArrowLink>
          </li>
        ))}
      </Section>
    </>
  );
}

interface Item {
  name: string;
  url?: string;
  description?: string;
}

const current: Item[] = [
  { name: "MegaETH", description: "Head of Product Design" },
  // { name: "LARP VC", description: "Co-founder & Chairman" },
];

const ventures: Item[] = [
  { name: "Sixodotco", description: "Product Studio" },
  { name: "Best Friend Sudio", description: "Product Studio" },
  { name: "Oscillator", description: "User-controlled data" },
  {
    name: "Factory",
    url: "https://factory.fm",
    description: "Music discovery",
  },
];

const projects: Item[] = [
  { name: "MegaETH", url: "https://megaeth.com" },
  { name: "Nestle", url: "https://en.wikipedia.org/wiki/Nestl%C3%A9" },
  { name: "Sony Pictures", url: "https://en.wikipedia.org/wiki/Sony_Pictures" },
  { name: "Braun", url: "https://en.wikipedia.org/wiki/Braun_(company)" },
  {
    name: "Coca Cola",
    url: "https://en.wikipedia.org/wiki/The_Coca-Cola_Company",
  },
  { name: "ConsenSys", url: "https://en.wikipedia.org/wiki/ConsenSys" },
  { name: "MakerDAO", url: "https://en.wikipedia.org/wiki/MakerDAO" },
  {
    name: "Smart Dubai",
    url: "https://www.wsj.com/articles/dubai-aims-to-be-a-city-built-on-blockchain-1493086080",
  },
  { name: "Yum!", url: "https://en.wikipedia.org/wiki/Yum!_Brands" },
  {
    name: "Noon",
    url: "https://www.thenationalnews.com/business/economy/e-commerce-platform-noon-launches-in-uae-1.662988",
  },
  { name: "NowTV", url: "https://en.wikipedia.org/wiki/Now_(Sky)" },
  { name: "Kiehls", url: "https://en.wikipedia.org/wiki/Kiehl%27s" },
  { name: "Du", url: "https://en.wikipedia.org/wiki/Du_(company)" },
  { name: "ZeroHeight", url: "https://zeroheight.com" },
  { name: "Oscillator" },
  { name: "Status", url: "https://status.app" },
  { name: "Factory.fm", url: "https://factory.fm" },
  {
    name: "Much Better Adventures",
    url: "https://www.muchbetteradventures.com",
  },
];
