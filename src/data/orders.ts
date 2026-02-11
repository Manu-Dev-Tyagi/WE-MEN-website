export interface OrderItem {
  name: string;
  size: string;
  qty: number;
  price: number;
  image: string;
}

export interface Order {
  orderId: string;
  date: string;
  status: "Delivered" | "Shipped" | "Processing";
  items: OrderItem[];
  total: number;
  deliveryAddress: string;
}

export const dummyOrders: Order[] = [
  {
    orderId: "WM10234",
    date: "2025-01-15",
    status: "Delivered",
    items: [{ name: "WE-CORE", size: "L", qty: 2, price: 899, image: "/images/products/we-tuck-1.png" }],
    total: 1798,
    deliveryAddress: "Mumbai, Maharashtra - 400001",
  },
  {
    orderId: "WM10235",
    date: "2025-01-10",
    status: "Shipped",
    items: [
      { name: "WE-SWEAT", size: "XL", qty: 1, price: 999, image: "/images/products/we-sweat-1.png" },
      { name: "WE-SCULPT", size: "XL", qty: 1, price: 899, image: "/images/products/we-press-1.png" },
    ],
    total: 1898,
    deliveryAddress: "Bangalore, Karnataka - 560001",
  },
  {
    orderId: "WM10236",
    date: "2025-01-05",
    status: "Delivered",
    items: [{ name: "WE-FRAME", size: "L", qty: 1, price: 899, image: "/images/products/we-suit-1.png" }],
    total: 899,
    deliveryAddress: "Delhi, NCR - 110001",
  },
  {
    orderId: "WM10237",
    date: "2024-12-28",
    status: "Delivered",
    items: [
      { name: "WE-EDGE", size: "M", qty: 1, price: 899, image: "/images/products/we-handle-1.png" },
      { name: "WE-CORE", size: "M", qty: 2, price: 899, image: "/images/products/we-tuck-1.png" },
    ],
    total: 2697,
    deliveryAddress: "Pune, Maharashtra - 411001",
  },
  {
    orderId: "WM10238",
    date: "2024-12-20",
    status: "Processing",
    items: [{ name: "WE-FRAME", size: "XXL", qty: 1, price: 899, image: "/images/products/we-suit-1.png" }],
    total: 899,
    deliveryAddress: "Hyderabad, Telangana - 500001",
  },
  {
    orderId: "WM10239",
    date: "2024-12-15",
    status: "Delivered",
    items: [{ name: "WE-SWEAT", size: "L", qty: 3, price: 999, image: "/images/products/we-sweat-1.png" }],
    total: 2997,
    deliveryAddress: "Chennai, Tamil Nadu - 600001",
  },
  {
    orderId: "WM10240",
    date: "2024-12-10",
    status: "Delivered",
    items: [
      { name: "WE-SCULPT", size: "M", qty: 1, price: 899, image: "/images/products/we-press-1.png" },
      { name: "WE-EDGE", size: "M", qty: 1, price: 899, image: "/images/products/we-handle-1.png" },
      { name: "WE-FRAME", size: "M", qty: 1, price: 899, image: "/images/products/we-suit-1.png" },
    ],
    total: 2697,
    deliveryAddress: "Kolkata, West Bengal - 700001",
  },
];
