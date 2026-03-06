import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products, Product } from "@/data/products";

const categories = ["all", "rings", "earrings", "necklaces", "bracelets"] as const;

const Collections = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered = activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">Shop</p>
              <h1 className="font-display text-5xl md:text-6xl text-foreground mb-4">
                Our Collections
              </h1>
              <p className="font-body text-base text-warm-gray max-w-md mx-auto">
                Discover timeless pieces crafted for everyday elegance.
              </p>
            </div>
          </FadeIn>

          {/* Category Filter */}
          <FadeIn delay={0.1}>
            <div className="flex justify-center gap-6 mb-16 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-body text-sm tracking-[0.15em] uppercase transition-colors pb-1 border-b-2 ${
                    activeCategory === cat
                      ? "border-gold text-gold"
                      : "border-transparent text-warm-gray hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Product Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filtered.map((product, i) => (
              <FadeIn key={product.id} delay={i * 0.05}>
                <ProductCard product={product} onSelect={setSelectedProduct} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
};

export default Collections;
