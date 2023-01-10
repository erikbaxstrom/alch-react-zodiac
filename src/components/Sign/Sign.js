import './Sign.css';
export default function Sign({ name, dates }) {
  return (
    <div className="ZodiacCard">
      <img src={`${process.env.PUBLIC_URL}/signs/${name}.png`}></img>
      <h2>{name}</h2>
      <span>{dates}</span>
    </div>
  );
}
