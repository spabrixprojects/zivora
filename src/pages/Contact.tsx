import { useState } from "react";
import { Instagram, Facebook, Mail, MapPin } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForm({ name: "", email: "", message: "" });
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000); // Hide the message after 5 seconds
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Get in Touch
              </p>
              <h1 className="font-display text-5xl md:text-6xl text-foreground mb-4">Contact</h1>
              <p className="font-body text-base text-warm-gray max-w-md mx-auto">
                We'd love to hear from you. Reach out with any questions.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Form */}
            <FadeIn>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-border px-5 py-3 font-body text-sm text-foreground focus:outline-none focus:border-gold transition-colors bg-background"
                    required
                  />
                </div>
                <div>
                  <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-border px-5 py-3 font-body text-sm text-foreground focus:outline-none focus:border-gold transition-colors bg-background"
                    required
                  />
                </div>
                <div>
                  <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-border px-5 py-3 font-body text-sm text-foreground focus:outline-none focus:border-gold transition-colors resize-none bg-background"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold text-primary-foreground font-body text-sm tracking-[0.2em] uppercase py-4 hover:bg-gold-dark transition-colors duration-300"
                >
                  Send Message
                </button>
                {isSubmitted && (
                  <div className="mt-4 p-4 bg-green-50/50 border border-green-200 text-green-700 text-sm font-body text-center rounded">
                    Message sent successfully! We will get back to you soon.
                  </div>
                )}
              </form>
            </FadeIn>

            {/* Info */}
            <FadeIn delay={0.2}>
              <div className="space-y-10 lg:pl-12">
                <div>
                  <h3 className="font-display text-xl text-foreground mb-3">Email</h3>
                  <p className="font-body text-sm text-warm-gray">hello@zivora.com</p>
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-3">Location</h3>
                  <div className="flex items-start gap-2 text-warm-gray">
                    <MapPin size={18} className="mt-0.5 shrink-0" />
                    <p className="font-body text-sm">
                      Mavoor Road<br />
                      Calicut, Kerala 673001
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-3">Follow Us</h3>
                  <div className="flex gap-4">
                    {[Instagram, Facebook, Mail].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="text-warm-gray hover:text-gold transition-colors"
                        aria-label="Social link"
                      >
                        <Icon size={22} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
