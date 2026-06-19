const labels = [
  { text: "MagSafe", style: { top: "18%", left: "8%" }, delay: "0s" },
  { text: "0.8 mm", style: { top: "12%", right: "12%" }, delay: "0.8s" },
  { text: "iPhone 15 Pro", style: { bottom: "32%", left: "6%" }, delay: "1.4s" },
  { text: "TPU + PC", style: { bottom: "22%", right: "10%" }, delay: "2s" },
  { text: "Δ protection", style: { top: "42%", right: "6%" }, delay: "1s" },
];

export function FloatingLabels() {
  return (
    <div aria-hidden="true" className="hero-labels">
      {labels.map((label) => (
        <span
          className="hero-label"
          key={label.text}
          style={{ ...label.style, animationDelay: label.delay }}
        >
          {label.text}
        </span>
      ))}
    </div>
  );
}
