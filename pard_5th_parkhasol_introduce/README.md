파드 5기 웹 과제 1&2_박하솔 자기소개 페이지

Home,About,Loves,Contact로 나누어 페이지를 구성했습니다.
Home에는 간단한 자기소개와 작은 제 사진을 넣었고, About me에는 취미와 좋아하는 성경 구절 말씀, 고양이 사진을 넣었습니다. About 페이지에서는 hover 하면 이미지 크기가 커지도록 css를 구현해보았습니다. Loves에는 제가 사랑하는 사람들의 사진을 넣었고, 마지막으로 contact에는 제가 하고 있는 모든 sns 활동들을 링크로 넣었습니다.

📘 TypeScript 조건 사용 설명 (README)
1. 타입 선언 
- 4가지 이상 사용
string - myName,getMajor 등 이름과 전공 부분에서 사용
number - myAge로 나이를 추가로 표현하여 사용
string[] - favoriteColors로 좋아하는 색깔 추가
- 배열 사용 !
favoriteColors[],Hobby[],Cat[]에서 사용함

2. 객체 선언
- 인터페이스 상속 사용해보기
Person, Developer, Hobby, Cat, FamilyGroup에서 interface를 사용했고, Developer extends Person로 상속을 사용함
- 타입 별칭 사용해보기(인터섹션/ 유니언/ 제네릭/ 유틸리티/ 맵드)
`type Section = 'about' 으로 유니언 타입 별칭을 사용함

3. 함수 사용
-1가지 이상 (함수 선언식, 함수 표현식)
function getMajor(major: string): string {
  return `${major}`;
}
-화살표 함수 사용하기
const getGreeting = (name: string): string => {
  return `안녕하세요, ${myAge}살 ${name}입니다!`;
};

4. TS 문법
- 제네릭 문법 사용 (타입을 미리 정의하지 않고 사용하는 시점에 원하는 타입 정의해서 쓸 수 있는 문법) 
function Array<T>(value: T): T[] {
  return [value];
}
- 유틸리티 타입 1개 이상 사용하기 
Pick 사용
type DevContact = Pick<Developer, 'name' | 'email'>;

const dev: DevContact = {
  name: '하솔',
  email: 'hasol1229@handong.ac.kr'
};

유틸리티 타입 중 하나로, 모든 속성을 optional로 바꿔주는 기능. 예: Partial<{ name: string }> → { name?: string }


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

