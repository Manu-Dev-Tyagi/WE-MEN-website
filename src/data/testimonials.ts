export interface Testimonial {
  id: number;
  name: string;
  location: string;
  profession: string;
  quote: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Mumbai",
    profession: "Marketing Manager",
    quote: "WE-MEN changed how I show up at work. My shirts fit better, my posture improved, and honestly — I just feel more confident walking into meetings.",
    rating: 5,
    image: "/images/testimonials/user-1.png",
  },
  {
    id: 2,
    name: "Arjun Patel",
    location: "Bangalore",
    profession: "Software Engineer",
    quote: "I sit for 10+ hours coding daily. WE-TUCK gives me support without any discomfort. It's now part of my daily routine, like brushing my teeth.",
    rating: 5,
    image: "/images/testimonials/user-2.png",
  },
  {
    id: 3,
    name: "Vikram Malhotra",
    location: "Delhi",
    profession: "Business Owner",
    quote: "For my brother's wedding, I wore WE-SUIT under my sherwani. The transformation was incredible. Got so many compliments on how fit I looked.",
    rating: 5,
    image: "/images/testimonials/user-3.png",
  },
  {
    id: 4,
    name: "Deepak Reddy",
    location: "Hyderabad",
    profession: "Chartered Accountant",
    quote: "Finally, a brand that understands Indian men. The fabric breathes even in Hyderabad heat. This is not your regular vest — it's engineered for comfort.",
    rating: 5,
    image: "/images/testimonials/user-4.png",
  },
];
