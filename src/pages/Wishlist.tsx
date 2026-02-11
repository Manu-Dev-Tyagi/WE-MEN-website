import { Link } from "react-router-dom";
import { useWishlist } from "@/context/WishlistContext";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";

const Wishlist = () => {
  const { items: wishlistIds } = useWishlist();
  const wishlistProducts = products.filter((p) => wishlistIds.includes(p.id));

  return (
    <main className="pb-24 md:pb-12">
      <div className="container py-8">
        <h1 className="font-display text-3xl font-bold">My Wishlist</h1>

        {wishlistProducts.length === 0 ? (
          <div className="flex min-h-[40vh] flex-col items-center justify-center text-center">
            <Heart className="h-16 w-16 text-muted-foreground/40" />
            <h2 className="mt-4 font-display text-xl font-semibold">Your wishlist is empty</h2>
            <p className="mt-1 text-muted-foreground">Start adding products you love</p>
            <Button asChild className="mt-4 bg-primary text-primary-foreground hover:bg-accent">
              <Link to="/products"><ShoppingBag className="mr-2 h-4 w-4" /> Browse Products</Link>
            </Button>
          </div>
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {wishlistProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Wishlist;
