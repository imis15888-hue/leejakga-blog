import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content, readingTime } = post;

  const dateStr = frontmatter.date
    ? new Date(frontmatter.date).toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <div className="max-w-3xl mx-auto px-5 py-12">
      {/* 뒤로가기 */}
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium hover:underline underline-offset-2"
          style={{ color: "#8b5e3c", textDecorationColor: "#c4956a" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          블로그 목록
        </Link>
      </div>

      {/* 헤더 */}
      <header className="mb-10 pb-8 border-b" style={{ borderColor: "#e8d5c0" }}>
        {frontmatter.series && (
          <div className="flex items-center gap-2 mb-4">
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{ backgroundColor: "#f5ebe0", color: "#8b5e3c" }}
            >
              {frontmatter.series}
            </span>
            {frontmatter.episode && (
              <span className="text-xs" style={{ color: "#9c7b5e" }}>
                {frontmatter.episode}편
              </span>
            )}
          </div>
        )}
        <h1
          className="text-3xl md:text-4xl font-bold leading-tight mb-4"
          style={{ color: "#2c1f14" }}
        >
          {frontmatter.title}
        </h1>
        <p className="text-base mb-4" style={{ color: "#6b4a32" }}>
          {frontmatter.description}
        </p>
        <div className="flex items-center gap-3 text-sm" style={{ color: "#9c7b5e" }}>
          <span>{dateStr}</span>
          {readingTime && (
            <>
              <span>&middot;</span>
              <span>{readingTime} 읽기</span>
            </>
          )}
        </div>
      </header>

      {/* 본문 */}
      <article className="prose-warm">
        <MDXRemote source={content} />
      </article>

      {/* 하단 */}
      <div
        className="mt-16 pt-8 border-t flex items-center justify-between"
        style={{ borderColor: "#e8d5c0" }}
      >
        <Link
          href="/blog"
          className="text-sm font-medium hover:underline underline-offset-2"
          style={{ color: "#8b5e3c", textDecorationColor: "#c4956a" }}
        >
          목록으로 돌아가기
        </Link>
        <Link
          href="/about"
          className="text-sm"
          style={{ color: "#9c7b5e" }}
        >
          이작가 소개
        </Link>
      </div>
    </div>
  );
}
