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
    <section className="my-[6vh]">
      <h2 className="text-base font-normal">Project History</h2>
      <ol className="list-decimal list-inside">
        {projectHistory.map((item, index) => (
          <li key={index} className="text-base font-normal">
            {item.company}: <span className="opacity-70">{item.role}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}