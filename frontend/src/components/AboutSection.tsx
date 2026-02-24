import { Trophy, Users, Package, Star } from "lucide-react";

const stats = [
  { icon: Trophy, value: "10+", label: "Years of Excellence" },
  { icon: Package, value: "500+", label: "Products Available" },
  { icon: Users, value: "50K+", label: "Athletes Served" },
  { icon: Star, value: "100%", label: "Quality Assured" },
];

const values = [
  {
    icon: Trophy,
    title: "Performance",
    desc: "Every product is engineered to enhance athletic performance and push your limits.",
  },
  {
    icon: Star,
    title: "Quality",
    desc: "We source only the finest materials to ensure durability and comfort in every piece.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "We believe in building a community of athletes who inspire and support each other.",
  },
  {
    icon: Package,
    title: "Innovation",
    desc: "Constantly evolving our product line to meet the demands of modern athletes.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-brand-dark-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-brand-red font-heading font-bold uppercase tracking-widest text-sm">
            Who We Are
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-white uppercase mt-2 mb-4">
            About Jay Sports
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto font-body leading-relaxed">
            Founded with a passion for sports and a commitment to excellence, Jay Sports has been equipping athletes across India for over a decade. We believe that the right gear can make all the difference — and we're here to give every athlete that edge.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="bg-brand-dark border border-brand-dark-border rounded-lg p-6 text-center hover:border-brand-red/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-brand-red/20 flex items-center justify-center mx-auto mb-3">
                <Icon className="w-6 h-6 text-brand-red" />
              </div>
              <div className="font-heading text-3xl font-black text-white mb-1">{value}</div>
              <div className="text-brand-gray text-sm font-body">{label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-brand-dark border border-brand-dark-border rounded-lg p-6 hover:border-brand-red/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-brand-red/20 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-brand-red" />
              </div>
              <h3 className="font-heading text-white font-bold text-lg uppercase mb-2">{title}</h3>
              <p className="text-brand-gray text-sm font-body leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
