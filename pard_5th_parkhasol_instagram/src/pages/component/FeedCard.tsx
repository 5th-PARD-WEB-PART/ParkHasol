import styles from "../styles/mypage.module.css";

interface FeedCardProps {
  image: string;
  onClick: () => void;
}

export default function FeedCard({ image, onClick }: FeedCardProps) {
  return (
    <div className={styles.postBox} onClick={onClick}>
      {image ? (
        <img src={image} alt="post" className={styles.postImg} />
      ) : (
        <div className={styles.placeholder}></div>
      )}
    </div>
  );
}