import { X, MessageCircle } from "lucide-react";
import { Product } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => (
  <AnimatePresence>
    {product && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="bg-background max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="grid md:grid-cols-2">
            <div className="bg-cream">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 md:h-auto md:aspect-square object-cover"
              />
            </div>
            <div className="p-6 md:p-12 flex flex-col justify-center relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 md:static md:self-end md:mb-6 text-warm-gray hover:text-foreground transition-colors bg-background/50 md:bg-transparent rounded-full p-2 md:p-0"
                aria-label="Close"
              >
                <X size={24} />
              </button>

              <p className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-2">
                {product.category}
              </p>
              <h2 className="font-display text-3xl text-foreground mb-2">{product.name}</h2>
              <p className="font-accent text-2xl text-gold mb-6">₹{product.price.toLocaleString("en-IN")}</p>
              <p className="font-body text-sm text-warm-gray leading-relaxed mb-8">
                {product.description}
              </p>

              <a
                href={`https://wa.me/?text=${encodeURIComponent(`Hi! I'm interested in the ${product.name} from Zivora.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white font-body text-sm tracking-[0.2em] uppercase py-4 flex items-center justify-center gap-3 hover:bg-[#128C7E] transition-colors duration-300"
              >
                <MessageCircle size={20} />
                WhatsApp Enquiry
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default ProductModal;
