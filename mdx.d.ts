interface ArticleMetadata {
  title: string;
  date: string;
  description: string;
  slug: string;
}

declare module "*.mdx" {
  let MDXComponent: (props) => JSX.Element;
  export default MDXComponent;

  export const metadata: ArticleMetadata;
}
