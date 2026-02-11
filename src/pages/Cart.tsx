import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const CartPage = () => {
  const { items, updateQuantity, removeItem, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <main className="container flex min-h-[60vh] flex-col items-center justify-center pb-24 text-center">
        <ShoppingBag className="h-16 w-16 text-muted-foreground/40" />
        <h1 className="mt-4 font-display text-2xl font-bold">Your Cart is Empty</h1>
        <p className="mt-2 text-muted-foreground">Your confidence essentials are waiting</p>
        <Button asChild className="mt-6 bg-primary text-primary-foreground hover:bg-accent">
          <Link to="/products">Continue Shopping</Link>
        </Button>
      </main>
    );
  }

  return (
    <main className="pb-24 md:pb-12">
      <div className="container py-8">
        <h1 className="font-display text-3xl font-bold">Your Cart</h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {/* Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item) => (
                <div key={`${item.productId}-${item.size}-${item.color}`} className="flex gap-4 rounded-xl border bg-card p-4">
                  <div className="h-24 w-20 shrink-0 overflow-hidden rounded-lg bg-muted">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="font-display font-semibold">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">Size: {item.size} · Color: {item.color}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.productId, item.size, item.color, item.quantity - 1)}>
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
                        <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.productId, item.size, item.color, item.quantity + 1)}>
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-price font-semibold">₹{item.price * item.quantity}</span>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => { removeItem(item.productId, item.size, item.color); toast.success("Item removed"); }}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="lg:sticky lg:top-24">
            <div className="rounded-xl border bg-card p-6">
              <h3 className="font-display text-lg font-semibold">Order Summary</h3>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-price font-medium">₹{totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery</span>
                  <span className="font-medium text-success">FREE</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-base">
                    <span className="font-semibold">Total</span>
                    <span className="font-price text-lg font-bold">₹{totalPrice}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <Input placeholder="Promo code" className="text-sm" />
              </div>

              <Button asChild className="mt-4 w-full bg-primary text-primary-foreground hover:bg-accent">
                <Link to="/checkout">Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
