import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductBySlug } from "@/data/products";
import { getReviewsByProductId } from "@/data/reviews";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Star, Heart, Minus, Plus, Truck, ShieldCheck, MessageCircle, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const sizeChart = [
  { size: "S", chest: '36-38"', waist: '30-32"' },
  { size: "M", chest: '38-40"', waist: '32-34"' },
  { size: "L", chest: '40-42"', waist: '34-36"' },
  { size: "XL", chest: '42-44"', waist: '36-38"' },
  { size: "XXL", chest: '44-46"', waist: '38-40"' },
];

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");
  const reviews = product ? getReviewsByProductId(product.id) : [];
  const { addItem } = useCart();
  const { toggleItem, isInWishlist } = useWishlist();

  const [selectedSize, setSelectedSize] = useState("");

  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(0);

  if (!product) {
    return (
      <main className="container py-20 text-center">
        <h1 className="font-display text-2xl font-bold">Product not found</h1>
        <Button asChild className="mt-4"><Link to="/products">Browse Products</Link></Button>
      </main>
    );
  }

  const saved = product.mrp - product.price;
  const discount = Math.round((saved / product.mrp) * 100);

  const handleAddToCart = () => {
    if (!selectedSize) { toast.error("Please select a size"); return; }

    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      quantity,
      image: product.images[0],
    });
    toast.success(`${product.name} added to cart!`);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    if (selectedSize) {
      window.location.href = "/checkout";
    }
  };

  const whatsappMsg = encodeURIComponent(
    `Hi WE-MEN! I'm interested in:\n\n*${product.name}*\nSize: ${selectedSize || "Not selected"}\nPrice: ₹${product.price}\n\nPlease help me place my order.`
  );

  return (
    <main className="pb-24 md:pb-12">
      <div className="container py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link> / <Link to="/products" className="hover:text-primary">Products</Link> / <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Images */}
          <div>
            <div className="aspect-[4/5] overflow-hidden rounded-xl bg-muted">
              <img src={product.images[mainImage]} alt={product.name} className="h-full w-full object-cover" />
            </div>
            <div className="mt-3 flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setMainImage(i)}
                  className={`aspect-square w-20 overflow-hidden rounded-lg border-2 transition-colors ${mainImage === i ? "border-primary" : "border-transparent"}`}
                >
                  <img src={img} alt={`${product.name} ${i + 1}`} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <Badge className="bg-primary text-primary-foreground">{product.categoryBadge}</Badge>
            <h1 className="mt-3 font-display text-3xl font-bold md:text-4xl">{product.name}</h1>

            <div className="mt-2 flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"}`} />
                ))}
              </div>
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
            </div>

            <div className="mt-4 flex items-baseline gap-3">
              <span className="font-price text-3xl font-bold">₹{product.price}</span>
              <span className="font-price text-lg text-muted-foreground line-through">₹{product.mrp}</span>
              <Badge variant="secondary" className="text-success">You Save ₹{saved} ({discount}%)</Badge>
            </div>

            <p className="mt-4 text-muted-foreground">{product.shortDescription}</p>

            {/* Size */}
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <h4 className="font-display text-sm font-semibold">Select Size</h4>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-sm text-primary hover:underline">View Size Guide</button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader><DialogTitle>Size Guide</DialogTitle></DialogHeader>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="py-2 text-left">Size</th>
                          <th className="py-2 text-left">Chest</th>
                          <th className="py-2 text-left">Waist</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sizeChart.map((s) => (
                          <tr key={s.size} className="border-b">
                            <td className="py-2 font-medium">{s.size}</td>
                            <td className="py-2">{s.chest}</td>
                            <td className="py-2">{s.waist}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                      selectedSize === size ? "border-primary bg-primary text-primary-foreground" : "hover:border-primary"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>



            {/* Quantity */}
            <div className="mt-6">
              <h4 className="font-display text-sm font-semibold">Quantity</h4>
              <div className="mt-2 flex items-center gap-3">
                <Button variant="outline" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus className="h-4 w-4" /></Button>
                <span className="w-8 text-center font-medium">{quantity}</span>
                <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}><Plus className="h-4 w-4" /></Button>
              </div>
            </div>

            {/* Stock */}
            <div className="mt-4 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-success" />
              <span className="text-sm text-success">In Stock — Ships in 2-3 days</span>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-3">
              <Button onClick={handleAddToCart} size="lg" className="flex-1 bg-primary text-primary-foreground hover:bg-accent">
                Add to Cart
              </Button>
              <Button onClick={handleBuyNow} variant="outline" size="lg" className="flex-1">
                Buy Now
              </Button>
              <Button variant="outline" size="icon" className="h-11 w-11" onClick={() => { toggleItem(product.id); toast.success(isInWishlist(product.id) ? "Removed" : "Added to wishlist"); }}>
                <Heart className={`h-5 w-5 ${isInWishlist(product.id) ? "fill-primary text-primary" : ""}`} />
              </Button>
            </div>

            {/* WhatsApp order */}
            <a
              href={`https://wa.me/919000000000?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-[#25D366] px-4 py-2.5 text-sm font-medium text-[#25D366] transition-colors hover:bg-[#25D366]/10"
            >
              <MessageCircle className="h-4 w-4" /> Order via WhatsApp
            </a>

            {/* Trust */}
            <div className="mt-6 flex flex-wrap gap-4">
              {[
                { icon: Truck, text: "Free Delivery" },
                { icon: ShieldCheck, text: "7-Day Exchange" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Icon className="h-4 w-4" /> {text}
                </div>
              ))}
            </div>

            {/* Accordion */}
            <Accordion type="single" collapsible className="mt-8">
              <AccordionItem value="description">
                <AccordionTrigger className="font-display font-semibold">Full Description</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">{product.fullDescription}</p>
                  <ul className="mt-4 space-y-2">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-success" /> {f}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="fabric">
                <AccordionTrigger className="font-display font-semibold">Fabric & Care</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm font-medium">{product.fabricComposition}</p>
                  <ul className="mt-3 space-y-1">
                    {product.careInstructions.map((c) => (
                      <li key={c} className="text-sm text-muted-foreground">• {c}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Reviews */}
        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold">Customer Reviews</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {reviews.map((r) => (
              <div key={r.id} className="rounded-xl border bg-card p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{r.name}</p>
                      <p className="text-xs text-muted-foreground">{r.location}</p>
                    </div>
                  </div>
                  {r.verified && <Badge variant="secondary" className="text-xs"><CheckCircle className="mr-1 h-3 w-3" /> Verified</Badge>}
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`h-3 w-3 ${i < r.rating ? "fill-primary text-primary" : "text-muted"}`} />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">{r.date}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{r.review}</p>
                <p className="mt-2 text-xs text-muted-foreground">{r.helpful} people found this helpful</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Sticky mobile bar */}
      <div className="fixed bottom-14 left-0 right-0 z-40 border-t bg-background/95 p-3 backdrop-blur md:hidden">
        <div className="flex items-center gap-3">
          <div>
            <span className="font-price text-lg font-bold">₹{product.price}</span>
            <span className="ml-1 font-price text-xs text-muted-foreground line-through">₹{product.mrp}</span>
          </div>
          <Button onClick={handleAddToCart} className="flex-1 bg-primary text-primary-foreground hover:bg-accent">
            Add to Cart
          </Button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
