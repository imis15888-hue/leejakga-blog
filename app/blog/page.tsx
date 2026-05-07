import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "블로그",
  description: "이작가가 쓴 모든 글을 모았습니다.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-5 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2" style={{ color: "#2c1f14" }}>
          블로그
        </h1>
        <p style={{ color: "#6b4a32" }}>
          코딩을 모르는 회계팀장의 앱 개발 여정을 기록합니다.
        </p>
      </div>

      {posts.length === 0 ? (
        <div
          className="text-center py-20 rounded-2xl border"
          style={{ borderColor: "#e8d5c0", color: "#9c7b5e" }}
        >
          <p className="text-lg font-medium mb-2">아직 글이 없습니다.</p>
          <p className="text-sm">곧 첫 번째 글을 만나보실 수 있습니다!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
