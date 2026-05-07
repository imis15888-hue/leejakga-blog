export interface PostFrontmatter {
  title: string;
  date: string;
  description: string;
  series?: string;
  episode?: number;
  tags?: string[];
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
  readingTime?: string;
}

export interface PostMeta {
  slug: string;
  frontmatter: PostFrontmatter;
  readingTime?: string;
}
