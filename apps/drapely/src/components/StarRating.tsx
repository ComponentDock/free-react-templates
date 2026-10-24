import { Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface StarRatingProps {
  /** Filled stars, 1–5. */
  value: number
}

/** Five-star rating row; stars past the value are dimmed. */
export function StarRating({ value }: StarRatingProps) {
  return (
    <div
      role="img"
      aria-label={`Rated ${value} out of 5`}
      className="mt-2 flex items-center gap-1 text-star"
    >
      {[0, 1, 2, 3, 4].map((position) => (
        <Star
          key={position}
          aria-hidden="true"
          className={cn('h-4 w-4', position < value ? 'fill-current' : 'opacity-30')}
        />
      ))}
    </div>
  )
}
