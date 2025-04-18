import { useState } from "react";
import { useRouter } from "next/router";
import { useUserStore } from "../store/useStore";
import Sidebar from "./component/sidebar";
import styles from "./styles/editPage.module.css";

export default function EditPage() {
  const router = useRouter();
  const nickname = useUserStore((state) => state.nickname);
  const setUser = useUserStore((state) => state.setUser);
  const [newNickname, setNewNickname] = useState(nickname);

  const handleSubmit = () => {
    setUser({ nickname: newNickname });
    alert("수정이 완료되었습니다!");
    router.push("/mypage");
  };

  return (
    <div className={styles.editContainer}>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.contentInner}>
          <div className={styles.title}>프로필 편집</div>
          <div className={styles.subtitle}>
            수정할 닉네임을 입력후 제출해주세요.
          </div>

          <div className={styles.editCard}>
            <div className={styles.inputRow}>
              <img
                src="/img/Profile.png"
                alt="profile"
                className={styles.avatar}
              />
              <input
                type="text"
                value={newNickname}
                onChange={(e) => setNewNickname(e.target.value)}
                className={styles.input}
              />
            </div>

            <button className={styles.button} onClick={handleSubmit}>
              제출
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
