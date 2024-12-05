'use client';

import React from 'react';
import { GadgetCard } from '@/components/gadgets/gadget-card';
import { products } from '@/data/products';
import BlurFade from '@/components/magicui/blur-fade';

export default function GadgetsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <BlurFade>
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">My Gadget Recommendations</h1>
          <p className="text-muted-foreground text-lg">
            Here are some of my favorite gadgets that I personally use and recommend. These tools have helped me be more productive
            and enhance my workflow. I've included affiliate links - if you find these recommendations helpful, consider using them!
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6 sm:grid-cols-2">
            {products.map((product) => (
              <GadgetCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </BlurFade>
    </main>
  );
}
