
export interface Product {
  id: string;
  title: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  location: string;
  seller: string;
  badge?: string;
}

export const CATEGORIES = [
  { id: 'electronics', name: 'Electronics', icon: 'Smartphone' },
  { id: 'fashion', name: 'Fashion', icon: 'Shirt' },
  { id: 'home', name: 'Home & Living', icon: 'Home' },
  { id: 'beauty', name: 'Beauty', icon: 'Sparkles' },
  { id: 'food', name: 'Local Food', icon: 'Utensils' },
  { id: 'motors', name: 'Motors', icon: 'Car' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Cebu Dried Mangoes (Premium Export Quality) - 200g',
    price: 245.00,
    rating: 4.9,
    reviews: 1250,
    image: 'https://images.unsplash.com/photo-1621245876408-72433f868c2f?auto=format&fit=crop&q=80&w=600',
    category: 'food',
    location: 'Cebu City',
    seller: 'Cebu Best Pasalubong',
    badge: 'Best Seller'
  },
  {
    id: '2',
    title: 'Wireless Earbuds Noise Cancelling (Local Warranty)',
    price: 899.00,
    rating: 4.5,
    reviews: 856,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=600',
    category: 'electronics',
    location: 'Metro Manila',
    seller: 'TechHub PH',
    badge: 'Sale'
  },
  {
    id: '3',
    title: 'Handwoven Banig Laptop Sleeve (13-inch) - Modern Design',
    price: 450.00,
    rating: 4.8,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1605218427368-9a6476b7f300?auto=format&fit=crop&q=80&w=600',
    category: 'fashion',
    location: 'Albay',
    seller: 'Likha Lokal',
    badge: 'Local Pride'
  },
  {
    id: '4',
    title: 'Mechanical Keyboard 75% Layout - Hot Swappable',
    price: 2199.00,
    rating: 4.7,
    reviews: 543,
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=600',
    category: 'electronics',
    location: 'Quezon City',
    seller: 'Keebs MNL'
  },
  {
    id: '5',
    title: 'Barong Tagalog Modern Slim Fit - Office Wear',
    price: 1500.00,
    rating: 4.6,
    reviews: 120,
    image: 'https://images.unsplash.com/photo-1593030761757-71bd90dbe78db?auto=format&fit=crop&q=80&w=600',
    category: 'fashion',
    location: 'Laguna',
    seller: 'Kultura Moderno'
  },
  {
    id: '6',
    title: 'Kapeng Barako (Ground Coffee) - 500g Fresh Roast',
    price: 350.00,
    rating: 5.0,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=600',
    category: 'food',
    location: 'Batangas',
    seller: 'Barako Bros'
  },
  {
    id: '7',
    title: 'Ergonomic Office Chair Mesh Back - High Quality',
    price: 3500.00,
    rating: 4.4,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=600',
    category: 'home',
    location: 'Makati City',
    seller: 'FurniHome PH',
    badge: 'Free Shipping'
  },
  {
    id: '8',
    title: 'Sunblock SPF 50++ (Water Resistant) - Local Brand',
    price: 299.00,
    rating: 4.8,
    reviews: 1500,
    image: 'https://images.unsplash.com/photo-1556228720-1987df28522d?auto=format&fit=crop&q=80&w=600',
    category: 'beauty',
    location: 'Pasig City',
    seller: 'SkinCare PH'
  }
];
