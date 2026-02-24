import { Shield, Zap, Trophy, Users } from 'lucide-react';

const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '500+', label: 'Products' },
    { value: '50K+', label: 'Happy Athletes' },
    { value: '100%', label: 'Quality Assured' },
];

const values = [
    {
        icon: Zap,
        title: 'Performance First',
        desc: 'Every product is engineered to enhance your athletic performance and push your boundaries.',
    },
    {
        icon: Shield,
        title: 'Built to Last',
        desc: 'Premium materials and rigorous quality control ensure our gear stands up to the toughest training.',
    },
    {
        icon: Trophy,
        title: 'Champion Mindset',
        desc: 'We outfit winners. Our designs are inspired by elite athletes who refuse to settle for second.',
    },
    {
        icon: Users,
        title: 'Community Driven',
        desc: 'Built by athletes, for athletes. Our community shapes every product we create.',
    },
];

export default function AboutSection() {
    return (
        <section id="about" className="section-divider py-20 lg:py-28 bg-brand-dark-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top: Brand Story */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
                    {/* Text */}
                    <div>
                        <p className="text-brand-red font-semibold tracking-widest uppercase text-sm mb-3">
                            — About Jay Sports
                        </p>
                        <h2 className="font-heading text-5xl lg:text-6xl font-900 text-foreground leading-none mb-6">
                            We Don't
                            <br />
                            <span className="text-brand-red">Just Sell</span>
                            <br />
                            Sportswear.
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Jay Sports was founded with a single mission: to equip every athlete — from weekend warriors to professional competitors — with gear that performs as hard as they do.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            Since our founding, we've been obsessed with the intersection of cutting-edge materials, bold design, and athletic function. We believe that what you wear shapes how you perform, and we take that responsibility seriously.
                        </p>
                        <div className="flex items-center gap-4">
                            <div
                                className="h-1 w-16"
                                style={{ background: 'oklch(0.58 0.22 25)' }}
                            />
                            <p className="font-heading font-700 text-lg tracking-wide uppercase text-foreground italic">
                                "Gear Up. Show Up. Win."
                            </p>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="p-6 border border-brand-dark-border hover:border-brand-red transition-colors duration-300"
                                style={{ background: 'oklch(0.13 0.005 260)' }}
                            >
                                <div className="font-heading font-900 text-4xl lg:text-5xl text-brand-red leading-none mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Values Grid */}
                <div>
                    <h3 className="font-heading text-3xl font-900 text-foreground uppercase tracking-wide mb-8 text-center">
                        Our Core Values
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((val) => {
                            const Icon = val.icon;
                            return (
                                <div
                                    key={val.title}
                                    className="p-6 border border-brand-dark-border hover:border-brand-red transition-all duration-300 group"
                                    style={{ background: 'oklch(0.13 0.005 260)' }}
                                >
                                    <div className="w-10 h-10 flex items-center justify-center mb-4 text-brand-red group-hover:scale-110 transition-transform duration-200">
                                        <Icon size={24} />
                                    </div>
                                    <h4 className="font-heading font-700 text-base tracking-wide uppercase text-foreground mb-2">
                                        {val.title}
                                    </h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {val.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
