import React from 'react';
import './Main.css';
import background from '../../background.png';
import { signs } from '../../data.js';
import Sign from '../Sign/Sign';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {signs.map((sign) => (
        <Sign key={sign.name} />
      ))}
    </main>
  );
}
