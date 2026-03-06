import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";
import logo from "@/assets/zivora-logo.png";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-6 lg:px-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <img src={logo} alt="Zivora" className="h-40 " />
          <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">
            Minimal, timeless pieces designed for the modern woman.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-sm tracking-[0.15em] uppercase mb-6">Explore</h4>
          <div className="space-y-3">
            {[
              { to: "/collections", label: "Collections" },
              { to: "/about", label: "Our Story" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block font-body text-sm text-primary-foreground/60 hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Customer Care */}
        <div>
          <h4 className="font-display text-sm tracking-[0.15em] uppercase mb-6">Customer Care</h4>
          <div className="space-y-3 font-body text-sm text-primary-foreground/60">
            <p>Shipping & Returns</p>
            <p>Size Guide</p>
            <p>Jewelry Care</p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-sm tracking-[0.15em] uppercase mb-6">Connect</h4>
          <p className="font-body text-sm text-primary-foreground/60 mb-4">hello@zivora.com</p>
          <div className="flex gap-4">
            {[Instagram, Facebook, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-primary-foreground/60 hover:text-gold transition-colors"
                aria-label="Social link"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
        <p className="font-body text-xs text-primary-foreground/40 tracking-wider">
          © 2026 Zivora. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
