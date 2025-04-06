import Sidebar from './component/sidebar';
import styles from './styles/mypage.module.css';
import styles1 from './styles/sidebar.module.css';

export default function MyPage() {
  return (
    <div className={styles.pageWrapper}>
      <Sidebar className={styles1.sidebar} />
      <main className={styles.main}>
        <section className={styles.profileSection}>
          <img src="/img/Profile.png" className={styles.avatar} />
          <div className={styles.profileInfo}>
            <h2><span className={styles.name}>0l_ha3</span><button>프로필 편집</button></h2>
            <span className={styles.profileStat}>게시물 3 </span>
            <span className={styles.profileStat}>팔로워 0 </span>
            <span className={styles.profileStat}>팔로우 0 </span>
          </div>
        </section>

        <hr className={styles.divider} />

        <section className={styles.gridSection}>
          <div className={styles.grid}>
            <div className={styles.post}>
              <img src="/img/1.JPG" alt="Post 1" />
            </div>
            <div className={styles.post}>
              <img src="/img/2.JPG" alt="Post 2" />
            </div>
            <div className={styles.post}>
              <img src="/img/3.jpeg" alt="Post 3" />
            </div>
            <div className={styles.post}></div>
            <div className={styles.post}></div>
            <div className={styles.post}></div>
          </div>
        </section>
      </main>
    </div>
  );
}