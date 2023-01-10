import React from 'react';
import './Main.css';
import background from '../../background.png';
import { signs } from '../../data.js';
import ZodiacCard from '../Sign/ZodiacCard';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {signs.map((sign) => (
        <ZodiacCard key={sign.name} {...sign} />
      ))}
    </main>
  );
}
