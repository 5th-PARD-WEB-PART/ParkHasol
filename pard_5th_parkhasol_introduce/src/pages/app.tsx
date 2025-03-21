// pages/_app.tsx
import '../styles/globals.css'; // 전역 CSS 불러오기
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
