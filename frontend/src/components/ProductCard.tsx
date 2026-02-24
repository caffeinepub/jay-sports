interface ProductCardProps {
  image: string;
  category: string;
  name: string;
  price: string;
  badge?: string;
}

export default function ProductCard({ image, category, name, price, badge }: ProductCardProps) {
  return (
    <div className="product-card group relative bg-brand-dark-card border border-brand-dark-border rounded-lg overflow-hidden transition-all duration-300 hover:border-brand-red/50 hover:shadow-brand-glow">
      {badge && (
        <div className="absolute top-3 left-3 z-10 bg-brand-red text-white text-xs font-bold uppercase tracking-wider px-2 py-1 rounded">
          {badge}
        </div>
      )}
      <div className="relative overflow-hidden aspect-square bg-brand-dark">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="cta-primary px-6 py-3 text-sm font-bold uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-brand-gray text-xs font-semibold uppercase tracking-widest mb-1">{category}</p>
        <h3 className="font-heading text-white font-bold text-lg uppercase leading-tight mb-2">{name}</h3>
        <p className="text-brand-red font-heading font-black text-xl">{price}</p>
      </div>
    </div>
  );
}
