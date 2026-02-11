import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const categories = [
  { value: "all", label: "All Categories" },
  { value: "tummy-control", label: "Tummy Control" },
  { value: "sweat-control", label: "Sweat Control" },
  { value: "chest-shaping", label: "Chest Shaping" },
  { value: "waist-control", label: "Waist Control" },
  { value: "full-body", label: "Full Body Shaping" },
];

const sizes = ["S", "M", "L", "XL", "XXL"];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);


  useEffect(() => {
    const q = searchParams.get("q");
    if (q !== null) {
      setSearch(q);
    }
  }, [searchParams]);

  const filtered = useMemo(() => {
    let result = [...products];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) => p.name.toLowerCase().includes(q) || p.shortDescription.toLowerCase().includes(q) || p.categoryBadge.toLowerCase().includes(q)
      );
    }
    if (category !== "all") result = result.filter((p) => p.category === category);
    if (selectedSizes.length > 0) result = result.filter((p) => selectedSizes.some((s) => p.sizes.includes(s)));
    if (inStockOnly) result = result.filter((p) => p.inStock);

    switch (sortBy) {
      case "price-low": result.sort((a, b) => a.price - b.price); break;
      case "price-high": result.sort((a, b) => b.price - a.price); break;
      case "newest": result.reverse(); break;
    }

    return result;
  }, [search, category, sortBy, selectedSizes, inStockOnly]);

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) => (prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]));
  };

  const clearFilters = () => {
    setSearch("");
    setCategory("all");
    setSortBy("featured");
    setSelectedSizes([]);
    setInStockOnly(false);
  };

  const FiltersPanel = () => (
    <div className="space-y-6">
      <div>
        <h4 className="mb-2 font-display text-sm font-semibold">Category</h4>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent>
            {categories.map((c) => (
              <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <h4 className="mb-2 font-display text-sm font-semibold">Size</h4>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => toggleSize(size)}
              className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors ${
                selectedSizes.includes(size)
                  ? "border-primary bg-primary text-primary-foreground"
                  : "hover:border-primary"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="instock" checked={inStockOnly} onCheckedChange={(c) => setInStockOnly(!!c)} />
        <Label htmlFor="instock">In Stock Only</Label>
      </div>
      <Button variant="outline" size="sm" onClick={clearFilters}>
        <X className="mr-1 h-3 w-3" /> Clear Filters
      </Button>
    </div>
  );

  return (
    <main className="pb-24 md:pb-12">
      <div className="bg-foreground py-12 text-background">
        <div className="container">
          <h1 className="font-display text-3xl font-bold md:text-4xl">Our Performance Collection</h1>
          <p className="mt-2 text-background/60">
            Premium shaping innerwear designed for everyday wear, formal dressing, gym layering, and special occasions.
          </p>
        </div>
      </div>

      <div className="container py-8">
        <div className="mb-6 flex flex-wrap items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={search}
              onChange={(e) => {
                const val = e.target.value;
                setSearch(val);
                if (val) {
                  setSearchParams({ q: val }, { replace: true });
                } else {
                  setSearchParams({}, { replace: true });
                }
              }}
              className="pl-10"
            />
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
          {/* Mobile filter button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="md:hidden">
                <SlidersHorizontal className="mr-2 h-4 w-4" /> Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <h3 className="mb-6 font-display text-lg font-bold">Filters</h3>
              <FiltersPanel />
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex gap-8">
          {/* Desktop filters */}
          <aside className="hidden w-56 shrink-0 md:block">
            <FiltersPanel />
          </aside>

          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="text-lg font-medium text-muted-foreground">No products found</p>
                <p className="mt-1 text-sm text-muted-foreground">Try adjusting your filters</p>
                <Button variant="outline" className="mt-4" onClick={clearFilters}>Clear Filters</Button>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
