// pages/index.tsx
import Head from 'next/head';
import '../styles/globals.css';
import Header from '../components/Header';
import About from '@/components/About';
import Footer from '@/components/Footer';
import Family from '@/components/Family';

export default function Home() {
  return (
    <>
      <Head>
        <title>박하솔의 포트폴리오</title>
        <meta name="description" content="웹파트 자기소개 페이지" />
      </Head>
      <Header />
      <div id="container">
        <section className="list" id="hero">
          <div className="hero-content">
          <img src="/images/profile.jpg" alt="프로필 이미지" className="profile-img" />
            <h1>안녕하세요,<br />박하솔입니다 🧶</h1>
            <p>전산전자공학부 23학번 / 웹파트 </p>
          </div>
        </section>
        <About />
        <Family />
        <Footer/>
      </div>
    </>
  );
}
