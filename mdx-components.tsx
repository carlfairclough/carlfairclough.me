import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-xl font-normal mt-[2vw] mb-4 text-black">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl font-normal mt-[2vw] mb-4 text-black">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-normal mt-[2vw] mb-4 text-black">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-base font-normal mb-4">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="text-base font-normal mb-4 list-disc ml-6">{children}</ul>
    ),
    li: ({ children }) => (
      <li>{children}</li>
    ),
    ...components,
  }
}