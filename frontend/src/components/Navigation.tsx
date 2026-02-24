import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Determine active section
            const sections = ['home', 'products', 'about', 'contact'];
            for (const section of sections.reverse()) {
                const el = document.getElementById(section);
                if (el && window.scrollY >= el.offsetTop - 100) {
                    setActiveSection(section);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setMobileOpen(false);
        const id = href.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg border-b border-brand-dark-border'
                    : 'bg-transparent'
            }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <button
                        onClick={() => handleNavClick('#home')}
                        className="flex items-center gap-3 group"
                    >
                        <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden"
                            style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}>
                            <img
                                src="/assets/generated/jay-sports-logo.dim_256x256.png"
                                alt="Jay Sports Logo"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="font-heading font-900 text-xl tracking-widest text-foreground uppercase">
                                Jay
                            </span>
                            <span className="font-heading font-900 text-xl tracking-widest text-brand-red uppercase -mt-1">
                                Sports
                            </span>
                        </div>
                    </button>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleNavClick(link.href)}
                                className={`nav-link text-foreground hover:text-brand-red ${
                                    activeSection === link.href.replace('#', '') ? 'text-brand-red active' : ''
                                }`}
                            >
                                {link.label}
                            </button>
                        ))}
                        <button
                            onClick={() => handleNavClick('#products')}
                            className="btn-primary text-xs"
                        >
                            <Zap size={14} />
                            Shop Now
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-foreground hover:text-brand-red transition-colors p-2"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileOpen && (
                    <div className="md:hidden bg-brand-dark border-t border-brand-dark-border py-4 animate-fade-up">
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => handleNavClick(link.href)}
                                    className={`text-left px-4 py-3 font-heading font-700 text-base tracking-widest uppercase transition-colors ${
                                        activeSection === link.href.replace('#', '')
                                            ? 'text-brand-red bg-brand-dark-card'
                                            : 'text-foreground hover:text-brand-red hover:bg-brand-dark-card'
                                    }`}
                                >
                                    {link.label}
                                </button>
                            ))}
                            <div className="px-4 pt-3">
                                <button
                                    onClick={() => handleNavClick('#products')}
                                    className="btn-primary w-full justify-center text-xs"
                                >
                                    <Zap size={14} />
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
