import { useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "./component/sidebar";
import FeedCard from "./component/FeedCard";
import PostModal from "./component/PostModal";
import { useUserStore } from "../store/useStore";
import styles from "./styles/mypage.module.css";

export default function Profile() {
  const router = useRouter();
  const nickname = useUserStore((state) => state.nickname); // ✅ 닉네임 가져오기

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
            <div className={styles.userInfoTop}>
              <div className={styles.userId}>{nickname}</div> {/* ✅ 닉네임 반영 */}
              <button
                className={styles.editBtn}
                onClick={() => router.push("/edit")} // ✅ 페이지 이동
              >
                프로필 편집
              </button>
            </div>

            <div className={styles.stats}>
              <span>게시물 3</span>
              <span>팔로워 0</span>
              <span>팔로우 0</span>
            </div>
          </div>
        </section>

        <section className={styles.grid}>
          {posts.map((post) => (
            <FeedCard
              key={post.id}
              image={post.image}
              onClick={() => setSelectedPostId(post.id)}
            />
          ))}
        </section>
      </main>

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
          onDelete={() => {
            setSelectedPostId(null);
          }}
        />
      )}
    </div>
  );
}
