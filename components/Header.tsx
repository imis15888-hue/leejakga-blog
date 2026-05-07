"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "홈" },
  { href: "/blog", label: "블로그" },
  { href: "/about", label: "이작가" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b" style={{ backgroundColor: "#fdf8f0", borderColor: "#e8d5c0" }}>
      <div className="max-w-3xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
          style={{ color: "#2c1f14" }}
        >
          이작가
        </Link>
        <nav className="flex items-center gap-1">
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                style={{
                  color: isActive ? "#8b5e3c" : "#6b4a32",
                  backgroundColor: isActive ? "#f5ebe0" : "transparent",
                }}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
