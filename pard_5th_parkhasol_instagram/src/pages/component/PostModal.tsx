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
  onDelete: (postId: number) => void;
}

export default function PostModal({
  postId,
  image,
  onClose,
  liked,
  onToggleLike,
  comments,
  onAddComment,
  onDelete,
}: PostModalProps) {
  const [input, setInput] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editableComments, setEditableComments] = useState<string[]>(comments);

  const handleSubmit = () => {
    if (input.trim()) {
      onAddComment(input.trim());
      setEditableComments([...editableComments, input.trim()]);
      setInput("");
    }
  };

  const handleDelete = () => {
    onDelete(postId);
    setIsMenuOpen(false);
    onClose();
  };

  const handleEditChange = (value: string) => {
    if (editingIndex !== null) {
      const newComments = [...editableComments];
      newComments[editingIndex] = value;
      setEditableComments(newComments);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setEditingIndex(null);
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
            <img
              src="/img/Spots.png"
              alt="more"
              className={modalStyles.moreIcon}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />

            {isMenuOpen && (
              <div className={modalStyles.menuBox}>
                <button className={modalStyles.menuButton} onClick={handleDelete}>삭제</button>
                <button
                  className={modalStyles.menuButton}
                  onClick={() => {
                    setEditingIndex(0); // 첫 번째 댓글만 수정 가능하게
                    setIsMenuOpen(false);
                  }}
                >
                  수정
                </button>
                <button className={modalStyles.menuButton} onClick={() => setIsMenuOpen(false)}>취소</button>
              </div>
            )}
          </div>

          <div className={modalStyles.commentList}>
            {editableComments.map((comment, idx) => (
              <div key={idx} className={modalStyles.commentItem}>
                <img src="/img/profile.png" alt="profile" className={modalStyles.commentAvatar} />
                {editingIndex === idx ? (
                  <input
                    type="text"
                    value={comment}
                    onChange={(e) => handleEditChange(e.target.value)}
                    onKeyDown={handleKeyPress}
                  />
                ) : (
                  <div>
                    <span className={modalStyles.commentUser}>0l_ha3</span> {comment}
                  </div>
                )}
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