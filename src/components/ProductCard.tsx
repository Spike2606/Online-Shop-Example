import { useState } from "react";
import type { Product } from "../data/products";
import { useCart } from "../hooks/useCart";
import { formatPrice } from "../utils/formatPrice";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  function handleAddToCart() {
    addItem(product.id);
    setIsAdded(true);
    window.setTimeout(() => setIsAdded(false), 1200);
  }

  return (
    <article className="product-card">
      <div className="product-image">
        <span>{product.tag}</span>
        <img src={product.image} alt={`${product.name} - ${product.model}`} />
      </div>
      <div className="product-content">
        <p>{product.model}</p>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <ul>
          {product.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <div className="product-footer">
          <strong>{formatPrice(product.price)}</strong>
          <button
            className={isAdded ? "is-added" : ""}
            onClick={handleAddToCart}
            type="button"
          >
            {isAdded ? "Dodano" : "Dodaj do koszyka"}
          </button>
        </div>
      </div>
    </article>
  );
}
