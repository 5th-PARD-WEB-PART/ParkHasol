import { useEffect, useState } from "react";
import modalStyles from "../styles/postmodal.module.css";

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
    <div className={modalStyles.modalOverlay}>
      <div className={modalStyles.modalContent}>
        <button onClick={onClose} className={modalStyles.modalClose}>✕</button>

        <img src={image} alt="post detail" className={modalStyles.modalImage} />

        <div className={modalStyles.commentSection}>
          <div className={modalStyles.userHeader}>
            <img src="/img/profile.png" alt="profile" className={modalStyles.userAvatar} />
            <span className={modalStyles.userId}>0l_ha3</span>
            <img src="/img/Spots.png" alt="more" className={modalStyles.moreIcon} />
          </div>

          <div className={modalStyles.commentList}>
            {comments.map((comment, idx) => (
              <div key={idx} className={modalStyles.commentItem}>
                <img src="/img/profile.png" alt="profile" className={modalStyles.commentAvatar} />
                <div>
                  <span className={modalStyles.commentUser}>0l_ha3</span> {comment}
                </div>
              </div>
            ))}
          </div>

          <div className={modalStyles.iconRow}>
            <img src="/img/FilledLike.png" alt="like" />
            <img src="/img/Comment.png" alt="comment" />
            <img src="/img/Share.png" alt="share" />
            <img src="/img/Save.png" alt="save" style={{ marginLeft: "auto" }} />
          </div>

          <div className={modalStyles.commentForm}>
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
