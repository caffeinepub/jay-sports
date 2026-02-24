import ProductCard from './ProductCard';

const products = [
    {
        image: '/assets/generated/product-shoes.dim_400x400.png',
        name: 'Pro Runner X1',
        price: '₹10,999',
        category: 'Footwear',
        badge: 'New',
    },
    {
        image: '/assets/generated/product-jersey.dim_400x400.png',
        name: 'Elite Match Jersey',
        price: '₹4,999',
        category: 'Tops',
        badge: 'Hot',
    },
    {
        image: '/assets/generated/product-shorts.dim_400x400.png',
        name: 'Speed Flex Shorts',
        price: '₹3,499',
        category: 'Bottoms',
    },
    {
        image: '/assets/generated/product-hoodie.dim_400x400.png',
        name: 'Thermal Training Hoodie',
        price: '₹7,499',
        category: 'Outerwear',
        badge: 'Sale',
    },
    {
        image: '/assets/generated/product-cap.dim_400x400.png',
        name: 'Performance Cap',
        price: '₹2,499',
        category: 'Accessories',
    },
    {
        image: '/assets/generated/product-socks.dim_400x400.png',
        name: 'Grip Pro Socks',
        price: '₹999',
        category: 'Accessories',
    },
];

export default function ProductShowcase() {
    return (
        <section id="products" className="section-divider py-20 lg:py-28 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                        <p className="text-brand-red font-semibold tracking-widest uppercase text-sm mb-2">
                            — Our Collection
                        </p>
                        <h2 className="font-heading text-5xl lg:text-6xl font-900 text-foreground leading-none">
                            Featured
                            <br />
                            <span className="text-stroke">Products</span>
                        </h2>
                    </div>
                    <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
                        Engineered for peak performance. Designed for champions. Every piece built to push your limits.
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.name} {...product} />
                    ))}
                </div>

                {/* View All CTA */}
                <div className="mt-12 text-center">
                    <button className="btn-outline">
                        View All Products
                    </button>
                </div>
            </div>
        </section>
    );
}
