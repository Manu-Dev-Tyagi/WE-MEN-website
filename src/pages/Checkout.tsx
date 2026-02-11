import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { indianStates } from "@/data/indianStates";
import { Lock, CreditCard, Truck } from "lucide-react";
import { toast } from "sonner";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address1 || !form.city || !form.state || !form.pincode) {
      toast.error("Please fill all required fields");
      return;
    }
    if (form.pincode.length !== 6) {
      toast.error("PIN Code must be 6 digits");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      clearCart();
      navigate("/order-confirmation");
    }, 1500);
  };

  if (items.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <main className="pb-24 md:pb-12">
      <div className="container py-8">
        <h1 className="font-display text-3xl font-bold">Secure Checkout</h1>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-8 lg:grid-cols-3">
          {/* Shipping form */}
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-xl border bg-card p-6">
              <h3 className="font-display text-lg font-semibold">Shipping Details</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <Label>Full Name *</Label>
                  <Input value={form.name} onChange={(e) => handleChange("name", e.target.value)} required />
                </div>
                <div>
                  <Label>Mobile Number *</Label>
                  <Input value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="+91" required />
                </div>
                <div className="sm:col-span-2">
                  <Label>Email</Label>
                  <Input type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} />
                </div>
                <div className="sm:col-span-2">
                  <Label>Address Line 1 *</Label>
                  <Input value={form.address1} onChange={(e) => handleChange("address1", e.target.value)} required />
                </div>
                <div className="sm:col-span-2">
                  <Label>Address Line 2</Label>
                  <Input value={form.address2} onChange={(e) => handleChange("address2", e.target.value)} />
                </div>
                <div>
                  <Label>City *</Label>
                  <Input value={form.city} onChange={(e) => handleChange("city", e.target.value)} required />
                </div>
                <div>
                  <Label>State *</Label>
                  <Select value={form.state} onValueChange={(v) => handleChange("state", v)}>
                    <SelectTrigger><SelectValue placeholder="Select state" /></SelectTrigger>
                    <SelectContent>
                      {indianStates.map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>PIN Code *</Label>
                  <Input value={form.pincode} onChange={(e) => handleChange("pincode", e.target.value.replace(/\D/g, "").slice(0, 6))} maxLength={6} required />
                </div>
              </div>
              <p className="mt-4 flex items-center gap-2 text-sm text-success">
                <Truck className="h-4 w-4" /> Cash on Delivery Available Across India
              </p>
            </div>

            {/* Payment */}
            <div className="rounded-xl border bg-card p-6">
              <h3 className="font-display text-lg font-semibold">Payment Method</h3>
              <div className="mt-4 space-y-3">
                <label className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition-colors ${paymentMethod === "cod" ? "border-primary bg-primary/5" : ""}`}>
                  <input type="radio" name="payment" value="cod" checked={paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")} className="accent-[hsl(40,72%,66%)]" />
                  <Truck className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Cash on Delivery</p>
                    <p className="text-sm text-muted-foreground">Pay when your order arrives</p>
                  </div>
                </label>
                <label className="flex cursor-not-allowed items-center gap-3 rounded-lg border p-4 opacity-50">
                  <input type="radio" name="payment" disabled />
                  <CreditCard className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Razorpay (UPI/Card/NetBanking)</p>
                    <p className="text-sm text-muted-foreground">Coming soon</p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div className="lg:sticky lg:top-24">
            <div className="rounded-xl border bg-card p-6">
              <h3 className="font-display text-lg font-semibold">Order Summary</h3>
              <div className="mt-4 space-y-3">
                {items.map((item) => (
                  <div key={`${item.productId}-${item.size}-${item.color}`} className="flex items-center gap-3">
                    <div className="h-12 w-10 shrink-0 overflow-hidden rounded bg-muted">
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1 text-sm">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.size} · {item.color} · Qty: {item.quantity}</p>
                    </div>
                    <span className="font-price text-sm font-medium">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 space-y-2 border-t pt-4 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span className="font-price">₹{totalPrice}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Delivery</span><span className="text-success">FREE</span></div>
                <div className="flex justify-between border-t pt-2 text-base"><span className="font-semibold">Total</span><span className="font-price text-lg font-bold">₹{totalPrice}</span></div>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">Your order will be confirmed via SMS or call within 24 hours</p>
              <Button type="submit" className="mt-4 w-full bg-primary text-primary-foreground hover:bg-accent" disabled={loading}>
                {loading ? "Processing..." : "Place Order"}
              </Button>
              <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                <Lock className="h-3 w-3" /> Secure & encrypted checkout
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Checkout;
