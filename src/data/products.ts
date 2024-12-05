export interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  amazonLink: string;
  price: string;
  category: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    title: 'Logitech G402 Hyperion USB Wired Gaming mouse',
    description: '4000 DPI, Lightweight, software support, 8 programmable buttons.',
    imageUrl: '/images/products/logitech.webp',
    amazonLink: 'https://amzn.to/3CYjyky',
    price: '$28.27',
    category: 'Computer and accessories',
    featured: true
  },
  {
    id: '2',
    title: '5-in-1 Multi-Function Laptop Gadget',
    description: 'Do 5 tasks at once with this multi-function gadget.',
    imageUrl: '/images/products/gadget.webp',
    amazonLink: 'https://amzn.to/3D0VLR7',
    price: '$2.33',
    category: 'Gadgets',
    featured: true
  },
  {
    id: '3',
    title: 'Crucial RAM 8GB DDR4 3200MHz CL22 (or 2933MHz or 2666MHz) ',
    description: 'Improve your system’s responsiveness run apps faster and multitask with ease.',
    imageUrl: '/images/products/Ram.webp',
    amazonLink: 'https://amzn.to/4gb4q1A',
    price: '$15.76',
    category: 'Computer and accessories',
  },
 
  {
    id: '4',  // Always use a unique ID
    title: 'Dyazo Laptop Stand',
    description: 'I have been using this product for 4 years now and it is still working perfectly.',
    imageUrl: '/images/products/stand.webp',  // Add image to this path
    amazonLink: 'https://amzn.to/4fVz0wr',  // Your affiliate link
    price: '$4.71',
    category: 'Computer and accessories',  // Use existing category or create new
    featured: false  // Optional, default is false
  }
];
