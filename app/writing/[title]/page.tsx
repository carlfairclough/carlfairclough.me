import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "./posts";

export async function generateStaticParams() {
  return posts.map((post) => ({
    title: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { title: string };
}) {
  const { title } = await params;
  const post = posts.find((p) => p.slug === title);
  if (!post) return {};

  const url = `https://carl.fyi/writing/${post.slug}`;
  const siteName = "Carl Fairclough";

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: "Carl Fairclough", url: "https://carl.fyi" }],
    creator: "Carl Fairclough",
    publisher: "Carl Fairclough",

    // Open Graph
    openGraph: {
      title: post.title,
      description: post.description,
      url: url,
      siteName: siteName,
      locale: "en_US",
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      authors: ["Carl Fairclough"],
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
      title: post.title,
      description: post.description,
      creator: "@carlfairclough",
      site: "@carlfairclough",
      images: ["https://carl.fyi/portrait.png"],
    },

    // Additional meta tags
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "small",
        "max-snippet": -1,
      },
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: { title: string };
}) {
  const { title } = await params;
  const post = posts.find((p) => p.slug === title);

  if (!post) {
    notFound();
  }

  return (
    <>
      <header className="mb-[4em] px-[4vw] max-w-[50em]">
        <h1 className="text-[1.6em] font-normal text-black">{post.title}</h1>
        <p className="opacity-70 text-base font-normal">
          Published {post.date}
        </p>
      </header>

      <article className="max-w-[50em] px-[4vw]">
        <post.post />
      </article>
    </>
  );
}
