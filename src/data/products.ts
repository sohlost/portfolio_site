export interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  amazonLink: string;
  sellingPrice: number;  // Actual selling price
  mrp: number;          // Higher "fake" price
  category: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    title: 'Logitech G402 Hyperion USB Wired Gaming mouse',
    description: '4000 DPI, Lightweight, software support, 8 programmable buttons.',
    imageUrl: '/images/products/logitech.webp',
    amazonLink: 'https://amzn.to/4beEAZe',
    sellingPrice: 2395,
    mrp: 3999,
    category: 'Computer and accessories',
    featured: false,
  },
  {
    id: '2',
    title: '5-in-1 Multi-Function Laptop Gadget',
    description: 'Do 5 tasks at once with this multi-function gadget.',
    imageUrl: '/images/products/gadget.webp',
    amazonLink: 'https://amzn.to/4iakEZP',
    sellingPrice: 99,
    mrp: 299,
    category: 'Gadgets',
    featured: true,
  },
  {
    id: '3',
    title: 'Crucial RAM 8GB DDR4 3200MHz CL22',
    description: "Improve your system's responsiveness run apps faster and multitask with ease.",
    imageUrl: '/images/products/Ram.webp',
    amazonLink: 'https://amzn.to/3F0ZMFW',
    sellingPrice: 1349,
    mrp: 2499,
    category: 'Computer and accessories',
  },
  {
    id: '4',
    title: 'Dyazo Laptop Stand',
    description: 'I have been using this product for 4 years now and it is still working perfectly.',
    imageUrl: '/images/products/stand.webp',
    amazonLink: 'https://amzn.to/3QsYt5n',
    sellingPrice: 399,
    mrp: 999,
    category: 'Computer and accessories',
    featured: false,
  },
  {
    id: '5',
    title: 'Transparent wireless mouse',
    description: 'I personally love this product for its design and functionality.',
    imageUrl: '/images/products/transparent-mouse.webp',
    amazonLink: 'https://amzn.to/4buFJMB',
    sellingPrice: 599,
    mrp: 1299,
    category: 'Computer and accessories',
    featured: true,
  },
];
