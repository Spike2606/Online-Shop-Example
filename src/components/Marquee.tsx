const items = [
  "MagSafe Ready",
  "Premium Materials",
  "Precyzyjne wycięcia",
  "Dostawa 24h",
  "14 dni na zwrot",
  "Blue & White",
];

export function Marquee() {
  const track = [...items, ...items];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {track.map((item, index) => (
          <span key={`${item}-${index}`}>
            {item}
            <i>◆</i>
          </span>
        ))}
      </div>
    </div>
  );
}
