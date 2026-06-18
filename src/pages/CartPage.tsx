import { Link } from "react-router-dom";
import { shippingCost } from "../data/products";
import { useCart } from "../hooks/useCart";
import { formatPrice } from "../utils/formatPrice";

export function CartPage() {
  const { clearCart, items, removeItem, subtotal, total, updateQuantity } = useCart();

  if (items.length === 0) {
    return (
      <section className="section page-section empty-page">
        <p className="eyebrow">Koszyk</p>
        <h1>Twój koszyk jest pusty.</h1>
        <p>Dodaj case z katalogu, a pojawi się tutaj jako osobne zamówienie.</p>
        <Link className="button primary" to="/#produkty">
          Wróć do produktów
        </Link>
      </section>
    );
  }

  return (
    <section className="section page-section cart-page">
      <div>
        <p className="eyebrow">Koszyk</p>
        <h1>Twoje zamówienie</h1>
        <p>Sprawdź produkty, zmień ilości albo usuń pozycje przed wysłaniem zapytania.</p>
      </div>

      <div className="cart-layout">
        <div className="cart-list">
          {items.map(({ product, quantity }) => (
            <article className="cart-row" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div>
                <strong>{product.name}</strong>
                <span>{product.model}</span>
                <button onClick={() => removeItem(product.id)} type="button">
                  Usuń
                </button>
              </div>
              <label>
                Ilość
                <input
                  min="0"
                  onChange={(event) =>
                    updateQuantity(product.id, Number(event.target.value))
                  }
                  type="number"
                  value={quantity}
                />
              </label>
              <strong>{formatPrice(product.price * quantity)}</strong>
            </article>
          ))}
        </div>

        <aside className="cart-panel">
          <h2>Podsumowanie</h2>
          <dl className="cart-summary">
            <div>
              <dt>Produkty</dt>
              <dd>{formatPrice(subtotal)}</dd>
            </div>
            <div>
              <dt>Dostawa</dt>
              <dd>{formatPrice(shippingCost)}</dd>
            </div>
            <div className="total">
              <dt>Razem</dt>
              <dd>{formatPrice(total)}</dd>
            </div>
          </dl>

          <a
            className="checkout-button"
            href={`mailto:jantomczyk2606@gmail.com?subject=Zamowienie%20BlueCase&body=Kwota%20zamowienia:%20${encodeURIComponent(
              formatPrice(total),
            )}`}
          >
            Wyślij zapytanie o zamówienie
          </a>
          <button className="clear-cart" onClick={clearCart} type="button">
            Wyczyść koszyk
          </button>
        </aside>
      </div>
    </section>
  );
}
