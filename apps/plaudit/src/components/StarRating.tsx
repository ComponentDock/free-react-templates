import { cn } from '@free-react-templates/ui'

interface StarRatingProps {
  rating: number
}

const STAR_PATH = 'M10 1.5l2.6 5.3 5.9.9-4.25 4.1 1 5.8L10 14.9l-5.25 2.7 1-5.8L1.5 7.7l5.9-.9z'
const STARS = [0, 1, 2, 3, 4]

/**
 * Five 18 px glyphs in one `role="img"` row. The rating is carried by the
 * group's accessible name; the stars themselves are decoration, and any star
 * past the rating is hollow rather than dimmed.
 */
export function StarRating({ rating }: StarRatingProps) {
  return (
    <p className="stars" role="img" aria-label={`${rating} out of 5 stars`}>
      {STARS.map((index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          aria-hidden="true"
          className={cn(index >= rating && 'star-off')}
        >
          <path d={STAR_PATH} />
        </svg>
      ))}
    </p>
  )
}
