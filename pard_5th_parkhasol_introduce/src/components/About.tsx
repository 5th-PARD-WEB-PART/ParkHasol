// components/About.tsx
import React from 'react';

export default function About() {
  return (
    <section className="list" id="about">
      <div className="about-content">
        <h2>ABOUT ME</h2>
        <div className="about-columns">
          {/* 왼쪽: 취미 */}
          <div className="about-box">
            <h3>🎨 취미 🎨</h3>
            <p>
            ☁️ 뜨개질과 피아노 ☁️
            </p>
            <div className="hobby-images">
            <img src="/images/knitting.jpeg" alt="뜨개질" className="hobby-img" />
            <img src="/images/piano.jpeg" alt="피아노" className="hobby-img" />
            </div>
          </div>

          {/* 가운데: 성경 구절 */}
          <div className="about-box">
            <h3>📖</h3>
            <p>
              “너희가 세상에서는 환난을 당하나 <br /> 담대하라
내가 세상을 이기었노라”<br />

              <i>- 요한복음 16장 33절</i>
            </p>
          </div>

          {/* 오른쪽: 고양이 */}
          <div className="about-box">
            <h3>🐱 레미 & 레고 🐱</h3>
          <div className="cat-images">
            <img src="/images/cat1.jpeg" alt="고양이" className="cat-img" />
            <img src="/images/cat2.jpeg" alt="고양이" className="cat-img" />
            </div>
            </div>
        </div>
        </div>
    </section>
  );
}
