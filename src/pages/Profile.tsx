import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from "lucide-react";
import { toast } from "sonner";

const PROFILE_KEY = "wemen-profile";

const Profile = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    try {
      const stored = localStorage.getItem(PROFILE_KEY);
      if (stored) setForm(JSON.parse(stored));
    } catch {}
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem(PROFILE_KEY, JSON.stringify(form));
    toast.success("Profile saved!");
  };

  return (
    <main className="pb-24 md:pb-12">
      <div className="container max-w-lg py-8">
        <h1 className="font-display text-3xl font-bold">My Profile</h1>
        <div className="mt-6 rounded-xl border bg-card p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <User className="h-7 w-7 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">You are browsing as a guest</p>
              <p className="text-xs text-muted-foreground">Update your details for faster checkout</p>
            </div>
          </div>

          <form onSubmit={handleSave} className="mt-6 space-y-4">
            <div>
              <Label>Name</Label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
            </div>
            <div>
              <Label>Email</Label>
              <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" />
            </div>
            <div>
              <Label>Phone</Label>
              <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91" />
            </div>
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-accent">Save Details</Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Profile;
