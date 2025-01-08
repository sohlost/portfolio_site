'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Share2, X } from 'lucide-react';
interface BlogInteractionsProps {
  slug: string;
}

export function BlogInteractions({ slug }: BlogInteractionsProps) {
  const [likes, setLikes] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [showShare, setShowShare] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isSharing, setIsSharing] = useState(false);
  const [copySuccess, setCopySuccess] = useState<string>('');
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const title = typeof document !== 'undefined' ? document.title : '';

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(`/api/blog/like?slug=${slug}`);
        if (!response.ok) {
          throw new Error('Failed to fetch likes');
        }
        const data = await response.json();
        setLikes(data.likes);
        // Check if the post was previously liked
        const wasLiked = localStorage.getItem(`blog-${slug}-liked`) === 'true';
        setIsLiked(wasLiked);
      } catch (error) {
        console.error('Failed to fetch likes:', error);
        setError('Failed to load likes count');
      } finally {
        setIsLoading(false);
      }
    };

    fetchLikes();
  }, [slug]);

  const handleLike = async () => {
    if (isLiked || isLoading) return;
    
    try {
      setIsLoading(true);
      setError(null);
      // Optimistic update
      setLikes(prev => prev + 1);
      setIsLiked(true);
      
      const response = await fetch('/api/blog/like', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ slug }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update likes');
      }
      
      const data = await response.json();
      setLikes(data.likes);
      localStorage.setItem(`blog-${slug}-liked`, 'true');
    } catch (error) {
      console.error('Failed to like post:', error);
      // Revert optimistic update on error
      setLikes(prev => prev - 1);
      setIsLiked(false);
      setError('Failed to update like count');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 2000); // Reset message after 2 seconds
    } catch (err) {
      setCopySuccess('Failed to copy');
    }
  };

  const handleShare = async () => {
    setIsSharing(true);
    try {
      if (navigator.share) {
        await navigator.share({
          title,
          url: shareUrl,
        });
      } else {
        setShowShare(true);
      }
    } catch (error) {
      console.error('Error sharing:', error);
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <div className="flex items-center gap-4 mt-8">
      <Button
        onClick={handleShare}
        disabled={isSharing}
        variant="outline"
        size="sm"
        className="flex items-center gap-2"
      >
        <Share2 className="w-4 h-4" />
        <span>{isSharing ? 'Sharing...' : 'Share'}</span>
      </Button>
      {copySuccess && (
        <span className="text-sm text-green-600 dark:text-green-400">
          {copySuccess}
        </span>
      )}
    </div>
  );
}
