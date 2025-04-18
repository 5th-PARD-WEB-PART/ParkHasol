// src/pages/mypage.tsx
import { useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "../pages/component/sidebar";
import PostModal from "../pages/component/PostModal";
import { useUserStore } from "../store/useStore";
import styles from "../pages/styles/mypage.module.css";

export default function Profile() {
  const router = useRouter();
  const nickname = useUserStore((state) => state.nickname);
  const [sidebarWidth, setSidebarWidth] = useState(250);

  const [posts] = useState([
    { id: 1, image: "/img/1.JPG" },
    { id: 2, image: "/img/2.JPG" },
    { id: 3, image: "/img/3.jpeg" },
    { id: 4, image: "" },
    { id: 5, image: "" },
    { id: 6, image: "" },
  ]);

  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const [likes, setLikes] = useState<{ [id: number]: boolean }>({});
  const [comments, setComments] = useState<{ [id: number]: string[] }>({});

  const handleToggleLike = (postId: number) => {
    setLikes((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  const handleAddComment = (postId: number, comment: string) => {
    setComments((prev) => ({
      ...prev,
      [postId]: [...(prev[postId] || []), comment],
    }));
  };

  const selectedPost = posts.find((p) => p.id === selectedPostId);

  return (
    <div className={styles.pageWrapper}>
      <Sidebar onWidthChange={setSidebarWidth} />
      <main className={styles.main}>
        {/* 프로필 정보 */}
        <section className={styles.profileInfo}>
          <img src="/img/Profile.png" alt="profile" className={styles.avatar} />
          <div className={styles.profileText}>
            <div className={styles.userInfoTop}>
              <div className={styles.userId}>{nickname}</div>
              <button
                className={styles.editBtn}
                onClick={() => router.push("/edit")}
              >
                프로필 편집
              </button>
            </div>
            <div className={styles.stats}>
              <span>게시물 {posts.length}</span>
              <span>팔로워 0</span>
              <span>팔로우 0</span>
            </div>
          </div>
        </section>

        {/* 게시물 그리드 */}
        <section className={styles.grid}>
          {posts.map((post) => (
            <div
              key={post.id}
              className={styles.postBox}
              onClick={() => setSelectedPostId(post.id)}
            >
              {post.image ? (
                <img src={post.image} alt="post" className={styles.postImg} />
              ) : (
                <div className={styles.placeholder}></div>
              )}
            </div>
          ))}
        </section>
      </main>

      {/* 게시물 모달 */}
      {selectedPost && (
        <PostModal
          postId={selectedPost.id}
          image={selectedPost.image}
          onClose={() => setSelectedPostId(null)}
          liked={!!likes[selectedPost.id]}
          onToggleLike={() => handleToggleLike(selectedPost.id)}
          comments={comments[selectedPost.id] || []}
          onAddComment={(comment) =>
            handleAddComment(selectedPost.id!, comment)
          }
          onDelete={() => setSelectedPostId(null)}
        />
      )}
    </div>
  );
}
