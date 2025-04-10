import styles from "../styles/mypage.module.css";

interface LikeButtonProps {
  liked: boolean;
  onToggle: () => void;
}

export default function LikeButton({ liked, onToggle }: LikeButtonProps) {
  return (
    <button onClick={onToggle} className={styles.likeButton}>
      {liked ? "❤️" : "🤍"}
    </button>
  );
}