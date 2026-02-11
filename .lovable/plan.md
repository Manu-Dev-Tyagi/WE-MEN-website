

# WE-MEN — Complete E-commerce Demo Website

## Brand Identity
**"Confidence. Shaped Within."** — India's first structured basewear brand. Warm mustard gold (#E8C468) as primary accent, deep charcoal for text, modern minimalist aesthetic that feels masculine yet approachable.

---

## Pages & Features

### 1. Homepage
- **Full-screen hero** with dark gradient, bold "8+ Hours of Comfort" headline, two CTAs (Shop Now + Explore Collection)
- **Why Choose WE-MEN** — 4-column feature grid (Compression, Sweat Control, Invisible Fit, Indian Climate)
- **Customer Promise** — centered "Look Better. Feel Stronger. Move Freely." section
- **Trust Badges** — Secure Checkout, 7-Day Exchange, COD Available, Made for Indian Climate
- **Featured Products** — 3-4 product cards linking to products page
- **Testimonials** — 3-4 customer testimonials with Indian names, cities, professions

### 2. Products Page
- **Product grid** (3-col desktop, 2-col tablet, 1-col mobile) with 5 products: WE-TUCK, WE-SWEAT, WE-PRESS, WE-HANDLE, WE-SUIT
- **Filters** — Category, Price range, Size, In Stock toggle
- **Sort** — Featured, Price Low/High, Newest
- **Search bar** with auto-suggestions
- Each card: image carousel, price with MRP strikethrough, savings badge, quick features, size/color selectors, Add to Cart

### 3. Individual Product Page
- **Image gallery** with 3 photos, thumbnails, zoom on hover, lightbox view
- **Product details panel** — category badge, name, star rating (dummy), price/savings, short description
- **Size Guide modal** with chest/waist measurements table
- **Size & color selectors**, quantity picker, stock status
- **Add to Cart + Buy Now** buttons
- **Expandable accordion** — full description, features, fabric composition, care instructions
- **Customer Reviews** — 8-10 reviews per product with Indian names, cities, verified badges, helpful counts
- **Sticky mobile "Add to Cart" bar**

### 4. Cart Page
- Cart items with thumbnails, size/color, price, quantity controls, remove button
- **Empty cart state** with illustration and "Continue Shopping" CTA
- **Order summary sidebar** — subtotal, free delivery, total, promo code input
- **Proceed to Checkout** button
- Cart persisted in localStorage, cart count badge in header

### 5. Checkout Page
- **Two-column layout** — Shipping form (left) + Order summary (right)
- Indian-specific: state dropdown (all Indian states), 6-digit PIN code, +91 phone format
- **Payment options** — COD (default), Razorpay demo modal (UPI/Card/NetBanking simulation)
- **Order confirmation page** with success animation and simulated SMS/email confirmation

### 6. Orders Page (My Orders)
- **Empty state** if no orders, with "Start Shopping" CTA
- **Order cards** with 5-10 dummy orders: order ID, date, status badge (Delivered/Shipped/Processing), product thumbnails, total, View Details & Track Order buttons
- Indian cities as delivery addresses

### 7. Profile Page
- Guest browsing state with simple form: Name, Email, Phone
- Save details to localStorage for faster checkout

### 8. Wishlist Page
- Heart icon on all product cards and product pages
- Saved items grid with remove option
- Share wishlist link (simulated)
- Empty wishlist state

### 9. Size Recommendation Quiz
- "Find Your Perfect Fit" button/page
- 4-step quiz: Height, Weight, Chest size, Primary concern area
- Animated recommendation output suggesting the best product + size
- Option to save result to profile

### 10. Blog Section
- 5-7 articles: "How to Dress for Your Body Type", "Confidence Tips for Men", "Fabric Care Guide", etc.
- Blog listing page + individual article pages
- Clean reading layout with images

### 11. WhatsApp Integration
- **Floating WhatsApp button** on all pages
- "Order via WhatsApp" button on product pages
- Pre-filled message with product name, size, color, price — opens WhatsApp directly

---

## Global Components

### Header/Navigation
- Logo (WE-MEN "W" mark), navigation links, search bar, wishlist icon, cart icon with count badge
- **Mobile**: hamburger menu with slide-out navigation
- Sticky on scroll

### Footer
- 4-column layout: About, Quick Links, Customer Support (email/phone/WhatsApp), Social Media icons
- Bottom bar with copyright + tagline

### Mobile Bottom Navigation Bar
- Home, Products, Cart, Wishlist, Profile — fixed bottom tab bar on mobile

---

## Design & UX Details
- **Color system**: Mustard Gold (#E8C468) CTAs, Deep Charcoal (#2A2A2A) text, Warm White (#FAF9F6) backgrounds, Copper (#B87333) hovers
- **Typography**: Inter/Outfit for headers, Inter for body, Space Grotesk for prices
- **Animations**: Fade-in on scroll, hover lift on cards, smooth page transitions, add-to-cart confirmation animation
- **Loading states**: Skeleton loaders for product cards, shimmer effects
- **Empty states**: Illustrated states for cart, wishlist, orders, search results
- **Accessibility**: ARIA labels, keyboard navigation, focus indicators, alt text
- ₹ currency formatting throughout, "Made in India" badge

---

## Dummy Data
- **30-40 product reviews** with Indian names, cities (Mumbai, Delhi, Bangalore, etc.), natural review text
- **5-10 dummy orders** with realistic Indian addresses and order IDs (WM10001+)
- **3-4 testimonials** with professional headshots (placeholder), names, professions
- All prices in ₹, all content localized for Indian market

