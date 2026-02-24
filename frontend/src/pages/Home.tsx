import Navigation from "../components/Navigation";
import ProductShowcase from "../components/ProductShowcase";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import { Zap, Shield, Trophy } from "lucide-react";

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/assets/generated/hero-banner.dim_1440x600.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-brand-dark/80" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-block bg-brand-red/20 border border-brand-red/40 text-brand-red px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-widest mb-6">
          Premium Sports Gear
        </div>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-none mb-6">
          GEAR UP FOR
          <span className="block text-brand-red">GREATNESS</span>
        </h1>
        <p className="text-brand-gray text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body">
          Jay Sports brings you premium athletic equipment and apparel crafted for champions. From the court to the field — we've got you covered.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#products"
            className="cta-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold uppercase tracking-wider"
          >
            <Zap className="w-5 h-5" />
            Shop Now
          </a>
          <a
            href="#about"
            className="cta-secondary inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold uppercase tracking-wider"
          >
            Our Story
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-center">
          {[
            { icon: Trophy, label: "10+ Years", sub: "of Excellence" },
            { icon: Shield, label: "100% Quality", sub: "Guaranteed" },
            { icon: Zap, label: "50K+ Athletes", sub: "Trust Us" },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-red/20 flex items-center justify-center">
                <Icon className="w-5 h-5 text-brand-red" />
              </div>
              <div className="text-left">
                <div className="text-white font-bold font-heading text-lg leading-none">{label}</div>
                <div className="text-brand-gray text-sm">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "jay-sports");
  return (
    <footer className="bg-brand-dark border-t border-brand-dark-border py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/assets/generated/jay-sports-logo.dim_256x256.png"
              alt="Jay Sports"
              className="h-10 w-10 object-contain"
            />
            <span className="font-heading text-xl font-black text-white uppercase tracking-wider">
              Jay Sports
            </span>
          </div>
          <p className="text-brand-gray text-sm text-center">
            © {year} Jay Sports. All rights reserved.
          </p>
          <p className="text-brand-gray text-sm text-center">
            Built with{" "}
            <span className="text-brand-red">♥</span>{" "}
            using{" "}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-red hover:underline font-semibold"
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
    <div className="min-h-screen bg-brand-dark text-white">
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
