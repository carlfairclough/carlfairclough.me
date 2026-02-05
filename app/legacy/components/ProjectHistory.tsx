interface ProjectHistoryItem {
  company: string;
  role: string;
}

const projectHistory: ProjectHistoryItem[] = [
  {
    company: "Best Friend Studio",
    role: "Principal, Product Designer",
  },
  {
    company: "Factory.fm",
    role: "Co-Founder, Music Social",
  },
  {
    company: "Oscillator",
    role: "Co-Founder, Public Goods Data",
  },
  {
    company: "Disco",
    role: "Product Design Lead, Decentralized Identity",
  },
  {
    company: "Status",
    role: "Product Design Lead, Wallets",
  },
  {
    company: "Mamo",
    role: "Product Design Lead, Wallets",
  },
  {
    company: "Ethereum.org",
    role: "Product Design Lead",
  },
  {
    company: "ConsenSys + Smart Dubai Office",
    role: "Product Design Lead, EdTech",
  },
  {
    company: "ConsenSys + 🔒",
    role: "Product Lead, Wallets",
  },
  {
    company: "ConsenSys + Dubai Properties Group",
    role: "Design & Front-End Lead, Governance",
  },
  {
    company: "Sixo + ZeroHeight",
    role: "Product Design, Design Systems",
  },
  {
    company: "Sixo + noon",
    role: "Design Systems Lead, eCommerce",
  },
  {
    company: "Sixo + DesignStudio London",
    role: "Design Systems Lead, eCommerce",
  },
  {
    company: "Sixo + Yum! + NowTV",
    role: "Design & Engineering Lead, Rewards Promotion",
  },
  {
    company: "Sixo + Braun + Tesco",
    role: "Design & Engineering Lead, Marketing",
  },
  {
    company: "Sixo",
    role: "Co-founder, Co-operative",
  },
  {
    company: "Voiteq",
    role: "Design Systems Lead, Asset Tracking",
  },
  {
    company: "Nestlé + Cineworld",
    role: "Design & Engineering Lead, Rewards Promotion",
  },
  {
    company: "Formisimo",
    role: "Design & Front-End Lead, Analytics",
  },
  {
    company: "Timetastic",
    role: "Interaction Designer, HR Tooling",
  },
  {
    company: "Mediaburst",
    role: "Interaction Designer, Communications Tools",
  },
  {
    company: "Florence",
    role: "Design Engineer, Healthcare",
  },
  {
    company: "SEO Creative",
    role: "Web Design, Healthcare",
  },
];

export default function ProjectHistory() {
  return (
    <section className="py-[15vh] text-lg px-[4vw] max-w-[50em]">
      <h2 className="text-lg font-normal mb-4">Project History</h2>
      <ol className="list-decimal list-inside text-slate-700">
        {projectHistory.map((item, index) => (
          <li
            key={index}
            className="py-1 border-b border-dashed border-slate-200 lg:flex justify-between list-none"
          >
            <span>{item.company}</span> <br className="lg:hidden" />
            <span className="opacity-70">{item.role}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
