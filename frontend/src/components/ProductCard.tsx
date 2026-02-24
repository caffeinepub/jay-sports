import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
    image: string;
    name: string;
    price: string;
    category: string;
    badge?: string;
}

export default function ProductCard({ image, name, price, category, badge }: ProductCardProps) {
    return (
        <div className="product-card group cursor-pointer">
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-brand-dark">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {badge && (
                    <div
                        className="absolute top-3 left-3 px-3 py-1 text-xs font-heading font-700 tracking-widest uppercase text-primary-foreground"
                        style={{
                            background: 'oklch(0.58 0.22 25)',
                            clipPath: 'polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)',
                        }}
                    >
                        {badge}
                    </div>
                )}
                {/* Hover Overlay */}
                <div className="product-overlay">
                    <button
                        className="btn-primary text-xs"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ShoppingBag size={14} />
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Card Info */}
            <div className="p-4 border-t border-brand-dark-border">
                <p className="text-xs font-semibold tracking-widest uppercase text-brand-red mb-1">
                    {category}
                </p>
                <h3 className="font-heading font-700 text-base tracking-wide uppercase text-foreground mb-2 leading-tight">
                    {name}
                </h3>
                <div className="flex items-center justify-between">
                    <span className="font-heading font-800 text-xl text-foreground">
                        {price}
                    </span>
                    <button
                        className="w-8 h-8 flex items-center justify-center border border-brand-dark-border hover:border-brand-red hover:text-brand-red transition-colors"
                        aria-label="Quick add"
                    >
                        <ShoppingBag size={14} />
                    </button>
                </div>
            </div>
        </div>
    );
}
