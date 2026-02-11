import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    PostHeader: ({ title, date }: { title: string; date: string }) => (
      <section className="w-full border-b px-2 text-3xl md:text-5xl leading-[1em] gap-x-[0.5ch] py-[1em]">
        <h1 className="max-w-[45ch] text-3xl md:text-5xl leading-[1em] text-balance">
          {title}
        </h1>
        <time className="text-blue-800/40">{date}</time>
      </section>
    ),
    wrapper: ({ children }) => (
      <article className="w-full text-3xl flex flex-col gap-[1em]">
        {children}
      </article>
    ),
    p: ({ children }) => <p className="max-w-[45ch] px-2">{children}</p>,
    h2: ({ children }) => <h2 className="text-black px-2">{children}</h2>,
    hr: () => <hr className="border-blue-800/20 w-full" />,
    ...components,
  };
}
