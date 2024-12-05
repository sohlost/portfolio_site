import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Disable SSR for the shop page component
const ShopPage = dynamic(() => import('@/components/shop/page'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  ),
});

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Browse our curated collection of recommended products',
};

export default function Shop() {
  return <ShopPage />;
}
