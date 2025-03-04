'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

export function HostingerAd() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 max-w-sm bg-background border rounded-lg shadow-lg p-4 z-50">      
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
      >
        <X className="h-4 w-4" />
      </button>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <img 
            src="/hostinger-logo.png" 
            alt="Hostinger" 
            className="h-6"
          />
          <h3 className="font-semibold">Special Offer!</h3>
        </div>
        
        <p className="text-sm text-muted-foreground">
          Get premium web hosting starting at ₹69/month with a free domain!
        </p>
        
        <a
          href="https://hostinger.in?REFERRALCODE=NP4PRASENELF"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Claim Offer →
        </a>
      </div>
    </div>
  );
} 