import { Star } from 'lucide-react'

interface StarRatingProps {
  value: number
  onChange: (value: number) => void
  maxStars?: number
}

export function StarRating({ value, onChange, maxStars = 5 }: StarRatingProps) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: maxStars }, (_, i) => {
        const starValue = maxStars - i
        const isFilled = starValue <= value
        return (
          <button
            key={starValue}
            type="button"
            onClick={() => onChange(starValue)}
            aria-label={`Rate ${starValue} out of ${maxStars}`}
            className="p-0 border-0 bg-transparent cursor-pointer transition-colors"
          >
            <Star size={20} className={isFilled ? 'fill-star text-star' : 'fill-none text-line'} />
          </button>
        )
      })}
    </div>
  )
}
