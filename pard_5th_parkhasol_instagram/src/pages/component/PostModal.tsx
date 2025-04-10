import { useEffect, useState } from "react";
import styles from "../styles/mypage.module.css";
import LikeButton from "./LikeButton";
import CommentList from "./CommentList";

interface PostModalProps {
  postId: number;
  image: string;
  onClose: () => void;
  liked: boolean;
  onToggleLike: () => void;
  comments: string[];
  onAddComment: (comment: string) => void;
}

export default function PostModal({
  postId,
  image,
  onClose,
  liked,
  onToggleLike,
  comments,
  onAddComment,
}: PostModalProps) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim()) {
      onAddComment(input.trim());
      setInput("");
    }
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.modalClose}>
          ✕
        </button>
        <img src={image} alt="post detail" className={styles.modalImage} />
        <LikeButton liked={liked} onToggle={onToggleLike} />

        <div className={styles.commentSection}>
          <CommentList comments={comments} />
          <div className={styles.commentForm}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="댓글 달기..."
            />
            <button onClick={handleSubmit}>게시</button>
          </div>
        </div>
      </div>
    </div>
  );
}
