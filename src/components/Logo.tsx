import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link className="brand" to="/" aria-label="BlueCase Studio">
      <span className="brand-mark" aria-hidden="true">
        <span className="brand-phone" />
        <span className="brand-spark" />
      </span>
      <span className="brand-text">
        <strong>BlueCase</strong>
        <small>Studio</small>
      </span>
    </Link>
  );
}
