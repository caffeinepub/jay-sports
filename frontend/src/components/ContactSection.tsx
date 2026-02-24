import { useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Enter a valid email.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-brand-red font-heading font-bold uppercase tracking-widest text-sm">
            Get In Touch
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-white uppercase mt-2 mb-4">
            Contact Us
          </h2>
          <p className="text-brand-gray max-w-xl mx-auto font-body">
            Have questions about our products or want to place a bulk order? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-red/20 flex items-center justify-center flex-shrink-0 mt-1">
                <MapPin className="w-5 h-5 text-brand-red" />
              </div>
              <div>
                <h4 className="font-heading text-white font-bold uppercase mb-1">Address</h4>
                <p className="text-brand-gray font-body text-sm leading-relaxed">
                  196 - New Colony Ratnipora<br />
                  Pulwama, 192304<br />
                  Jammu and Kashmir
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-red/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-brand-red" />
              </div>
              <div>
                <h4 className="font-heading text-white font-bold uppercase mb-1">Phone</h4>
                <a
                  href="tel:+917006981592"
                  className="text-brand-gray hover:text-brand-red transition-colors font-body text-sm"
                >
                  +91 70069 81592
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-red/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-brand-red" />
              </div>
              <div>
                <h4 className="font-heading text-white font-bold uppercase mb-1">Email</h4>
                <a
                  href="mailto:jaysports.in@gmail.com"
                  className="text-brand-gray hover:text-brand-red transition-colors font-body text-sm"
                >
                  jaysports.in@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-red/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-brand-red" />
              </div>
              <div>
                <h4 className="font-heading text-white font-bold uppercase mb-1">Hours</h4>
                <p className="text-brand-gray font-body text-sm">
                  Mon – Sat: 9:00 AM – 7:00 PM<br />
                  Sunday: 10:00 AM – 4:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-brand-dark-card border border-brand-dark-border rounded-lg p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-8">
                <CheckCircle className="w-16 h-16 text-brand-red mb-4" />
                <h3 className="font-heading text-white font-black text-2xl uppercase mb-2">
                  Message Sent!
                </h3>
                <p className="text-brand-gray font-body">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
                  className="mt-6 cta-secondary px-6 py-3 text-sm font-bold uppercase tracking-wider"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label className="block text-white font-heading font-bold uppercase text-xs tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full bg-brand-dark border border-brand-dark-border rounded px-4 py-3 text-white placeholder-brand-gray/50 font-body text-sm focus:outline-none focus:border-brand-red transition-colors"
                  />
                  {errors.name && <p className="text-brand-red text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-white font-heading font-bold uppercase text-xs tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-brand-dark border border-brand-dark-border rounded px-4 py-3 text-white placeholder-brand-gray/50 font-body text-sm focus:outline-none focus:border-brand-red transition-colors"
                  />
                  {errors.email && <p className="text-brand-red text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-white font-heading font-bold uppercase text-xs tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="How can we help you?"
                    rows={5}
                    className="w-full bg-brand-dark border border-brand-dark-border rounded px-4 py-3 text-white placeholder-brand-gray/50 font-body text-sm focus:outline-none focus:border-brand-red transition-colors resize-none"
                  />
                  {errors.message && <p className="text-brand-red text-xs mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full cta-primary py-4 font-bold uppercase tracking-wider text-sm"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
