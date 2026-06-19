import { products } from "../data/products";
import { ProductCard } from "./ProductCard";
import { SectionLabel } from "./SectionLabel";

export function ProductGrid() {
  return (
    <section className="section section--catalog" id="produkty">
      <div className="section-header">
        <SectionLabel>Katalog</SectionLabel>
        <h2>Wybierz case do swojego iPhone'a</h2>
        <p>
          Każdy model dopasowany pod aparat, porty i codzienne użytkowanie.
          Wybierz styl, który pasuje do Ciebie.
        </p>
      </div>

      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={product.id} index={index} product={product} />
        ))}
      </div>
    </section>
  );
}
