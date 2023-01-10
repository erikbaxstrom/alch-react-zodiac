import React from 'react';
import './Main.css';
import background from '../../background.png';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      <p>Main goes here</p>
    </main>
  );
}
