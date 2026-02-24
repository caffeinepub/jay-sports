import ProductCard from "./ProductCard";

const products = [
  {
    image: "/assets/generated/product-jersey.dim_400x400.png",
    category: "Apparel",
    name: "Pro Athletic Jersey",
    price: "₹1,299",
    badge: "Best Seller",
  },
  {
    image: "/assets/generated/product-shorts.dim_400x400.png",
    category: "Apparel",
    name: "Performance Shorts",
    price: "₹999",
  },
  {
    image: "/assets/generated/product-hoodie.dim_400x400.png",
    category: "Apparel",
    name: "Champion Hoodie",
    price: "₹2,499",
    badge: "New",
  },
  {
    image: "/assets/generated/product-shoes.dim_400x400.png",
    category: "Footwear",
    name: "Speed Boost Shoes",
    price: "₹10,999",
    badge: "Premium",
  },
  {
    image: "/assets/generated/product-cap.dim_400x400.png",
    category: "Accessories",
    name: "Athletic Cap",
    price: "₹699",
  },
  {
    image: "/assets/generated/product-socks.dim_400x400.png",
    category: "Accessories",
    name: "Pro Grip Socks",
    price: "₹349",
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-brand-red font-heading font-bold uppercase tracking-widest text-sm">
            Our Collection
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-white uppercase mt-2 mb-4">
            Premium Gear
          </h2>
          <p className="text-brand-gray max-w-xl mx-auto font-body">
            Engineered for performance. Designed for champions. Explore our full range of athletic equipment and apparel.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
