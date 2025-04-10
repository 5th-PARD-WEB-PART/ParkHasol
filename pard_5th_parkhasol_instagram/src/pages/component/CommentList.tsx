import styles from "../styles/mypage.module.css";

interface CommentListProps {
  comments: string[];
}

export default function CommentList({ comments }: CommentListProps) {
  return (
    <ul className={styles.commentList}>
      {comments.map((comment, idx) => (
        <li key={idx} className={styles.commentItem}>
          {comment}
        </li>
      ))}
    </ul>
  );
}