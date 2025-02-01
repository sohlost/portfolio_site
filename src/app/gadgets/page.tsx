'use client';

import React, { useState, useMemo } from 'react';
import { GadgetCard } from '@/components/gadgets/gadget-card';
import { GadgetFilters } from '@/components/gadgets/gadget-filters';
import { products } from '@/data/products';
import BlurFade from '@/components/magicui/blur-fade';

export default function GadgetsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Get unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(products.map(product => product.category)));
  }, []);

  // Filter products based on search query and category
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = searchQuery === '' || 
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

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
          <GadgetFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
          />
          
          {filteredProducts.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No gadgets found matching your criteria
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2">
              {filteredProducts.map((product) => (
                <GadgetCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </BlurFade>
    </main>
  );
}
