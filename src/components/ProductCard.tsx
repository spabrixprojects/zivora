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
    <div className="relative overflow-hidden bg-cream mb-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      {product.isBestSeller && (
        <span className="absolute top-4 left-4 bg-gold text-primary-foreground font-body text-[10px] tracking-[0.2em] uppercase px-3 py-1">
          Best Seller
        </span>
      )}
    </div>
    <h3 className="font-display text-lg text-foreground mb-1">{product.name}</h3>
    <p className="font-body text-sm text-warm-gray">₹{product.price.toLocaleString("en-IN")}</p>
  </motion.div>
);

export default ProductCard;
