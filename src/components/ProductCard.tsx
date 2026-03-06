import { motion } from "framer-motion";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

const ProductCard = ({ product, onSelect }: ProductCardProps) => (
  <motion.div
    className="group cursor-pointer"
    whileHover={{ y: -4 }}
    transition={{ duration: 0.3 }}
    onClick={() => onSelect(product)}
  >
    <div className="relative overflow-hidden bg-cream mb-4 rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-500">
      <img
        src={product.image}
        alt={product.name}
        className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      {product.isBestSeller && (
        <span className="absolute top-4 left-4 bg-gold text-primary-foreground font-body text-[10px] tracking-[0.2em] uppercase px-3 py-1">
          Best Seller
        </span>
      )}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center">
        <span className="text-primary-foreground font-body text-xs tracking-[0.2em] uppercase border-b border-white pb-1">
          Quick View
        </span>
      </div>
    </div>
    <h3 className="font-display text-lg text-foreground mb-1">{product.name}</h3>
    <p className="font-body text-sm text-warm-gray">₹{product.price.toLocaleString("en-IN")}</p>
  </motion.div>
);

export default ProductCard;
