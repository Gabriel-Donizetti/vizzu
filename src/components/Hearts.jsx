import './Hearts.css';

export default function Hearts() {
  const hearts = new Array(15).fill(null);

  return (
    <div className="hearts-container">
      {hearts.map((_, i) => (
        <span key={i} className="heart" style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          fontSize: `${Math.random() * 20 + 20}px`
        }}>
          ❤️
        </span>
      ))}
    </div>
  );
}
