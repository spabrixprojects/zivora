import FadeIn from "@/components/FadeIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutCraft from "@/assets/about-craft.jpg";
import heroImage from "@/assets/hero-jewelry.jpg";

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <FadeIn>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">Our Story</p>
          <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
            Crafted with Intention
          </h1>
          <p className="font-body text-base text-warm-gray max-w-2xl mx-auto leading-relaxed">
            Zivora was born from a simple idea: that the jewelry you wear every day should be just as
            considered as the jewelry you save for special occasions.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* Full width image */}
    <FadeIn>
      <div className="w-full h-[50vh] overflow-hidden">
        <img src={heroImage} alt="Zivora brand" className="w-full h-full object-cover" />
      </div>
    </FadeIn>

    {/* Brand story */}
    <section className="py-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
        <FadeIn>
          <h2 className="font-display text-3xl text-foreground mb-8 text-center">The Beginning</h2>
          <div className="font-accent text-xl text-warm-gray leading-relaxed space-y-6">
            <p>
              Founded in 2023, Zivora emerged from a desire to redefine everyday luxury.
              Our founder believed that elegance shouldn't be reserved for grand occasions —
              it should be woven into the fabric of daily life.
            </p>
            <p>
              Every Zivora piece begins as a sketch, inspired by the quiet beauty of architectural
              lines, the organic curves of nature, and the effortless style of the modern woman.
              From concept to creation, each design undergoes a meticulous process to ensure
              it meets our exacting standards.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <img src={aboutCraft} alt="Craftsmanship" className="w-full aspect-square object-cover" />
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="space-y-12">
            <div>
              <h3 className="font-display text-2xl text-foreground mb-4">Our Vision</h3>
              <p className="font-body text-base text-warm-gray leading-relaxed">
                To become the world's most trusted name in everyday fine jewelry — pieces that
                are passed down not because of their price, but because of the memories they hold.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl text-foreground mb-4">Our Mission</h3>
              <p className="font-body text-base text-warm-gray leading-relaxed">
                To craft sustainable, timeless jewelry that empowers women to express their
                individuality with quiet confidence. We believe in quality over quantity,
                intention over impulse, and beauty in simplicity.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
