// src/component/Sidebar.tsx
import { useEffect, useState } from 'react';
import styles from '../styles/sidebar.module.css';
import Link from 'next/link';

const menuItems = [
  { label: '홈', icon: 'Home', path: '#' },
  { label: '검색', icon: 'Search', path: '#' },
  { label: '릴스', icon: 'Reels', path: '#' },
  { label: '메시지', icon: 'Share', path: '#' },
  { label: '알림', icon: 'Like', path: '#' },
  { label: '만들기', icon: 'More', path: '#' },
  { label: '프로필', icon: 'Profile', path: '/mypage' },
];

export default function Sidebar({ onWidthChange }: { onWidthChange: (w: number) => void }) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      const w = window.innerWidth;
      setWindowWidth(w);
      if (w <= 639) onWidthChange(0);
      else if (w <= 1023) onWidthChange(72);
      else onWidthChange(250);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [onWidthChange]);

  if (windowWidth <= 639) return <BottomNav />;
  if (windowWidth <= 1023) return <SidebarTablet />;
  return <SidebarFull />;
}

function SidebarFull() {
  return (
    <aside className={styles.sidebar}>
      <img src="/img/Vector.png" className={styles.logo} alt="Instagram Logo" />
      <ul className={styles.menu}>
        {menuItems.map((item) => (
          <li key={item.label}>
            <Link href={item.path} className={styles.link}>
              <img src={`/img/${item.icon}.png`} className={styles.icon} alt={item.label} />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.more}>
        <img src="/img/More.png" className={styles.icon} alt="더 보기" />
        더 보기
      </div>
    </aside>
  );
}

function SidebarTablet() {
  return (
    <aside className={styles.sidebarTablet}>
      <ul className={styles.menu}>
        {menuItems.map((item) => (
          <li key={item.label}>
            <Link href={item.path} className={styles.iconLink} title={item.label}>
              <img src={`/img/${item.icon}.png`} className={styles.icon} alt={item.label} />
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.more}>
        <img src="/img/More.png" className={styles.icon} alt="더 보기" />
      </div>
    </aside>
  );
}

function BottomNav() {
  return (
    <nav className={styles.bottomNav}>
      {menuItems.map((item) => (
        <Link key={item.label} href={item.path} className={styles.navIcon} title={item.label}>
          <img src={`/img/${item.icon}.png`} className={styles.icon} alt={item.label} />
        </Link>
      ))}
    </nav>
  );
}
