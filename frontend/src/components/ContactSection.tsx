import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';

interface FormState {
    name: string;
    email: string;
    message: string;
}

const contactDetails = [
    {
        icon: MapPin,
        label: 'Address',
        value: '12, MG Road, Bengaluru, Karnataka 560001, India',
    },
    {
        icon: Phone,
        label: 'Phone',
        value: '+91 70069 81592',
    },
    {
        icon: Mail,
        label: 'Email',
        value: 'hello@jaysports.com',
    },
    {
        icon: Clock,
        label: 'Hours',
        value: 'Mon–Sat: 9AM – 8PM',
    },
];

export default function ContactSection() {
    const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState<Partial<FormState>>({});
    const [submitted, setSubmitted] = useState(false);

    const validate = (): boolean => {
        const newErrors: Partial<FormState> = {};
        if (!form.name.trim()) newErrors.name = 'Name is required.';
        if (!form.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = 'Enter a valid email address.';
        }
        if (!form.message.trim()) newErrors.message = 'Message is required.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
        setErrors({});
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormState]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    return (
        <section id="contact" className="section-divider py-20 lg:py-28 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-14 text-center">
                    <p className="text-brand-red font-semibold tracking-widest uppercase text-sm mb-2">
                        — Get In Touch
                    </p>
                    <h2 className="font-heading text-5xl lg:text-6xl font-900 text-foreground leading-none">
                        Contact <span className="text-brand-red">Us</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Info */}
                    <div>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            Have a question about our products, sizing, or orders? Our team is ready to help you gear up for greatness. Reach out and we'll get back to you within 24 hours.
                        </p>

                        <div className="space-y-5">
                            {contactDetails.map((detail) => {
                                const Icon = detail.icon;
                                return (
                                    <div key={detail.label} className="flex items-start gap-4">
                                        <div
                                            className="w-10 h-10 flex items-center justify-center flex-shrink-0 text-primary-foreground"
                                            style={{
                                                background: 'oklch(0.58 0.22 25)',
                                                clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
                                            }}
                                        >
                                            <Icon size={16} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold tracking-widest uppercase text-brand-red mb-0.5">
                                                {detail.label}
                                            </p>
                                            <p className="text-foreground text-sm">{detail.value}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Decorative bar */}
                        <div className="mt-10 h-1 w-full" style={{ background: 'linear-gradient(90deg, oklch(0.58 0.22 25), transparent)' }} />
                    </div>

                    {/* Contact Form */}
                    <div
                        className="p-8 border border-brand-dark-border"
                        style={{ background: 'oklch(0.17 0.008 260)' }}
                    >
                        {submitted ? (
                            <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                                <div
                                    className="w-16 h-16 flex items-center justify-center mb-4 text-primary-foreground"
                                    style={{
                                        background: 'oklch(0.58 0.22 25)',
                                        clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)',
                                    }}
                                >
                                    <Send size={24} />
                                </div>
                                <h3 className="font-heading font-800 text-2xl uppercase tracking-wide text-foreground mb-2">
                                    Message Sent!
                                </h3>
                                <p className="text-muted-foreground text-sm mb-6">
                                    Thanks for reaching out. We'll get back to you within 24 hours.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="btn-outline text-xs"
                                >
                                    Send Another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate className="space-y-5">
                                <h3 className="font-heading font-800 text-xl uppercase tracking-wide text-foreground mb-6">
                                    Send a Message
                                </h3>

                                {/* Name */}
                                <div>
                                    <label className="block text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Your full name"
                                        className={`w-full px-4 py-3 bg-background border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-brand-red transition-colors ${
                                            errors.name ? 'border-destructive' : 'border-brand-dark-border'
                                        }`}
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-xs text-destructive">{errors.name}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                        className={`w-full px-4 py-3 bg-background border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-brand-red transition-colors ${
                                            errors.email ? 'border-destructive' : 'border-brand-dark-border'
                                        }`}
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-xs text-destructive">{errors.email}</p>
                                    )}
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Tell us how we can help..."
                                        rows={5}
                                        className={`w-full px-4 py-3 bg-background border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-brand-red transition-colors resize-none ${
                                            errors.message ? 'border-destructive' : 'border-brand-dark-border'
                                        }`}
                                    />
                                    {errors.message && (
                                        <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                                    )}
                                </div>

                                <button type="submit" className="btn-primary w-full justify-center">
                                    <Send size={14} />
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
