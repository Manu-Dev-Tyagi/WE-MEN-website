import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, Droplets, Eye, Sun, ArrowRight, Star, Lock, Truck, CreditCard, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { testimonials } from "@/data/testimonials";
import ProductCard from "@/components/ProductCard";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const features = [
  { icon: ShieldCheck, title: "Engineered Compression", desc: "Targeted support zones for chest, abdomen, and waist" },
  { icon: Droplets, title: "Sweat Control Technology", desc: "Advanced moisture-wicking fabric that keeps you dry" },
  { icon: Eye, title: "Invisible Fit", desc: "Wear under shirts, suits, or casual outfits — zero bulk" },
  { icon: Sun, title: "Built for Indian Climate", desc: "Breathable fabric designed for heat and humidity" },
];

const trustBadges = [
  { icon: Lock, label: "100% Secure Checkout" },
  { icon: Truck, label: "7-Day Easy Exchange" },
  { icon: CreditCard, label: "Cash on Delivery Available" },
  { icon: Flag, label: "Made for Indian Climate" },
];

const Index = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-foreground text-background">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/home-banner.png" 
            alt="WE-MEN Hero Banner" 
            className="h-full w-full object-cover object-right md:object-center" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
        </div>
        
        <div className="container relative z-10 py-20">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.div variants={fadeIn}>
              <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                India's #1 Performance Basewear
              </span>
            </motion.div>
            <motion.h1 variants={fadeIn} className="font-display text-5xl font-black leading-tight md:text-7xl">
              8+ HOURS OF <span className="text-primary">COMFORT</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="mt-2 font-display text-xl text-background/80 md:text-2xl">
              Engineered Performance Innerwear for Everyday Confidence
            </motion.p>
            <motion.p variants={fadeIn} className="mt-4 max-w-lg text-background/60">
              Designed for modern men who demand structure, support, and breathability. WE-MEN inner layers sculpt your body while keeping you cool and comfortable all day long.
            </motion.p>
            <motion.div variants={fadeIn} className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-accent font-bold">
                <Link to="/products">Shop Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/50 bg-white/5 text-white hover:bg-white hover:text-black transition-colors">
                <Link to="/products">Explore Collection</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center">
            <motion.h2 variants={fadeIn} className="font-display text-3xl font-bold md:text-4xl">
              Why Choose <span className="text-primary">WE-MEN</span>?
            </motion.h2>
            <motion.p variants={fadeIn} className="mt-2 text-muted-foreground">
              Performance engineered. Comfort guaranteed.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeIn}
                className="group rounded-xl border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <f.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Customer Promise */}
      <section className="bg-secondary py-20">
        <div className="container text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeIn} className="font-display text-3xl font-bold md:text-4xl">
              Look Better. Feel Stronger. <span className="text-primary">Move Freely.</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We believe confidence begins underneath. Every WE-MEN product is crafted to enhance posture, shape, and comfort — without compromising breathability.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-y py-8">
        <div className="container">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {trustBadges.map((b) => (
              <div key={b.label} className="flex items-center justify-center gap-2 text-center">
                <b.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold">Featured Products</h2>
              <p className="mt-1 text-muted-foreground">Our best-selling confidence essentials</p>
            </div>
            <Button asChild variant="outline">
              <Link to="/products">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-foreground py-20 text-background">
        <div className="container">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold">What Our Customers Say</h2>
            <p className="mt-2 text-background/60">Real stories from real men across India</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <div key={t.id} className="rounded-xl border border-background/10 bg-background/5 p-6">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-background/80 italic">"{t.quote}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 font-display text-sm font-bold text-primary">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-background/50">{t.profession}, {t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
