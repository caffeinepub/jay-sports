import Navigation from '../components/Navigation';
import ProductShowcase from '../components/ProductShowcase';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import { ArrowRight, ChevronDown, Zap, Star } from 'lucide-react';

function HeroSection() {
    const scrollToProducts = () => {
        const el = document.getElementById('products');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollDown = () => {
        const el = document.getElementById('products');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden"
            style={{ background: 'oklch(0.10 0.005 260)' }}
        >
            {/* Hero Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/assets/generated/hero-banner.dim_1440x600.png"
                    alt="Jay Sports Hero"
                    className="w-full h-full object-cover object-center opacity-40"
                />
                {/* Gradient overlays */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(135deg, oklch(0.10 0.005 260 / 0.95) 0%, oklch(0.10 0.005 260 / 0.6) 50%, oklch(0.10 0.005 260 / 0.85) 100%)',
                    }}
                />
                {/* Red accent glow */}
                <div
                    className="absolute bottom-0 left-0 w-1/2 h-1/2"
                    style={{
                        background: 'radial-gradient(ellipse at bottom left, oklch(0.58 0.22 25 / 0.15) 0%, transparent 70%)',
                    }}
                />
            </div>

            {/* Decorative geometric lines */}
            <div className="absolute top-0 right-0 w-px h-full opacity-20" style={{ background: 'oklch(0.58 0.22 25)' }} />
            <div className="absolute top-1/4 right-0 w-32 h-px opacity-30" style={{ background: 'linear-gradient(to left, oklch(0.58 0.22 25), transparent)' }} />
            <div className="absolute top-2/3 right-0 w-48 h-px opacity-20" style={{ background: 'linear-gradient(to left, oklch(0.58 0.22 25), transparent)' }} />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
                <div className="max-w-3xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 mb-6">
                        <div
                            className="flex items-center gap-2 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase"
                            style={{
                                background: 'oklch(0.58 0.22 25 / 0.15)',
                                border: '1px solid oklch(0.58 0.22 25 / 0.4)',
                                color: 'oklch(0.58 0.22 25)',
                            }}
                        >
                            <Star size={10} fill="currentColor" />
                            Premium Sportswear
                            <Star size={10} fill="currentColor" />
                        </div>
                    </div>

                    {/* Main Headline */}
                    <h1 className="font-heading font-900 leading-none mb-6">
                        <span
                            className="block text-7xl sm:text-8xl lg:text-9xl text-foreground"
                        >
                            GEAR
                        </span>
                        <span
                            className="block text-7xl sm:text-8xl lg:text-9xl"
                            style={{ color: 'oklch(0.58 0.22 25)' }}
                        >
                            UP.
                        </span>
                        <span
                            className="block text-5xl sm:text-6xl lg:text-7xl text-foreground mt-2"
                        >
                            SHOW UP. WIN.
                        </span>
                    </h1>

                    {/* Tagline */}
                    <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl">
                        Jay Sports delivers premium athletic wear engineered for peak performance. From the track to the gym — we outfit champions.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap items-center gap-4">
                        <button
                            onClick={scrollToProducts}
                            className="btn-primary text-sm"
                        >
                            <Zap size={16} />
                            Shop Now
                        </button>
                        <button
                            onClick={() => {
                                const el = document.getElementById('about');
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="btn-outline text-sm"
                        >
                            Our Story
                            <ArrowRight size={14} />
                        </button>
                    </div>

                    {/* Trust indicators */}
                    <div className="mt-12 flex flex-wrap items-center gap-6">
                        {['Free Shipping Over $75', 'Easy Returns', '2-Year Warranty'].map((item) => (
                            <div key={item} className="flex items-center gap-2">
                                <div
                                    className="w-1.5 h-1.5 rounded-full"
                                    style={{ background: 'oklch(0.58 0.22 25)' }}
                                />
                                <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <button
                onClick={scrollDown}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-brand-red transition-colors animate-bounce"
                aria-label="Scroll down"
            >
                <span className="text-xs font-semibold tracking-widest uppercase">Scroll</span>
                <ChevronDown size={18} />
            </button>

            {/* Bottom diagonal cut */}
            <div
                className="absolute bottom-0 left-0 right-0 h-16"
                style={{
                    background: 'oklch(0.13 0.005 260)',
                    clipPath: 'polygon(0 100%, 100% 0%, 100% 100%)',
                }}
            />
        </section>
    );
}

function Footer() {
    const year = new Date().getFullYear();
    const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'jay-sports');

    return (
        <footer
            className="py-12 border-t border-brand-dark-border"
            style={{ background: 'oklch(0.10 0.005 260)' }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="w-10 h-10 overflow-hidden"
                                style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}
                            >
                                <img
                                    src="/assets/generated/jay-sports-logo.dim_256x256.png"
                                    alt="Jay Sports"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="leading-none">
                                <div className="font-heading font-900 text-xl tracking-widest text-foreground uppercase">Jay</div>
                                <div className="font-heading font-900 text-xl tracking-widest text-brand-red uppercase -mt-1">Sports</div>
                            </div>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            Premium sportswear for athletes who refuse to settle. Gear up, show up, and win.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading font-700 text-sm tracking-widest uppercase text-foreground mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {['Home', 'Products', 'About', 'Contact'].map((link) => (
                                <li key={link}>
                                    <button
                                        onClick={() => {
                                            const el = document.getElementById(link.toLowerCase());
                                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="text-muted-foreground hover:text-brand-red text-sm transition-colors"
                                    >
                                        {link}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-heading font-700 text-sm tracking-widest uppercase text-foreground mb-4">
                            Contact
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>hello@jaysports.com</li>
                            <li>+1 (555) JAY-SPORT</li>
                            <li>123 Athletic Drive</li>
                            <li>Sports City, SC 45678</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    className="pt-6 border-t border-brand-dark-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground"
                >
                    <p>© {year} Jay Sports. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Built with{' '}
                        <span style={{ color: 'oklch(0.58 0.22 25)' }}>♥</span>{' '}
                        using{' '}
                        <a
                            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-brand-red transition-colors underline underline-offset-2"
                        >
                            caffeine.ai
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main>
                <HeroSection />
                <ProductShowcase />
                <AboutSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}
