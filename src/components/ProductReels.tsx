import ProductCard from "./ProductCard";

export default function ProductReels({
  products,
}: {
  products: {
    name: string;
    description: string;
    image: string;
  }[];
}) {
  return (
    <div className="w-full flex flex-col items-center gap-y-10 mb-16 lg:grid lg:grid-cols-3 gap-5">
      {products.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
}
