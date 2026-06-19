import { NavLink } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { Logo } from "./Logo";

export function Header() {
  const { totalQuantity } = useCart();

  return (
    <header className="topbar">
      <nav className="nav">
        <Logo variant="light" />

        <div className="nav-meta" aria-hidden="true">
          <span>BC—001</span>
          <span>EST.2024</span>
        </div>

        <div className="nav-links" aria-label="Główna nawigacja">
          <NavLink end to="/">
            Sklep
          </NavLink>
          <a href="/#produkty">Produkty</a>
          <a href="/#kontakt">Kontakt</a>
        </div>

        <NavLink className="cart-link" to="/koszyk" aria-label="Przejdź do koszyka">
          <span className="cart-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img">
              <path d="M7 8V7a5 5 0 0 1 10 0v1h2.25a1 1 0 0 1 .99 1.14l-1.25 9A3 3 0 0 1 16.02 21H7.98a3 3 0 0 1-2.97-2.86l-1.25-9A1 1 0 0 1 4.75 8H7Zm2 0h6V7a3 3 0 0 0-6 0v1Zm-3.1 2 1.09 7.86a1 1 0 0 0 .99 1.14h8.04a1 1 0 0 0 .99-1.14L18.1 10H5.9Z" />
            </svg>
          </span>
          {totalQuantity > 0 && <strong className="cart-badge">{totalQuantity}</strong>}
        </NavLink>
      </nav>
    </header>
  );
}
