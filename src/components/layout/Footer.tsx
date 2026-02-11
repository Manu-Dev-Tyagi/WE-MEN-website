import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-foreground text-background">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <div className="mb-4">
              <img src="/images/LOGO.png" alt="WE-MEN" className="h-12 w-auto object-contain bg-white/90 rounded-md p-1" />
            </div>
            <p className="text-sm text-background/70">
              WE-MEN is a performance innerwear brand built for modern men. Our products are designed to sculpt, support, and strengthen your confidence — from the inside out.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { to: "/", label: "Home" },
                { to: "/products", label: "Products" },
                { to: "/cart", label: "Cart" },
                { to: "/orders", label: "Orders" },
                { to: "/size-quiz", label: "Size Guide" },
                { to: "/blog", label: "Blog" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-background/70 transition-colors hover:text-primary">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider">Customer Support</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:support@wemen.in" className="flex items-center gap-2 text-sm text-background/70 hover:text-primary">
                <Mail className="h-4 w-4" /> support@wemen.in
              </a>
              <a href="tel:+919000000000" className="flex items-center gap-2 text-sm text-background/70 hover:text-primary">
                <Phone className="h-4 w-4" /> +91 90000 00000
              </a>
              <a
                href="https://wa.me/919000000000?text=Hi%20WE-MEN%2C%20I%20need%20help"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-background/70 hover:text-primary"
              >
                💬 WhatsApp Support
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider">Follow Us</h4>
            <div className="flex gap-3">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20 transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-background/20 px-3 py-1 text-xs">
                🇮🇳 Made in India
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-background/10 pt-6 text-center">
          <p className="text-xs text-background/50">© 2025 WE-MEN. All rights reserved.</p>
          <p className="mt-1 text-xs italic text-primary/80">Confidence. Shaped Within.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
