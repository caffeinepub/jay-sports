import { useState } from "react";
import { MapPin, X } from "lucide-react";

interface ProductCardProps {
  image: string;
  category: string;
  name: string;
  price: string;
  badge?: string;
}

const STORE_LAT = 33.9178909;
const STORE_LNG = 74.9473340;
const MAPS_URL = `https://www.google.com/maps?q=${STORE_LAT},${STORE_LNG}`;

export default function ProductCard({ image, category, name, price, badge }: ProductCardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="product-card group relative bg-brand-dark-card border border-brand-dark-border rounded-lg overflow-hidden transition-all duration-300 hover:border-brand-red/50 hover:shadow-brand-glow">
        {badge && (
          <div className="absolute top-3 left-3 z-10 bg-brand-red text-white text-xs font-bold uppercase tracking-wider px-2 py-1 rounded">
            {badge}
          </div>
        )}
        <div
          className="relative overflow-hidden aspect-square bg-brand-dark cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button
              className="cta-primary px-6 py-3 text-sm font-bold uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2"
              onClick={(e) => { e.stopPropagation(); setShowModal(true); }}
            >
              <MapPin className="w-4 h-4" />
              Find in Store
            </button>
          </div>
        </div>
        <div className="p-4">
          <p className="text-brand-gray text-xs font-semibold uppercase tracking-widest mb-1">{category}</p>
          <h3 className="font-heading text-white font-bold text-lg uppercase leading-tight mb-2">{name}</h3>
          <p className="text-brand-red font-heading font-black text-xl">{price}</p>
        </div>
      </div>

      {/* Store Location Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal Content */}
          <div
            className="relative bg-brand-dark-card border border-brand-red/40 rounded-xl shadow-brand-glow max-w-sm w-full p-6 flex flex-col items-center gap-5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-brand-gray hover:text-white transition-colors"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Icon */}
            <div className="w-14 h-14 rounded-full bg-brand-red/10 border border-brand-red/30 flex items-center justify-center">
              <MapPin className="w-7 h-7 text-brand-red" />
            </div>

            {/* Product name */}
            <p className="text-brand-gray text-xs font-semibold uppercase tracking-widest text-center">{category}</p>
            <h3 className="font-heading text-white font-bold text-xl uppercase leading-tight text-center -mt-3">{name}</h3>

            {/* Message */}
            <p className="text-white text-center text-base font-medium leading-snug">
              Buy this product at our nearest store.
            </p>

            {/* Open Maps button */}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider rounded-lg"
            >
              <MapPin className="w-4 h-4" />
              View Store on Google Maps
            </a>

            <p className="text-brand-gray text-xs text-center">
              Coordinates: {STORE_LAT}, {STORE_LNG}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
