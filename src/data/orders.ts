export interface OrderItem {
  name: string;
  size: string;
  color: string;
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
    items: [{ name: "WE-TUCK", size: "L", color: "Black", qty: 2, price: 899, image: "/placeholder.svg" }],
    total: 1798,
    deliveryAddress: "Mumbai, Maharashtra - 400001",
  },
  {
    orderId: "WM10235",
    date: "2025-01-10",
    status: "Shipped",
    items: [
      { name: "WE-SWEAT", size: "XL", color: "Navy", qty: 1, price: 999, image: "/placeholder.svg" },
      { name: "WE-PRESS", size: "XL", color: "Charcoal", qty: 1, price: 899, image: "/placeholder.svg" },
    ],
    total: 1898,
    deliveryAddress: "Bangalore, Karnataka - 560001",
  },
  {
    orderId: "WM10236",
    date: "2025-01-05",
    status: "Delivered",
    items: [{ name: "WE-SUIT", size: "L", color: "Black", qty: 1, price: 899, image: "/placeholder.svg" }],
    total: 899,
    deliveryAddress: "Delhi, NCR - 110001",
  },
  {
    orderId: "WM10237",
    date: "2024-12-28",
    status: "Delivered",
    items: [
      { name: "WE-HANDLE", size: "M", color: "Charcoal", qty: 1, price: 899, image: "/placeholder.svg" },
      { name: "WE-TUCK", size: "M", color: "Black", qty: 2, price: 899, image: "/placeholder.svg" },
    ],
    total: 2697,
    deliveryAddress: "Pune, Maharashtra - 411001",
  },
  {
    orderId: "WM10238",
    date: "2024-12-20",
    status: "Processing",
    items: [{ name: "WE-SUIT", size: "XXL", color: "Navy", qty: 1, price: 899, image: "/placeholder.svg" }],
    total: 899,
    deliveryAddress: "Hyderabad, Telangana - 500001",
  },
  {
    orderId: "WM10239",
    date: "2024-12-15",
    status: "Delivered",
    items: [{ name: "WE-SWEAT", size: "L", color: "Black", qty: 3, price: 999, image: "/placeholder.svg" }],
    total: 2997,
    deliveryAddress: "Chennai, Tamil Nadu - 600001",
  },
  {
    orderId: "WM10240",
    date: "2024-12-10",
    status: "Delivered",
    items: [
      { name: "WE-PRESS", size: "M", color: "Black", qty: 1, price: 899, image: "/placeholder.svg" },
      { name: "WE-HANDLE", size: "M", color: "Navy", qty: 1, price: 899, image: "/placeholder.svg" },
      { name: "WE-SUIT", size: "M", color: "Charcoal", qty: 1, price: 899, image: "/placeholder.svg" },
    ],
    total: 2697,
    deliveryAddress: "Kolkata, West Bengal - 700001",
  },
];
