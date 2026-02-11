import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Thoughts on product design, Web3, music, and building things that matter.",
  openGraph: {
    images: [
      "/og?title=Writing&subtitle=Thoughts on design, Web3, music, and building things that matter",
    ],
  },
};

const posts = [
  {
    slug: "know-your-medium",
    title: "Know Your Medium",
    date: "February 2026",
    wordCount: 870,
  },
  //   {
  //     slug: "broken-incentive-machine",
  //     title: "Web3's Broken Incentive Machine",
  //     date: "1 July 2025",
  //     wordCount: 2118,
  //   },
  {
    slug: "on-factory",
    title: "On Factory",
    date: "30 August 2024",
    wordCount: 624,
  },
  //   {
  //     slug: "account-abstraction",
  //     title: "The Centralization Vector Disguised as User Experience",
  //     date: "16 September 2023",
  //     wordCount: 1668,
  //   },
];

export default function WritingIndex() {
  return (
    <section className="w-full">
      <h1 className="text-3xl md:text-5xl leading-[1em] text-balance border-b py-[1em] px-2 ">
        Writing
      </h1>
      <ul className="flex flex-col">
        {posts.map((post) => (
          <li key={post.slug} className="w-full">
            <Link
              href={`/writing/${post.slug}`}
              className="group flex w-full justify-betweenn gap-2 px-2 border-b py-[0.5em] pt-[2em] group hover:bg-blue-800 hover:text-white group"
            >
              <span className="group-hover:underline mr-auto">
                {post.title}
              </span>
              <span className="text-blue-800/40 group-hover:text-white/40">
                {post.date} · {post.wordCount.toLocaleString()} words
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
