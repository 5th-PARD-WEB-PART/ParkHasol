// components/Header.tsx
import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>
    </header>
  );
}
