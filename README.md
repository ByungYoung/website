# 🌟 모던 비즈니스 웹사이트

React 19와 Next.js 15를 기반으로 구축된 현대적이고 반응형 비즈니스 웹사이트입니다. 다국어 지원과 아름다운 UI 컴포넌트를 제공합니다.

## ✨ 주요 기능

- 🌐 **다국어 지원** - 한국어/영어 전환 가능
- 🎨 **모던 UI/UX** - shadcn/ui 컴포넌트 기반의 세련된 디자인
- 📱 **완전 반응형** - 모든 디바이스에서 최적화된 경험
- ⚡ **고성능** - Next.js 15와 Turbopack으로 빠른 개발 및 빌드
- 🛡️ **타입 안전성** - TypeScript로 견고한 코드 작성
- 🎭 **애니메이션** - 부드러운 인터랙션과 시각적 효과

## 🚀 기술 스택

- **프레임워크**: Next.js 15 (App Router)
- **언어**: TypeScript
- **UI 라이브러리**: React 19
- **컴포넌트**: shadcn/ui + Radix UI
- **스타일링**: Tailwind CSS
- **아이콘**: Lucide React
- **패키지 매니저**: pnpm
- **코드 품질**: ESLint + Prettier

## 📋 시스템 요구사항

- Node.js 20.11.0 이상
- pnpm 9.0.0 이상

## 🛠️ 설치 및 실행

### 1. 저장소 클론

```bash
git clone <repository-url>
cd website
```

### 2. 의존성 설치

```bash
pnpm install
```

### 3. 개발 서버 실행

```bash
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 📝 사용 가능한 스크립트

| 명령어 | 설명 |
|--------|------|
| `pnpm dev` | 개발 서버 실행 (Turbopack 사용) |
| `pnpm build` | 프로덕션 빌드 생성 |
| `pnpm start` | 프로덕션 서버 실행 |
| `pnpm lint` | ESLint 검사 실행 |
| `pnpm lint:fix` | ESLint 자동 수정 |
| `pnpm format` | Prettier로 코드 포맷팅 |
| `pnpm format:check` | Prettier 포맷팅 검사 |
| `pnpm type-check` | TypeScript 타입 검사 |

## 📁 프로젝트 구조

```text
src/
├── app/                    # Next.js App Router
│   ├── favicon.ico        # 파비콘
│   ├── globals.css        # 전역 스타일
│   ├── layout.tsx         # 루트 레이아웃
│   └── page.tsx           # 홈페이지
├── components/             # React 컴포넌트
│   ├── ui/                # shadcn/ui 컴포넌트
│   │   ├── button.tsx     # 버튼 컴포넌트
│   │   ├── card.tsx       # 카드 컴포넌트
│   │   └── dropdown-menu.tsx # 드롭다운 메뉴
│   ├── AboutSection.tsx   # 소개 섹션
│   ├── ContactSection.tsx # 연락처 섹션
│   ├── Footer.tsx         # 푸터
│   ├── HeroSection.tsx    # 히어로 섹션
│   ├── Navigation.tsx     # 네비게이션
│   └── ServicesSection.tsx # 서비스 섹션
├── contexts/              # React Context
│   └── LanguageContext.tsx # 다국어 컨텍스트
└── lib/                   # 유틸리티
    └── utils.ts           # 공통 유틸리티 함수
```

## 🌐 다국어 지원

이 프로젝트는 한국어와 영어를 지원합니다. 언어 전환은 네비게이션 메뉴에서 가능합니다.

### 새로운 번역 추가

`src/contexts/LanguageContext.tsx` 파일의 `translations` 객체에 새로운 키-값을 추가하세요:

```typescript
const translations = {
  ko: {
    'new.key': '한국어 번역',
    // ...
  },
  en: {
    'new.key': 'English Translation',
    // ...
  }
};
```

## 🎨 UI 컴포넌트 추가

새로운 shadcn/ui 컴포넌트를 추가하려면:

```bash
npx shadcn@latest add [component-name]
```

사용 가능한 컴포넌트 예시:

```bash
npx shadcn@latest add dialog
npx shadcn@latest add input
npx shadcn@latest add form
npx shadcn@latest add tooltip
```

## 🔧 커스터마이징

### 테마 색상 변경

`tailwind.config.ts` 파일에서 색상을 커스터마이징할 수 있습니다:

```typescript
module.exports = {
  theme: {
    extend: {
      colors: {
        // 커스텀 색상 추가
      }
    }
  }
}
```

### 컴포넌트 스타일링

각 컴포넌트는 Tailwind CSS 클래스를 사용하여 스타일링되어 있습니다. 필요에 따라 클래스를 수정하여 디자인을 변경할 수 있습니다.

## 🚀 배포

### Vercel (권장)

이 프로젝트는 Vercel에 최적화되어 있습니다:

1. **GitHub 저장소 연결**
   ```bash
   # Vercel CLI 설치 (선택사항)
   npm i -g vercel
   ```

2. **자동 배포**
   - GitHub에 푸시하면 자동으로 배포됩니다
   - `main` 브랜치는 프로덕션 환경에 배포
   - 다른 브랜치는 미리보기 환경에 배포

3. **수동 배포 (CLI 사용시)**
   ```bash
   vercel
   ```

### 기타 플랫폼

다른 호스팅 플랫폼 사용시:

```bash
pnpm build
pnpm start
```

### 배포 설정

프로젝트에는 `vercel.json` 파일이 포함되어 있어 Vercel에서 올바르게 빌드됩니다:

- **프레임워크**: Next.js 자동 감지
- **빌드 명령어**: `pnpm build`
- **출력 디렉토리**: `.next`
- **설치 명령어**: `pnpm install`

### 배포 문제 해결

**Vercel에서 "public 디렉토리를 찾을 수 없음" 오류 발생시:**
- `vercel.json` 파일이 프로젝트 루트에 있는지 확인
- Next.js 프로젝트는 `.next` 디렉토리가 출력 디렉토리임

**ESLint 관련 오류 발생시:**
- 필요한 ESLint 패키지가 설치되어 있는지 확인:
  ```bash
  pnpm add -D @eslint/eslintrc
  ```

**빌드 오류 발생시:**
- Node.js 버전이 20.11.0 이상인지 확인
- 로컬에서 빌드 테스트: `pnpm build`

## 📚 참고 자료

- [Next.js 문서](https://nextjs.org/docs)
- [shadcn/ui 문서](https://ui.shadcn.com)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [Radix UI 문서](https://www.radix-ui.com/docs)
- [Lucide 아이콘](https://lucide.dev)

## 🤝 기여하기

1. 이 저장소를 포크하세요
2. 기능 브랜치를 생성하세요 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋하세요 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시하세요 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성하세요

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.
