import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 5);

  const seriesItems = [
    {
      episode: 1,
      title: "맥북이 배송 온 날, 나는 앱 개발자가 됐다",
      slug: "01-macbook-delivery-day",
      status: "published" as const,
    },
    {
      episode: 2,
      title: "(준비 중)",
      slug: null,
      status: "upcoming" as const,
    },
    {
      episode: 3,
      title: "(준비 중)",
      slug: null,
      status: "upcoming" as const,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-5 py-12">
      {/* 히어로 섹션 */}
      <section className="text-center py-14 mb-16">
        <div
          className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full mb-6"
          style={{ backgroundColor: "#f5ebe0", color: "#8b5e3c" }}
        >
          Claude Code로 만든 블로그
        </div>
        <h1
          className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
          style={{ color: "#2c1f14" }}
        >
          코딩을 몰라도 됩니다
        </h1>
        <p
          className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-8"
          style={{ color: "#6b4a32" }}
        >
          비개발자 회계팀장이 Claude Code로 앱을 만든 이야기
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/blog"
            className="px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
            style={{ backgroundColor: "#8b5e3c", color: "#fdf8f0" }}
          >
            글 읽기
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 rounded-xl font-semibold text-sm border transition-all"
            style={{ borderColor: "#c4956a", color: "#8b5e3c" }}
          >
            이작가 소개
          </Link>
        </div>
      </section>

      {/* 시리즈 섹션 */}
      <section className="mb-16">
        <div className="mb-6">
          <p
            className="text-xs font-semibold uppercase tracking-wider mb-1"
            style={{ color: "#9c7b5e" }}
          >
            연재 시리즈
          </p>
          <h2 className="text-xl font-bold" style={{ color: "#2c1f14" }}>
            나는 코딩을 모르는데 앱을 만들었다
          </h2>
        </div>
        <div className="space-y-3">
          {seriesItems.map((item) => (
            <div key={item.episode}>
              {item.status === "published" && item.slug ? (
                <Link href={`/blog/${item.slug}`} className="block group">
                  <div
                    className="flex items-center gap-4 p-4 rounded-xl border transition-all hover:shadow-sm"
                    style={{ backgroundColor: "#fef9f2", borderColor: "#e8d5c0" }}
                  >
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{ backgroundColor: "#8b5e3c", color: "#fdf8f0" }}
                    >
                      {item.episode}
                    </span>
                    <span
                      className="font-medium group-hover:underline underline-offset-2"
                      style={{ color: "#2c1f14", textDecorationColor: "#c4956a" }}
                    >
                      {item.title}
                    </span>
                  </div>
                </Link>
              ) : (
                <div
                  className="flex items-center gap-4 p-4 rounded-xl border"
                  style={{
                    backgroundColor: "#faf5ef",
                    borderColor: "#ede0d0",
                    opacity: 0.6,
                  }}
                >
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: "#c4956a", color: "#fdf8f0" }}
                  >
                    {item.episode}
                  </span>
                  <span className="font-medium" style={{ color: "#9c7b5e" }}>
                    {item.title}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 최근 글 */}
      {recentPosts.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold" style={{ color: "#2c1f14" }}>
              최근 글
            </h2>
            <Link
              href="/blog"
              className="text-sm font-medium hover:underline underline-offset-2"
              style={{ color: "#8b5e3c", textDecorationColor: "#c4956a" }}
            >
              전체 보기
            </Link>
          </div>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
