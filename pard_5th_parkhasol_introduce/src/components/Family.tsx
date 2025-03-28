// components/Family.tsx
import React from 'react';

interface FamilyGroup {
  title: string;
  images: string[];
  emoji: string;
  altTexts: string[];
}

const familyGroups: FamilyGroup[] = [
  {
    title: '우리 가족',
    emoji: '👨‍👩‍👧',
    images: [
      '/images/family.jpeg',
      '/images/haeon.JPG',
      '/images/jjangddoong.png',
    ],
    altTexts: ['가족', '언니', '사촌언니'],
  },
  {
    title: '교회',
    emoji: '⛪',
    images: [
      '/images/andamo.jpeg',
      '/images/andamo2.JPG',
      '/images/andamo3.JPG',
    ],
    altTexts: ['안다모', '안다모', '안다모'],
  },
  {
    title: 'NiBC',
    emoji: '📖',
    images: ['/images/NiBC.JPG'],
    altTexts: ['NiBC'],
  },
  {
    title: '화끝',
    emoji: '🔥',
    images: [
      '/images/fire.JPG',
      '/images/fire2.JPG',
      '/images/fire3.JPG',
    ],
    altTexts: ['화끝', '화끝', '화끝'],
  },
];

export default function Family() {
  return (
    <section className="list" id="family">
      <div className="family-content">
        <h2>FAMILY</h2>

        <div className="family-group">
          <h3>👨‍👩‍👧 우리 가족 👨‍👩‍👧</h3>
          <div className="family-images">
            <img src="/images/family.jpeg" alt="가족" className="family-img" />
            <img src="/images/haeon.JPG" alt="언니" className="family-img" />
            <img src="/images/jjangddoong.png" alt="사촌언니" className="family-img" />
          </div>
        </div>

        <div className="family-group">
          <h3>⛪ 교회 ⛪</h3>
          <div className="family-images">
            <img src="/images/andamo.jpeg" alt="안다모" className="family-img" />
            <img src="/images/andamo2.JPG" alt="안다모" className="family-img" />
            <img src="/images/andamo3.JPG" alt="안다모" className="family-img" />
          </div>
        </div>

        <div className="family-group">
          <h3>📖 NiBC 📖</h3>
          <div className="family-images">
            <img src="/images/NiBC.JPG" alt="NiBC" className="family-img" />
          </div>
        </div>
        
        <div className="family-group">
          <h3>🔥 화끝 🔥</h3>
          <div className="family-images">
            <img src="/images/fire.JPG" alt="화끝" className="family-img" />
            <img src="/images/fire2.JPG" alt="화끝" className="family-img" />
            <img src="/images/fire3.JPG" alt="화끝" className="family-img" />
          </div>
        </div>
      </div>
    </section>
  );
}