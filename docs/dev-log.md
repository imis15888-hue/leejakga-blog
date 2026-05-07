# 개발 로그

## 2026-05-07 이작가 블로그 초기 구축

### 구현 내용

비개발자(회계팀장)가 Claude Code로 SaaS를 만드는 과정을 기록하는 블로그 웹사이트를 Next.js 16 + Tailwind CSS v4 기반으로 구축했다.

- Next.js 16.2.5 (App Router, Turbopack) 기반 정적 블로그
- Tailwind CSS v4 (@tailwindcss/postcss 방식, `@import "tailwindcss"` 문법 사용)
- MDX 콘텐츠: `next-mdx-remote/rsc` 의 `MDXRemote`로 서버 컴포넌트에서 렌더링
- `gray-matter`로 frontmatter 파싱, `reading-time`으로 읽기 시간 계산
- 색상 팔레트: 배경 #fdf8f0(따뜻한 크림), 강조 #8b5e3c(브라운), 텍스트 #2c1f14
- 한국어 폰트: `next/font/google`로 Noto Sans KR 자체 호스팅 적용
- TypeScript strict 모드, 모든 컴포넌트 단일 책임 원칙 준수
- `npm run build` 성공, 7개 페이지 정적 생성 완료

### 생성/수정 파일 목록

| 경로 | 설명 |
|------|------|
| `app/layout.tsx` | 루트 레이아웃, Noto Sans KR 폰트 추가 |
| `app/globals.css` | Tailwind v4 테마 + 따뜻한 색상 팔레트 + prose-warm 커스텀 클래스 |
| `app/page.tsx` | 홈 페이지 (히어로, 시리즈 목록, 최근 글) |
| `app/blog/page.tsx` | 블로그 목록 페이지 |
| `app/blog/[slug]/page.tsx` | 블로그 상세 페이지 (MDX 렌더링) |
| `app/about/page.tsx` | 이작가 소개 페이지 (신규 생성) |
| `components/Header.tsx` | 스티키 헤더, 활성 경로 하이라이트 |
| `components/Footer.tsx` | 푸터 |
| `components/PostCard.tsx` | 글 카드 컴포넌트 |
| `lib/posts.ts` | MDX 파일 읽기/파싱 유틸리티, flatMap 타입 오류 수정 |
| `types/blog.ts` | PostFrontmatter, Post, PostMeta 타입 정의 |
| `content/blog/01-macbook-delivery-day.mdx` | 1편 샘플 글 (실제 읽기 경로) |
| `content/posts/01-macbook-delivery-day.mdx` | 1편 샘플 글 (요청 스펙 경로) |
| `docs/dev-log.md` | 개발 로그 (본 파일) |

### 주요 결정 사항

1. **Tailwind v4 방식 준수**: `tailwind.config.js` 대신 `@theme inline` 블록을 `globals.css`에 작성. `@import "tailwindcss"` 문법 사용.
2. **next-mdx-remote/rsc 사용**: Next.js 16 서버 컴포넌트 환경에서는 `next-mdx-remote/rsc`의 `MDXRemote`를 사용해야 함. 클라이언트 컴포넌트 방식 미사용.
3. **폰트 자체 호스팅**: `next/font/google`이 빌드 시 폰트를 자체 호스팅하므로 외부 네트워크 요청 없이 개인정보 보호 및 성능 최적화.
4. **content/blog 경로**: `lib/posts.ts`는 `content/blog/` 디렉토리를 읽도록 설정되어 있음. 요청 스펙의 `content/posts/` 경로에도 파일을 병행 생성.
5. **TypeScript flatMap 패턴**: `map().filter(p => p !== null)` 체인이 strict 모드에서 타입 오류를 유발. `flatMap`으로 교체하여 해결.

### 다음 작업 항목

- 1편 본문 작성 (`content/blog/01-macbook-delivery-day.mdx` 내용 채우기)
- 2편, 3편 시리즈 글 작성
- OG 이미지 설정 (`app/opengraph-image.tsx`)
- Vercel 배포 및 도메인 연결
- 시리즈 목록 페이지 (`/series`) 추가 검토
