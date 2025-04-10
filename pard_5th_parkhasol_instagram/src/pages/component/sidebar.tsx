import Link from 'next/link';
import styles from '../styles/sidebar.module.css';

const menuItems = [
  { label: '홈', icon: 'Home', path: '#' },
  { label: '검색', icon: 'Search', path: '#' },
  { label: '릴스', icon: 'Reels', path: '#' },
  { label: '메시지', icon: 'Share', path: '#' },
  { label: '알림', icon: 'Like', path: '#' },
  { label: '만들기', icon: 'More', path: '#' },
  { label: '프로필', icon: 'Profile', path: '/mypage' },
];

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img src="/img/Vector.png" className={styles.logo} alt="Instagram Logo" />
      
      <ul className={styles.menu}>
        {menuItems.map((item) => (
          <li key={item.label}>
            <Link href={item.path} className={styles.link}>
              <img
                src={`/img/${item.icon}.png`}
                className={styles.icon}
                alt={item.label}
              />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* 더 보기 버튼 (사이드바 하단) */}
      <div className={styles.more}>
        <img src="/img/More.png" className={styles.icon} alt="더 보기" />
        더 보기
      </div>
    </aside>
  );
}
