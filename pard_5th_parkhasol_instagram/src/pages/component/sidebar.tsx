import Link from 'next/link'
import styles from '../styles/sidebar.module.css'

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  return (
    <aside className={`${styles.sidebar} ${className}`}>
      <img src="/img/Company logo.png" className={styles.logo} alt="Instagram Logo"/>
      <ul className={styles.menu}>
        <li><img src="/img/Home.png" className={styles.icon} alt="홈" /> 홈</li>
        <li><img src="/img/Search.png" className={styles.icon} alt="검색" /> 검색</li>
        <li><img src="/img/Reels.png" className={styles.icon} alt="릴스" /> 릴스</li>
        <li><img src="/img/Share.png" className={styles.icon} alt="메시지" /> 메시지</li>
        <li><img src="/img/Like.png" className={styles.icon} alt="알림" /> 알림</li>
        <li><img src="/img/More.png" className={styles.icon} alt="만들기" /> 만들기</li>
        <li>
          <Link href="/mypage" className={styles.link}>
            <img src="/img/Profile.png" className={styles.icon} alt="프로필" /> 프로필
          </Link>
        </li>
      </ul>

    </aside>
  )
}
