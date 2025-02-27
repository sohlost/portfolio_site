'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Product } from '@/data/products';
import Link from 'next/link';
import { ShoppingCart } from "lucide-react";  // Change from ShoppingBag to ShoppingCart

interface GadgetCardProps {
  product: Product;
}

export function GadgetCard({ product }: GadgetCardProps) {
  const discount = Math.round(
    ((product.mrp - product.sellingPrice) / product.mrp) * 100
  );

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
        </div>
        <h3 className="font-semibold mb-2 line-clamp-1">{product.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>
        
        {/* <div className="flex flex-col gap-1 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">₹{product.sellingPrice}</span>
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground line-through">
                M.R.P.: ₹{product.mrp}
              </span>
              <span className="text-sm text-green-600 font-medium">
                Save {discount}%
              </span>
            </div>
          </div>
        </div> */}

        <Button
          variant="default"
          size="lg"
          className="w-full font-semibold text-base"
          asChild
        >
          <Link
            href={product.amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2"
          >
              Buy on Amazon
            <ShoppingCart className="size-4" />  {/* Moved to after text and changed size */}
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}
