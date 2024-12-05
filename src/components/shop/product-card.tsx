'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group bg-card rounded-lg overflow-hidden"
    >
      <div className="relative aspect-video">
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
          priority={product.featured}
        />
        {product.featured && (
          <Badge variant="secondary" className="absolute top-2 right-2">
            Featured
          </Badge>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline">{product.category}</Badge>
          <span className="font-bold">{product.price}</span>
        </div>
        <h3 className="font-semibold mb-2 line-clamp-1">{product.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>
        <Button
          variant="default"
          size="sm"
          className="w-full"
          asChild
        >
          <a
            href={product.amazonLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy now
          </a>
        </Button>
      </div>
    </motion.div>
  );
}
