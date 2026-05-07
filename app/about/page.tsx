import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "이작가 소개",
  description: "비개발자 회계팀장이 Claude Code로 앱을 만드는 이작가를 소개합니다.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2" style={{ color: "#2c1f14" }}>
          이작가 소개
        </h1>
        <p style={{ color: "#6b4a32" }}>코딩을 몰라도 됩니다. 니즈가 있으면 됩니다.</p>
      </div>

      <div
        className="rounded-2xl border p-8 mb-8"
        style={{ backgroundColor: "#fef9f2", borderColor: "#e8d5c0" }}
      >
        <div className="flex items-start gap-6 mb-6">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold flex-shrink-0"
            style={{ backgroundColor: "#f5ebe0", color: "#8b5e3c" }}
          >
            이
          </div>
          <div>
            <h2 className="text-xl font-bold mb-1" style={{ color: "#2c1f14" }}>
              이작가
            </h2>
            <p className="text-sm mb-3" style={{ color: "#9c7b5e" }}>
              회계팀장 · Claude Code 사용자 · 비개발자 앱 메이커
            </p>
            <p style={{ color: "#6b4a32", lineHeight: "1.75" }}>
              코딩을 전혀 모르는 회계팀장입니다. 그런데 앱을 만들었습니다.
              Claude Code 덕분에 가능한 일이었습니다. 이 블로그는 그 과정을 기록합니다.
            </p>
          </div>
        </div>

        <div
          className="border-t pt-6"
          style={{ borderColor: "#e8d5c0" }}
        >
          <h3 className="text-sm font-semibold mb-3 uppercase tracking-wider" style={{ color: "#9c7b5e" }}>
            이런 사람입니다
          </h3>
          <ul className="space-y-2">
            {[
              "회사에서 회계팀을 이끌고 있습니다",
              "맥북을 산 날, 우연히 Claude Code를 알게 됐습니다",
              "코딩 한 줄 몰라도 앱을 만들 수 있다는 걸 직접 증명하고 있습니다",
              "이 블로그도 Claude Code가 만들었습니다",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#6b4a32" }}>
                <span style={{ color: "#c4956a" }}>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="rounded-2xl border p-8 mb-8"
        style={{ backgroundColor: "#fef9f2", borderColor: "#e8d5c0" }}
      >
        <h3 className="text-lg font-bold mb-4" style={{ color: "#2c1f14" }}>
          이 블로그에 대해
        </h3>
        <p className="mb-3" style={{ color: "#6b4a32", lineHeight: "1.75" }}>
          &ldquo;비개발자의 SaaS 개발기&rdquo;는 코딩을 전혀 모르는 제가 실제로 SaaS 서비스를 만들어가는 과정을 솔직하게 기록하는 시리즈입니다.
        </p>
        <p style={{ color: "#6b4a32", lineHeight: "1.75" }}>
          성공 스토리가 아닐 수도 있습니다. 하지만 진짜 이야기입니다. 저처럼 아이디어는 있지만 개발을 모르는 분들에게 조금이라도 도움이 됐으면 합니다.
        </p>
      </div>

      <div className="text-center">
        <Link
          href="/blog"
          className="inline-block px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
          style={{ backgroundColor: "#8b5e3c", color: "#fdf8f0" }}
        >
          글 읽으러 가기
        </Link>
      </div>
    </div>
  );
}
