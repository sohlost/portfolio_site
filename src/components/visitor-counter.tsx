'use client';

import { useEffect, useState } from 'react';

export function VisitorCounter() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const incrementVisitor = async () => {
      try {
        const response = await fetch('/api/visitors', {
          method: 'GET',
        });
        const data = await response.json();
        setCount(data.count);
      } catch (error) {
        console.error('Failed to increment visitor count:', error);
      }
    };

    incrementVisitor();
  }, []);

  return (
    <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
      <span>👥</span>
      <span>{count.toLocaleString()} visitors</span>
    </div>
  );
}
