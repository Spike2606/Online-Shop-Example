import { Link } from "react-router-dom";

type LogoProps = {
  variant?: "light" | "dark";
};

export function Logo({ variant = "dark" }: LogoProps) {
  return (
    <Link
      className={`brand brand--${variant}`}
      to="/"
      aria-label="BlueCase Studio"
    >
      <span className="brand-mark" aria-hidden="true">
        <span className="brand-mark__inner" />
      </span>
      <span className="brand-text">
        <strong>BlueCase</strong>
        <small>Studio</small>
      </span>
    </Link>
  );
}
