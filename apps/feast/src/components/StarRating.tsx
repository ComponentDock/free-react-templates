import { Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { ratingStars } from '../data'

interface StarRatingProps {
  className?: string
}

/** 5-star rating row — 4 filled stars + 1 faded star (original `.is-fade`). */
export function StarRating({ className }: StarRatingProps) {
  return (
    <div className={cn('flex items-center gap-0.5', className)} aria-label="Rated 4 out of 5 stars">
      {ratingStars.map((star) => (
        <Star
          key={star}
          aria-hidden="true"
          fill="currentColor"
          strokeWidth={0}
          className={cn(
            'h-3 w-3',
            star === ratingStars.length - 1 ? 'text-star-faded' : 'text-star',
          )}
        />
      ))}
    </div>
  )
}
