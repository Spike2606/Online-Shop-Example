import { ProductGrid } from "../components/ProductGrid";
import { shippingCost } from "../data/products";
import { formatPrice } from "../utils/formatPrice";

export function HomePage() {
  return (
    <>
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Case'y do iPhone</p>
          <h1>Stylowa ochrona telefonu.</h1>
          <div className="hero-actions">
            <a className="button primary" href="#produkty">
              Zobacz produkty
            </a>
            <a className="button secondary" href="#kontakt">
              Skontaktuj się
            </a>
          </div>
        </div>
        <div className="hero-card" aria-label="Promocja sklepu">
          <img src="/products/midnight-leather-case.png" alt="Czarny case do iPhone" />
          <div>
            <span>Weekendowa promocja</span>
            <strong>Dostawa od {formatPrice(shippingCost)}</strong>
          </div>
        </div>
      </section>

      <section className="section intro">
        <div>
          <p className="eyebrow">Dlaczego BlueCase?</p>
          <h2>Ochrona, która dobrze wygląda i nie pogrubia telefonu.</h2>
        </div>
        <div className="benefits">
          <article>
            <span>01</span>
            <strong>Szybka wysyłka</strong>
            <p>Zamówienia realizujemy w 24h w dni robocze.</p>
          </article>
          <article>
            <span>02</span>
            <strong>14 dni na zwrot</strong>
            <p>Prosty proces zwrotu bez podawania przyczyny.</p>
          </article>
          <article>
            <span>03</span>
            <strong>Dopasowanie do modeli</strong>
            <p>Każdy case ma precyzyjne wycięcia pod aparat i porty.</p>
          </article>
        </div>
      </section>

      <ProductGrid />

      <section className="section contact-section" id="kontakt">
        <div>
          <p className="eyebrow">Kontakt</p>
          <h2>Napisz do nas</h2>
          <p>
            Masz pytanie o model iPhone'a, dostępność lub większe zamówienie?
            Odpowiemy tak szybko, jak to możliwe.
          </p>
        </div>

        <article className="info-card">
          <p>
            BlueCase Studio Sp. z o.o.
            <br />
            ul. Błękitna 12, 00-001 Warszawa
          </p>
          <p>
            Email: <a href="mailto:jantomczyk2606@gmail.com">jantomczyk2606@gmail.com</a>
            <br />
            Telefon: <a href="tel:+48123456789">+48 123 456 789</a>
          </p>
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
      </section>
    </>
  );
}
