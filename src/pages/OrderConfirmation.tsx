import { Link } from "react-router-dom";
import { CheckCircle, Package, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const OrderConfirmation = () => {
  const orderId = `WM${Math.floor(10000 + Math.random() * 90000)}`;

  return (
    <main className="container flex min-h-[60vh] flex-col items-center justify-center py-12 text-center">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", duration: 0.5 }}>
        <CheckCircle className="mx-auto h-20 w-20 text-success" />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <h1 className="mt-6 font-display text-3xl font-bold">Order Placed Successfully!</h1>
        <p className="mt-2 text-muted-foreground">Thank you for choosing WE-MEN</p>
        <div className="mt-6 rounded-xl border bg-card p-6">
          <div className="flex items-center justify-center gap-2">
            <Package className="h-5 w-5 text-primary" />
            <span className="font-display text-lg font-semibold">Order #{orderId}</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            You'll receive a confirmation SMS/call within 24 hours.
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Estimated delivery: 2-5 business days for metros, 3-7 for other cities.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-accent">
            <Link to="/orders">View My Orders <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/products">Continue Shopping</Link>
          </Button>
        </div>
      </motion.div>
    </main>
  );
};

export default OrderConfirmation;
