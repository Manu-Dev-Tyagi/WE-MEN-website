import { Link, useLocation } from "react-router-dom";
import { Home, ShoppingBag, ShoppingCart, Heart, User } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const tabs = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/products", icon: ShoppingBag, label: "Shop" },
  { to: "/cart", icon: ShoppingCart, label: "Cart", badge: "cart" as const },
  { to: "/wishlist", icon: Heart, label: "Wishlist", badge: "wishlist" as const },
  { to: "/profile", icon: User, label: "Profile" },
];

const MobileNav = () => {
  const location = useLocation();
  const { totalItems: cartCount } = useCart();
  const { totalItems: wishlistCount } = useWishlist();

  const getBadge = (type?: "cart" | "wishlist") => {
    if (type === "cart" && cartCount > 0) return cartCount;
    if (type === "wishlist" && wishlistCount > 0) return wishlistCount;
    return 0;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur md:hidden">
      <div className="flex items-center justify-around py-2">
        {tabs.map(({ to, icon: Icon, label, badge }) => {
          const isActive = location.pathname === to;
          const count = getBadge(badge);
          return (
            <Link
              key={to}
              to={to}
              className={`relative flex flex-col items-center gap-0.5 px-3 py-1 text-[10px] font-medium transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -right-0.5 top-0 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-primary text-[8px] font-bold text-primary-foreground">
                  {count}
                </span>
              )}
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;
