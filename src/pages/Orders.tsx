import { Link } from "react-router-dom";
import { dummyOrders } from "@/data/orders";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, ShoppingBag } from "lucide-react";

const statusColor = {
  Delivered: "bg-success/10 text-success border-success/20",
  Shipped: "bg-primary/10 text-primary border-primary/20",
  Processing: "bg-muted text-muted-foreground",
};

const Orders = () => {
  const orders = dummyOrders;

  return (
    <main className="pb-24 md:pb-12">
      <div className="container py-8">
        <h1 className="font-display text-3xl font-bold">My Orders</h1>

        {orders.length === 0 ? (
          <div className="flex min-h-[40vh] flex-col items-center justify-center text-center">
            <Package className="h-16 w-16 text-muted-foreground/40" />
            <h2 className="mt-4 font-display text-xl font-semibold">No orders yet</h2>
            <p className="mt-1 text-muted-foreground">You haven't placed any orders yet</p>
            <Button asChild className="mt-4 bg-primary text-primary-foreground hover:bg-accent">
              <Link to="/products"><ShoppingBag className="mr-2 h-4 w-4" /> Start Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            {orders.map((order) => (
              <div key={order.orderId} className="rounded-xl border bg-card p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-display font-semibold">Order #{order.orderId}</p>
                    <p className="text-sm text-muted-foreground">{new Date(order.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>
                  </div>
                  <Badge className={statusColor[order.status]}>{order.status}</Badge>
                </div>
                <div className="mt-4 space-y-2">
                  {order.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-12 w-10 shrink-0 overflow-hidden rounded bg-muted">
                        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex-1 text-sm">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.size} · Qty: {item.qty}</p>
                      </div>
                      <span className="font-price text-sm font-medium">₹{item.price * item.qty}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap items-center justify-between border-t pt-4">
                  <div className="text-sm text-muted-foreground">{order.deliveryAddress}</div>
                  <p className="font-price font-semibold">Total: ₹{order.total}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Orders;
