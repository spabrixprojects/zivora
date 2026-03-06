import { useState } from "react";
import { Link } from "react-router-dom";
import { Gem, Sparkles, Clock } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products, Product } from "@/data/products";
import heroImage from "@/assets/hero-jewelry.jpg";
import aboutCraft from "@/assets/about-craft.jpg";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const featured = products.filter((p) => p.isFeatured);
  const bestSellers = products.filter((p) => p.isBestSeller);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <motion.div style={{ y: y1 }}>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6">
                New Collection 2026
              </p>
              <h1 className="font-display text-5xl md:text-7xl text-foreground leading-[1.1] mb-6">
                Everyday Jewelry.
                <br />
                <span className="text-gold italic">Elevated.</span>
              </h1>
              <p className="font-body text-base text-warm-gray max-w-md mb-10 leading-relaxed">
                Minimal, timeless pieces designed for modern women. Crafted with intention, worn with confidence.
              </p>
              <Link
                to="/collections"
                className="inline-block bg-gold text-primary-foreground font-body text-sm tracking-[0.2em] uppercase px-10 py-4 hover:bg-gold-dark transition-colors duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transform"
              >
                Explore Collection
              </Link>
            </motion.div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <motion.div style={{ y: y2 }} className="relative overflow-hidden group rounded-sm shadow-lg">
              <motion.img
                src={heroImage}
                alt="Zivora jewelry collection"
                className="w-full object-cover aspect-[4/3] lg:aspect-[3/4] max-h-[60vh] lg:max-h-[75vh]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">Curated</p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground">
                Featured Collection
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featured.map((product, i) => (
              <FadeIn key={product.id} delay={i * 0.1}>
                <ProductCard product={product} onSelect={setSelectedProduct} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zivora */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl text-foreground">
                Why Zivora
              </h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto text-center">
            {[
              { icon: Gem, title: "Premium Materials", desc: "Ethically sourced, 18K gold vermeil and 14K gold fill for lasting beauty." },
              { icon: Sparkles, title: "Elegant Craftsmanship", desc: "Each piece is meticulously handcrafted by skilled artisans." },
              { icon: Clock, title: "Timeless Design", desc: "Minimalist silhouettes that transcend trends and seasons." },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="flex flex-col items-center">
                  <item.icon className="text-gold mb-4" size={32} strokeWidth={1.2} />
                  <h3 className="font-display text-xl mb-3">{item.title}</h3>
                  <p className="font-body text-sm text-warm-gray leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">Most Loved</p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground">Best Sellers</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {bestSellers.map((product, i) => (
              <FadeIn key={product.id} delay={i * 0.1}>
                <ProductCard product={product} onSelect={setSelectedProduct} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Preview */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <img
              src={aboutCraft}
              alt="Zivora craftsmanship"
              className="w-full aspect-[4/3] object-cover"
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">Our Story</p>
            <h2 className="font-display text-4xl text-foreground mb-6">
              Born from a Love of Simplicity
            </h2>
            <p className="font-body text-base text-warm-gray leading-relaxed mb-8">
              Zivora was founded on the belief that jewelry should be effortless — pieces you reach
              for every day, that become a part of who you are. We design for the woman who
              values quality over quantity, intention over impulse.
            </p>
            <Link
              to="/about"
              className="inline-block border border-gold text-gold font-body text-sm tracking-[0.2em] uppercase px-8 py-3 hover:bg-gold hover:text-primary-foreground transition-colors duration-300"
            >
              Read More
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
};

export default Index;
