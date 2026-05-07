export default function Footer() {
  return (
    <footer className="mt-24 border-t py-10" style={{ borderColor: "#e8d5c0" }}>
      <div className="max-w-3xl mx-auto px-5 text-center">
        <p className="text-sm mb-1" style={{ color: "#9c7b5e" }}>
          이 블로그는 Claude Code로 만들었습니다.
        </p>
        <p className="text-xs" style={{ color: "#b89a7a" }}>
          &copy; 2026 이작가. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
