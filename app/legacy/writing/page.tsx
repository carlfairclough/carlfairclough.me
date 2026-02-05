import Link from "next/link";
import { posts } from "./[title]/posts";

export const metadata = {
  title: "Writing - Carl Fairclough",
  description: "Thoughts on technology, design, decentralization, and building meaningful products that matter.",
  authors: [{ name: "Carl Fairclough", url: "https://carl.fyi" }],
  creator: "Carl Fairclough",
  
  // Open Graph
  openGraph: {
    title: "Writing - Carl Fairclough",
    description: "Thoughts on technology, design, decentralization, and building meaningful products that matter.",
    url: "https://carl.fyi/writing",
    siteName: "Carl Fairclough",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://carl.fyi/portrait.png",
        width: 400,
        height: 400,
        alt: "Carl Fairclough",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary",
    title: "Writing - Carl Fairclough",
    description: "Thoughts on technology, design, decentralization, and building meaningful products that matter.",
    creator: "@carlfairclough",
    site: "@carlfairclough",
    images: ["https://carl.fyi/portrait.png"],
  },
};

export default function Writing() {
  return (
    <>
      <header className="mb-[6vh] max-w-[50em] px-[4vw]">
        <h1 className="text-[1.6em] font-normal text-black">Writing</h1>
      </header>

      <section className="mt-[6vh] max-w-[50em] px-[4vw]">
        {posts.map((post) => (
          <article key={post.slug} className="my-12">
            <Link href={`/writing/${post.slug}`} className="block group">
              {" "}
              <h2 className="text-xl font-normal text-black group-hover:underline">
                {post.title}
              </h2>
              <p className="text-base font-normal py-4">{post.description}</p>{" "}
              <p className="text-base font-normal mb-2 opacity-70">
                {post.date}
              </p>
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}
