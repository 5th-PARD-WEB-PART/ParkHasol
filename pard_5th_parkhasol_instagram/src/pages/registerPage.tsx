import React, { useState } from "react";
import styles from "../styles/registerPage.module.css"; // 스타일을 적용

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({ email, name, username, password });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1>Instagram</h1>
        <p>친구들의 사진과 동영상을 보려면 가입하세요.</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            placeholder="휴대폰 번호 또는 이메일 주소"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="성명"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="사용자 이름"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">가입</button>
        </form>
        <div className={styles.footer}>
          <p>계정이 있으신가요? <a href="/login">로그인</a></p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;