'use client';

import React from 'react';
import { GadgetCard } from './gadget-card';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const FeaturedGadgets = () => {
  const featuredGadgets = products.filter(product => product.featured).slice(0, 2);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Gadgets That I Use</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {featuredGadgets.map((product) => (
          <GadgetCard key={product.id} product={product} />
        ))}
      </div>
      <Link
        href="/gadgets"
        className="mt-4 block"
      >
        <Button 
          variant="outline" 
          className="w-full sm:w-auto group transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
        >
          View All Gadgets
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </Button>
      </Link>
    </div>
  );
};

export { FeaturedGadgets };
