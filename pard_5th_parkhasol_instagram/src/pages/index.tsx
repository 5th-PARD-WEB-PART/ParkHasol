import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useUserStore } from '../store/useStore'
import styles from '../pages/styles/registerPage.module.css';

const RegisterPage: React.FC = () => {
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);

  // ✅ 입력값 상태 관리
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    setUser({ phone, name, nickname, password });
    router.push('/mypage');
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        {/* 카드 영역 */}
        <div className={styles.card}>
          {/* 로고 이미지 */}
          <div className={styles.logoContainer}>
            <img src="/img/Company logo.png" className={styles.logo} alt="Instagram" />
          </div>

          {/* 설명 텍스트 */}
          <p className={styles.subtitle}>
            친구들의 사진과 동영상을 보려면 가입하세요.
          </p>

          {/* 회원가입 폼 */}
          <form>
            <input
              type="text"
              placeholder="휴대폰 번호 또는 이메일 주소"
              className={styles.input}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            /><br />
            <input
              type="text"
              placeholder="성명"
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
            /><br />
            <input
              type="text"
              placeholder="사용자 이름"
              className={styles.input}
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            /><br />
            <input
              type="password"
              placeholder="비밀번호"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* 추가 설명 */}
            <p className={styles.caption}>
              저희 서비스를 이용하는 사람이 회원님의 연락처 정보를<br /> Instagram에 업로드했을 수도 있습니다.{' '}
              <span className={styles.wantLink}>더 알아보기</span>
            </p>

            {/* 가입 버튼 */}
            <button
              type="button"
              className={styles.button}
              onClick={handleRegister}
            >
              가입
            </button>
          </form>
        </div>

        {/* 로그인 링크 박스 */}
        <div className={styles.footer}>
          <p className={styles.loginText}>
            계정이 있으신가요?{' '}
            <Link href="/mypage" className={styles.loginLink}>로그인</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
