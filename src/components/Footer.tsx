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
                className="group flex items-center gap-2 font-body text-sm text-primary-foreground/60 hover:text-gold transition-colors w-max"
              >
                <span className="h-[1px] w-0 bg-gold transition-all duration-300 group-hover:w-3" />
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Customer Care */}
        <div>
          <h4 className="font-display text-sm tracking-[0.15em] uppercase mb-6">Customer Care</h4>
          <div className="space-y-3 font-body text-sm text-primary-foreground/60">
            <p className="cursor-pointer hover:text-gold transition-colors duration-300 transform hover:translate-x-2">Shipping & Returns</p>
            <p className="cursor-pointer hover:text-gold transition-colors duration-300 transform hover:translate-x-2">Size Guide</p>
            <p className="cursor-pointer hover:text-gold transition-colors duration-300 transform hover:translate-x-2">Jewelry Care</p>
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
                className="text-primary-foreground/60 hover:text-gold transition-all duration-500 transform hover:-translate-y-2 hover:scale-110"
                aria-label="Social link"
              >
                <Icon size={20} className="drop-shadow-sm" />
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
