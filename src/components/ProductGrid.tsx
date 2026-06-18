import { products } from "../data/products";
import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  return (
    <section className="section" id="produkty">
      <div className="section-heading">
        <p className="eyebrow">Katalog</p>
        <h2>Wybierz case do swojego iPhone'a</h2>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
