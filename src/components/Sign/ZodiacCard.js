import './ZodiacCard.css';
export default function ZodiacCard({ name, dates }) {
  return (
    <div className="ZodiacCard">
      <img src={`signs/${name}.png`}></img>
      <h2>{name}</h2>
      <span>{dates}</span>
    </div>
  );
}
