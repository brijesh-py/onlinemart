import Heading from "./common/Heading";
import ProductCard from "./common/ProductCard";

function ProductSection() {
  return (
    <section className="space-y-5">
      <Heading>Our Products</Heading>
      <div className="grid grid-cols-5 gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}

export default ProductSection;
