// pages/index.tsx
import Head from 'next/head';
import '../styles/globals.css';
import Header from '../components/Header';
import About from '@/components/About';
import Footer from '@/components/Footer';
import Family from '@/components/Family';

// 유니언 타입 
type Section = 'about' | 'family' | 'footer';
const sections: Section[] = ['about', 'family', 'footer'];

// 제네릭 함수
function Array<T>(value: T): T[] {
  return [value];
}

// 함수 선언식
function getMajor(major: string): string {
  return `${major}`;
}

// 화살표 함수 사용
const getGreeting = (name: string): string => {
  return `안녕하세요, ${name}입니다!`;
};

// 타입 선언(4가지 이상)
const myName: string = '박하솔';
const myAge: number = 20;
const isStudent: boolean = true;
const favoriteColors: string[] = ['노란색', '초록색', '보라색'];
const profileInfo: [string, number] = ['박하솔', 22];
const anything: any = '모든 타입 가능';
const maybeValue: null = null;
const notDefined: undefined = undefined;
const unsure: unknown = '아직 몰라요';

// 인터페이스 + 상속 + 유틸리티 타입
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  major: string;
  email: string;
}

const dev: Partial<Developer> = {
  name: '하솔',
  email: 'hasol1229@handong.ac.kr'
};

export default function Home() {
  const userName = myName;

  return (
    <>
      <Head>
        <title>{userName}의 포트폴리오</title>
        <meta name="description" content="웹 파트 자기소개 페이지" />
      </Head>
      <Header />
      <div id="container">
        <section className="list" id="hero">
          <div className="hero-content">
            <img src="/images/profile.jpg" alt="프로필 이미지" className="profile-img" />
            <h1>{getGreeting(userName)} 🧶</h1>
            <p>{getMajor('전산전자공학부')} / 웹파트 </p>
          </div>
        </section>
        <About />
        <Family />
        <Footer />
      </div>
    </>
  );
}
