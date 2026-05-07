import Link from "next/link";
import type { PostMeta } from "@/types/blog";

interface PostCardProps {
  post: PostMeta;
}

export default function PostCard({ post }: PostCardProps) {
  const { slug, frontmatter, readingTime } = post;
  const dateStr = frontmatter.date
    ? new Date(frontmatter.date).toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <Link href={`/blog/${slug}`} className="block group">
      <article
        className="rounded-2xl p-6 border transition-all duration-200 hover:shadow-md"
        style={{
          backgroundColor: "#fef9f2",
          borderColor: "#e8d5c0",
        }}
      >
        {frontmatter.series && (
          <div className="flex items-center gap-2 mb-3">
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
        <h2
          className="text-lg font-bold mb-2 group-hover:underline decoration-2 underline-offset-2"
          style={{ color: "#2c1f14", textDecorationColor: "#c4956a" }}
        >
          {frontmatter.title}
        </h2>
        <p className="text-sm mb-4 line-clamp-2" style={{ color: "#6b4a32" }}>
          {frontmatter.description}
        </p>
        <div className="flex items-center gap-3 text-xs" style={{ color: "#9c7b5e" }}>
          <span>{dateStr}</span>
          {readingTime && (
            <>
              <span>&middot;</span>
              <span>{readingTime} 읽기</span>
            </>
          )}
        </div>
      </article>
    </Link>
  );
}
