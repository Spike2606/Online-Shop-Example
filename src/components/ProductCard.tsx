import { useState } from "react";
import type { Product } from "../data/products";
import { useCart } from "../hooks/useCart";
import { formatPrice } from "../utils/formatPrice";

type ProductCardProps = {
  product: Product;
  index: number;
};

export function ProductCard({ product, index }: ProductCardProps) {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  function handleAddToCart() {
    addItem(product.id);
    setIsAdded(true);
    window.setTimeout(() => setIsAdded(false), 1200);
  }

  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="product-card">
      <div className="product-card__top">
        <span className="product-card__index">{number}</span>
        <span className="product-card__tag">{product.tag}</span>
      </div>

      <div className="product-image">
        <img src={product.image} alt={`${product.name} — ${product.model}`} />
        <div className="product-image__overlay">
          <button
            className={`product-card__cta${isAdded ? " is-added" : ""}`}
            onClick={handleAddToCart}
            type="button"
          >
            {isAdded ? "Dodano ✓" : "Dodaj do koszyka"}
          </button>
        </div>
      </div>

      <div className="product-content">
        <p className="product-content__model">{product.model}</p>
        <h3>{product.name}</h3>
        <p className="product-content__desc">{product.description}</p>
        <ul className="product-content__features">
          {product.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <div className="product-footer">
          <strong>{formatPrice(product.price)}</strong>
          <span className="product-footer__note">w tym VAT</span>
        </div>
      </div>
    </article>
  );
}
