// src/pages/mypage.tsx
import { useState } from 'react';
import Sidebar from '../pages/component/sidebar';
import styles from '../styles/mypage.module.css';

export default function MyPage() {
  const [sidebarWidth, setSidebarWidth] = useState(250); // 기본 desktop

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar onWidthChange={setSidebarWidth} />
      <div
        className={styles.content}
        style={{
          marginLeft: sidebarWidth,
          width: `calc(100% - ${sidebarWidth}px)`,
          paddingTop: '109px',
        }}
      >
        {/* 👤 프로필, 게시물 등 MyPage 내용 */}
      </div>
    </div>
  );
}
