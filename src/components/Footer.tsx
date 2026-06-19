import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <Logo variant="light" />
          <p>Premium case'y do iPhone — ochrona telefonu w białoniebieskim wydaniu.</p>
          <div className="social-links" aria-label="Social media">
            <a href="https://www.instagram.com/" aria-label="Instagram">
              <svg viewBox="0 0 24 24" role="img">
                <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm4.2 3.3A4.7 4.7 0 1 1 12 16.7a4.7 4.7 0 0 1 0-9.4Zm0 2A2.7 2.7 0 1 0 12 14.7a2.7 2.7 0 0 0 0-5.4Zm5.05-2.65a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/" aria-label="Facebook">
              <svg viewBox="0 0 24 24" role="img">
                <path d="M14 8.4V6.9c0-.72.48-.9.82-.9H17V2.18L14 2c-3.34 0-4.1 2.5-4.1 4.1v2.3H7v3.9h2.9V22H14v-9.7h2.77l.43-3.9H14Z" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/" aria-label="TikTok">
              <svg viewBox="0 0 24 24" role="img">
                <path d="M16.6 2c.34 2.62 1.82 4.18 4.4 4.35v3.05a7.8 7.8 0 0 1-4.28-1.34v6.72c0 4.42-2.72 7.22-6.86 7.22A6.42 6.42 0 0 1 3 15.68c0-4.14 3.62-7.1 7.78-6.28v3.26c-2.04-.62-4.45.58-4.45 3a3.18 3.18 0 0 0 3.3 3.18c2.08 0 3.42-1.18 3.42-3.92V2h3.55Z" />
              </svg>
            </a>
          </div>
        </div>

        <nav className="footer__nav" aria-label="Linki w stopce">
          <div>
            <h3>Nawigacja</h3>
            <a href="/#produkty">Produkty</a>
            <a href="/#kontakt">Kontakt</a>
            <Link to="/koszyk">Koszyk</Link>
          </div>
          <div>
            <h3>Informacje</h3>
            <Link to="/polityka-prywatnosci">Polityka prywatności</Link>
            <a href="mailto:jantomczyk2606@gmail.com">jantomczyk2606@gmail.com</a>
          </div>
        </nav>
      </div>

      <div className="footer__bottom">
        <span>© 2024 — 2026 BlueCase Studio</span>
        <span className="footer__coords">52.2297°N · 21.0122°E</span>
      </div>
    </footer>
  );
}
