import { Suspense, lazy } from "react";
import { FloatingLabels } from "../components/FloatingLabels";
import { Marquee } from "../components/Marquee";
import { ProductGrid } from "../components/ProductGrid";
import { SectionLabel } from "../components/SectionLabel";

const HeroScene = lazy(() =>
  import("../components/HeroScene").then((module) => ({ default: module.HeroScene })),
);
import { shippingCost } from "../data/products";
import { formatPrice } from "../utils/formatPrice";

const stats = [
  { value: "4+", label: "Modele case'ów" },
  { value: "24h", label: "Wysyłka" },
  { value: "14", label: "Dni na zwrot" },
  { value: "100%", label: "Dopasowanie" },
];

const process = [
  {
    step: "01",
    title: "Wybierz model",
    text: "Dopasuj case do swojego iPhone'a — od 13 po 15 Pro.",
  },
  {
    step: "02",
    title: "Dodaj do koszyka",
    text: "Sprawdź szczegóły, ilość i podsumowanie zamówienia.",
  },
  {
    step: "03",
    title: "Wyślij zapytanie",
    text: "Potwierdzimy dostępność i czas realizacji.",
  },
  {
    step: "04",
    title: "Odbierz paczkę",
    text: "Case dotrze do Ciebie w ciągu 24h w dni robocze.",
  },
];

export function HomePage() {
  return (
    <>
      <section className="hero" id="top">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
        <FloatingLabels />
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__grid" />
          <div className="hero__glow hero__glow--1" />
          <div className="hero__glow hero__glow--2" />
        </div>

        <div className="hero__inner">
          <div className="hero__meta">
            <span>BC.STUDIO</span>
            <span>52.2297°N · 21.0122°E</span>
            <span>EST.2024</span>
          </div>

          <div className="hero__content">
            <SectionLabel dark>Case'y do iPhone</SectionLabel>
            <h1>
              Stylowa
              <br />
              <em>ochrona telefonu.</em>
            </h1>
            <p className="hero__lead">
              Premium case'y zaprojektowane z dbałością o detale. Lekkie,
              trwałe i dopasowane do każdego modelu iPhone.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#produkty">
                Zobacz produkty
                <span aria-hidden="true">→</span>
              </a>
              <a className="button ghost" href="#kontakt">
                Skontaktuj się
              </a>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero-card">
              <div className="hero__promo">
                <span>Dostawa od</span>
                <strong>{formatPrice(shippingCost)}</strong>
              </div>
              <img
                src="/products/mist-mountain-case.png"
                alt="Case Mist Mountain do iPhone"
              />
              <div className="hero-card__badge">
                <span>Bestseller</span>
                <strong>Mist Mountain</strong>
              </div>
            </div>
          </div>
        </div>

        <a className="hero__scroll" href="#produkty" aria-label="Przewiń w dół">
          <span>Scroll</span>
          <span className="hero__scroll-line" />
        </a>
      </section>

      <Marquee />

      <section className="stats-bar">
        <div className="stats-bar__inner">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--intro">
        <div className="section-header">
          <SectionLabel>Dlaczego BlueCase</SectionLabel>
          <h2>Ochrona, która dobrze wygląda i nie pogrubia telefonu.</h2>
        </div>

        <div className="benefits">
          <article className="benefit-card">
            <span className="benefit-card__num">01</span>
            <strong>Szybka wysyłka</strong>
            <p>Zamówienia realizujemy w 24h w dni robocze.</p>
          </article>
          <article className="benefit-card">
            <span className="benefit-card__num">02</span>
            <strong>14 dni na zwrot</strong>
            <p>Prosty proces zwrotu bez podawania przyczyny.</p>
          </article>
          <article className="benefit-card">
            <span className="benefit-card__num">03</span>
            <strong>Precyzyjne wycięcia</strong>
            <p>Każdy case ma idealne dopasowanie pod aparat i porty.</p>
          </article>
        </div>
      </section>

      <ProductGrid />

      <section className="section section--process">
        <div className="section-header">
          <SectionLabel>Proces</SectionLabel>
          <h2>Jak to działa</h2>
        </div>

        <div className="process-grid">
          {process.map((item) => (
            <article className="process-card" key={item.step}>
              <span className="process-card__step">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-banner__inner">
          <SectionLabel dark>Gotowy?</SectionLabel>
          <h2>Znajdź swój idealny case.</h2>
          <p>Przeglądaj katalog, dodaj do koszyka i wyślij zapytanie o zamówienie.</p>
          <a className="button primary" href="#produkty">
            Przejdź do katalogu
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="section section--contact" id="kontakt">
        <div className="contact-layout">
          <div className="contact-layout__copy">
            <SectionLabel>Kontakt</SectionLabel>
            <h2>Napisz do nas</h2>
            <p>
              Masz pytanie o model iPhone'a, dostępność lub większe zamówienie?
              Odpowiemy tak szybko, jak to możliwe.
            </p>
            <div className="contact-details">
              <div>
                <span>Email</span>
                <a href="mailto:jantomczyk2606@gmail.com">jantomczyk2606@gmail.com</a>
              </div>
              <div>
                <span>Telefon</span>
                <a href="tel:+48123456789">+48 123 456 789</a>
              </div>
              <div>
                <span>Adres</span>
                <p>ul. Błękitna 12, 00-001 Warszawa</p>
              </div>
            </div>
          </div>

          <article className="contact-form-card">
            <form className="contact-form">
              <label>
                Imię
                <input placeholder="Jan" type="text" />
              </label>
              <label>
                Email
                <input placeholder="jan@example.com" type="email" />
              </label>
              <label>
                Wiadomość
                <textarea placeholder="W czym możemy pomóc?" rows={4} />
              </label>
              <button type="button">Wyślij wiadomość</button>
            </form>
          </article>
        </div>
      </section>
    </>
  );
}
