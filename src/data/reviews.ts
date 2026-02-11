export interface Review {
  id: number;
  productId: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  verified: boolean;
  review: string;
  helpful: number;
}

export const reviews: Review[] = [
  // WE-TUCK reviews
  { id: 1, productId: "we-tuck", name: "Rahul Sharma", location: "Mumbai, Maharashtra", rating: 5, date: "January 10, 2025", verified: true, review: "Perfect for Mumbai's humidity! Wore it to office daily for a week. Shirts look much better now. Quality is great.", helpful: 23 },
  { id: 2, productId: "we-tuck", name: "Arjun Patel", location: "Bangalore, Karnataka", rating: 4, date: "January 8, 2025", verified: true, review: "Good product. Size L fits perfectly (I'm 5'10\", 82kg). Slight improvement in posture too. Would buy again.", helpful: 15 },
  { id: 3, productId: "we-tuck", name: "Vikram Singh", location: "Delhi, NCR", rating: 5, date: "January 5, 2025", verified: true, review: "Exactly what I needed for my brother's wedding. Looked great in my sherwani. Very comfortable even in winter layering.", helpful: 31 },
  { id: 4, productId: "we-tuck", name: "Suresh Menon", location: "Chennai, Tamil Nadu", rating: 4, date: "December 28, 2024", verified: true, review: "Quality is better than Amazon products I've tried before. Fabric is breathable even in Chennai heat. Happy with purchase.", helpful: 12 },
  { id: 5, productId: "we-tuck", name: "Amit Deshmukh", location: "Pune, Maharashtra", rating: 5, date: "December 22, 2024", verified: true, review: "Comfortable even in Bangalore traffic (I commute daily). No irritation, no rolling. Best tummy tucker I've used.", helpful: 19 },
  { id: 6, productId: "we-tuck", name: "Pradeep Kumar", location: "Hyderabad, Telangana", rating: 5, date: "December 18, 2024", verified: true, review: "Wore this to a formal dinner. Wife noticed the difference immediately. Very happy with the results.", helpful: 27 },
  { id: 7, productId: "we-tuck", name: "Rajesh Iyer", location: "Kochi, Kerala", rating: 4, date: "December 15, 2024", verified: true, review: "Delivery was fast. Product quality is premium. Only giving 4 stars because I wish there were more color options.", helpful: 8 },
  { id: 8, productId: "we-tuck", name: "Karthik Reddy", location: "Visakhapatnam, AP", rating: 5, date: "December 10, 2024", verified: true, review: "Size guide was accurate. XL fits me well at 95kg. Very effective compression without being uncomfortable.", helpful: 14 },

  // WE-SWEAT reviews
  { id: 9, productId: "we-sweat", name: "Manish Agarwal", location: "Kolkata, West Bengal", rating: 5, date: "January 12, 2025", verified: true, review: "Game changer for Kolkata summers! No more sweat patches on my office shirts. Highly recommend.", helpful: 34 },
  { id: 10, productId: "we-sweat", name: "Deepak Nair", location: "Trivandrum, Kerala", rating: 4, date: "January 9, 2025", verified: true, review: "Good moisture management. Kerala humidity is no joke and this handles it well. Slight discomfort first day but fine after.", helpful: 11 },
  { id: 11, productId: "we-sweat", name: "Sanjay Gupta", location: "Jaipur, Rajasthan", rating: 5, date: "January 6, 2025", verified: true, review: "Perfect for Rajasthan heat. Stays dry even when it's 45°C outside. Best investment for summer wardrobe.", helpful: 22 },
  { id: 12, productId: "we-sweat", name: "Nikhil Joshi", location: "Ahmedabad, Gujarat", rating: 5, date: "January 3, 2025", verified: true, review: "Ordered 3 pieces. Using daily for work. No odor even after full day wear. Washing is easy too.", helpful: 18 },
  { id: 13, productId: "we-sweat", name: "Rohan Mehta", location: "Mumbai, Maharashtra", rating: 4, date: "December 30, 2024", verified: true, review: "Good quality. The mesh zones really help with ventilation. Mumbai local train commute tested and approved!", helpful: 25 },
  { id: 14, productId: "we-sweat", name: "Arun Krishnan", location: "Coimbatore, Tamil Nadu", rating: 5, date: "December 25, 2024", verified: true, review: "Excellent product. No more embarrassing sweat marks during presentations. Confidence booster for sure.", helpful: 16 },

  // WE-PRESS reviews
  { id: 15, productId: "we-press", name: "Varun Kapoor", location: "Delhi, NCR", rating: 5, date: "January 11, 2025", verified: true, review: "This changed how my shirts fit. Chest area looks much more defined. Wearing it daily to office now.", helpful: 29 },
  { id: 16, productId: "we-press", name: "Anand Sharma", location: "Lucknow, UP", rating: 4, date: "January 7, 2025", verified: true, review: "Good compression. Takes a day to get used to but after that very comfortable. Posture has improved noticeably.", helpful: 13 },
  { id: 17, productId: "we-press", name: "Gaurav Pandey", location: "Bhopal, MP", rating: 5, date: "January 2, 2025", verified: true, review: "Finally a product that actually delivers what it promises. Invisible under polo shirts. Very satisfied.", helpful: 20 },
  { id: 18, productId: "we-press", name: "Siddharth Rao", location: "Bangalore, Karnataka", rating: 4, date: "December 28, 2024", verified: true, review: "Comfortable for 8+ hours at my IT job. No itching or discomfort. Would rate 5 if slightly cheaper.", helpful: 9 },
  { id: 19, productId: "we-press", name: "Harsh Vardhan", location: "Chandigarh, Punjab", rating: 5, date: "December 20, 2024", verified: true, review: "Bought for gym layering. Perfect compression during workouts. Also wear under formal shirts. Versatile product.", helpful: 17 },

  // WE-HANDLE reviews
  { id: 20, productId: "we-handle", name: "Vivek Mishra", location: "Indore, MP", rating: 5, date: "January 13, 2025", verified: true, review: "Love handles problem solved! Tucked shirts look so much better now. Wife is impressed with the transformation.", helpful: 21 },
  { id: 21, productId: "we-handle", name: "Ajay Thakur", location: "Nagpur, Maharashtra", rating: 4, date: "January 10, 2025", verified: true, review: "Anti-slip grip actually works. Doesn't ride up even during long sitting hours. Good product at this price.", helpful: 14 },
  { id: 22, productId: "we-handle", name: "Mohan Das", location: "Thiruvananthapuram, Kerala", rating: 5, date: "January 4, 2025", verified: true, review: "Ordered online, received in 3 days. Quality exceeded expectations. Smooth finish under cotton shirts.", helpful: 10 },
  { id: 23, productId: "we-handle", name: "Rakesh Yadav", location: "Patna, Bihar", rating: 4, date: "December 29, 2024", verified: true, review: "Good for daily office wear. Waistline looks much cleaner in formal trousers now. Would recommend.", helpful: 8 },

  // WE-SUIT reviews
  { id: 24, productId: "we-suit", name: "Abhishek Banerjee", location: "Kolkata, West Bengal", rating: 5, date: "January 14, 2025", verified: true, review: "The complete package! Full body shaping is exactly what I needed for my wedding season. Looked amazing in every outfit.", helpful: 38 },
  { id: 25, productId: "we-suit", name: "Naveen Kumar", location: "Hyderabad, Telangana", rating: 5, date: "January 11, 2025", verified: true, review: "Incredible product. Wore under my 3-piece suit for board meeting. Total confidence. Worth every rupee.", helpful: 31 },
  { id: 26, productId: "we-suit", name: "Sachin Tendulkar", location: "Mumbai, Maharashtra", rating: 4, date: "January 8, 2025", verified: true, review: "Full torso coverage is excellent. Only slight issue is putting it on takes practice. But results are worth it.", helpful: 22 },
  { id: 27, productId: "we-suit", name: "Pranav Desai", location: "Surat, Gujarat", rating: 5, date: "January 5, 2025", verified: true, review: "Best shapewear for men in India. Tried many brands before this. Nothing comes close in quality and comfort.", helpful: 26 },
  { id: 28, productId: "we-suit", name: "Ashwin Raman", location: "Chennai, Tamil Nadu", rating: 5, date: "December 31, 2024", verified: true, review: "Premium quality fabric. No irritation even in Chennai weather. Invisible under formal suits. 10/10 recommend.", helpful: 19 },
  { id: 29, productId: "we-suit", name: "Divyanshu Chauhan", location: "Dehradun, Uttarakhand", rating: 4, date: "December 27, 2024", verified: true, review: "Bought for a friend's wedding. The transformation was noticeable. Got many compliments on how I looked.", helpful: 15 },
  { id: 30, productId: "we-suit", name: "Kunal Shah", location: "Pune, Maharashtra", rating: 5, date: "December 22, 2024", verified: true, review: "Business meetings, parties, gym — I use it everywhere. Full body compression without compromising movement. Amazing.", helpful: 24 },
];

export const getReviewsByProductId = (productId: string) =>
  reviews.filter((r) => r.productId === productId);
