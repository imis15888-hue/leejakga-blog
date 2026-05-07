import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { Post, PostMeta } from "@/types/blog";

const POSTS_DIR = path.join(process.cwd(), "content/blog");

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => file.replace(/\.(mdx|md)$/, ""));
}

export function getPostBySlug(slug: string): Post | null {
  const extensions = [".mdx", ".md"];
  let filePath: string | null = null;

  for (const ext of extensions) {
    const candidate = path.join(POSTS_DIR, `${slug}${ext}`);
    if (fs.existsSync(candidate)) {
      filePath = candidate;
      break;
    }
  }

  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    slug,
    frontmatter: {
      title: data.title ?? "",
      date: data.date ? String(data.date) : "",
      description: data.description ?? "",
      series: data.series,
      episode: data.episode,
      tags: data.tags,
    },
    content,
    readingTime: `${Math.ceil(stats.minutes)}분`,
  };
}

export function getAllPosts(): PostMeta[] {
  const slugs = getAllPostSlugs();
  return slugs
    .flatMap((slug) => {
      const post = getPostBySlug(slug);
      if (!post) return [];
      const meta: PostMeta = {
        slug: post.slug,
        frontmatter: post.frontmatter,
        readingTime: post.readingTime,
      };
      return [meta];
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}
