import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();
  const { toggleItem, isInWishlist } = useWishlist();
  const saved = product.mrp - product.price;
  const discount = Math.round((saved / product.mrp) * 100);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      size: product.sizes[2],
      quantity: 1,
      image: product.images[0],
    });
    toast.success(`${product.name} added to cart!`);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleItem(product.id);
    toast.success(isInWishlist(product.id) ? "Removed from wishlist" : "Added to wishlist");
  };

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="relative overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-muted">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <button
            onClick={handleToggleWishlist}
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 backdrop-blur transition-colors hover:bg-background"
            aria-label="Toggle wishlist"
          >
            <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? "fill-primary text-primary" : ""}`} />
          </button>
          <Badge className="absolute left-3 top-3 bg-primary text-primary-foreground">{product.categoryBadge}</Badge>
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="font-display text-lg font-bold">{product.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-1">{product.shortDescription}</p>

          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-price text-xl font-bold">₹{product.price}</span>
            <span className="font-price text-sm text-muted-foreground line-through">₹{product.mrp}</span>
            <Badge variant="secondary" className="text-xs font-semibold text-success">SAVE ₹{saved}</Badge>
          </div>

          {/* Stock */}
          {product.inStock && (
            <div className="mt-2 flex items-center gap-1.5">
              <div className="h-2 w-2 rounded-full bg-success" />
              <span className="text-xs text-success">In Stock</span>
            </div>
          )}

          <Button onClick={handleAddToCart} className="mt-4 w-full bg-primary text-primary-foreground hover:bg-accent">
            Add to Cart
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
