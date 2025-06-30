interface Collaborator {
  name: string;
  image: string;
  url: string;
}

const collaborators: Collaborator[] = [
  {
    name: "Hester Bruikman",
    image:
      "https://media.licdn.com/dms/image/v2/C4D03AQGmElTLPDtCtg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1547993210092?e=1756339200&v=beta&t=e7SefvMfMAcnjnT60KEiqh0uGomYxJ1VCqUPPR8l1FM",
    url: "https://www.linkedin.com/in/hesterbruikman/",
  },
  {
    name: "Alaa Hadad",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQGN52HEvVxMJg/profile-displayphoto-shrink_800_800/B4DZU3rkcQHkAc-/0/1740395924534?e=1756339200&v=beta&t=BiZypt3K2bJiqYaO7jxIDyv-kbn93Mm6f321ThxyKnk",
    url: "https://www.linkedin.com/in/alaahd/",
  },
  {
    name: "LDF",
    image:
      "https://pbs.twimg.com/profile_images/1813273993383739392/X5VD1G79_400x400.jpg",
    url: "https://x.com/ldf_gm",
  },
  {
    name: "Nguyet Vuong",
    image:
      "https://media.licdn.com/dms/image/v2/C5603AQFIvmHvbLvzww/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1654129764153?e=1756339200&v=beta&t=kHT9GPdxILUa4M1xfz5QZe1pCa8h1FP_8p3NYeJg75M",
    url: "https://www.linkedin.com/in/nguyet-vuong/",
  },
  {
    name: "Kaspar Pyyding",
    image:
      "https://pbs.twimg.com/profile_images/1685998192666497024/TUnDNnet_400x400.jpg",
    url: "https://x.com/pyyding/",
  },
  {
    name: "Shaun Church",
    image:
      "https://pbs.twimg.com/profile_images/1548774170258972672/HjMLkR6A_400x400.jpg",
    url: "https://x.com/shaunchurch",
  },
  {
    name: "Fiona Dean",
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQFd-058NqFMhQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1682710201139?e=1756339200&v=beta&t=0UGRMRYxzMFAWy5pCMsVWco4-XVOVbAJTgT9b9YbwhU",
    url: "https://www.linkedin.com/in/alivingdiary/",
  },
  {
    name: "Liam Murphy",
    image:
      "https://framerusercontent.com/images/YmaOIuw3iGnUNxx1hH9rdrHg7g.png",
    url: "https://murf.app/",
  },
  {
    name: "Asim Janjua",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQGI8Q2qbBhgkg/profile-displayphoto-shrink_800_800/B4DZPeEoSTHUAg-/0/1734597576856?e=1756339200&v=beta&t=IiWCN_2O5A9yJImxWLCjkSxSJOPTk4jU279irxEPTms",
    url: "https://www.linkedin.com/in/asimjanj/",
  },
  {
    name: "Ryan Cordell",
    image:
      "https://pbs.twimg.com/profile_images/1801242626064023553/VmH8lQQB_400x400.jpg",
    url: "https://x.com/cordellcreatescopy",
  },
  {
    name: "Zach Herring",
    image:
      "https://pbs.twimg.com/profile_images/1650147994707308545/TisNyM5F_400x400.jpg",
    url: "https://x.com/zherring",
  },
];

export default function Collaborators() {
  return (
    <section className="my-[6vh]">
      <h2 className="text-base font-normal">Collaborators</h2>
      <div className="flex flex-wrap gap-3 my-4">
        {collaborators.map((collaborator, index) => (
          <a
            key={index}
            href={collaborator.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 rounded-full pl-1 pr-2 py-1 transition-colors text-sm"
          >
            <img
              src={collaborator.image}
              alt={collaborator.name}
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="font-normal">{collaborator.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}