import { useState } from "react";
import Sidebar from "./component/sidebar";
import styles from "./styles/mypage.module.css";

export default function Profile() {
  const [posts] = useState([
    { id: 1, image: "/img/1.JPG" },
    { id: 2, image: "/img/2.JPG" },
    { id: 3, image: "/img/3.jpeg" },
    { id: 4, image: "" },
    { id: 5, image: "" },
    { id: 6, image: "" },
  ]);
  

  return (
    <div className={styles.container}>
      <Sidebar />

      <main className={styles.main}>
        <section className={styles.profileInfo}>
          <img
            src="/img/Profile.png"
            alt="profile"
            className={styles.avatar}
          />
          <div className={styles.profileText}>
            <div className={styles.userId}>0l_ha3</div>
            <button className={styles.editBtn}>프로필 편집</button>
            <div className={styles.stats}>
              <span>게시물 0</span>
              <span>팔로워 0</span>
              <span>팔로우 0</span>
            </div>
          </div>
        </section>

        <section className={styles.grid}>
          {posts.map((post) => (
            <div key={post.id} className={styles.postBox}>
              {post.image ? (
                <img src={post.image} alt="post" className={styles.postImg} />
              ) : (
                <div className={styles.placeholder}></div>
              )}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
