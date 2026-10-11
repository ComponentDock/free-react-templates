import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface StarRatingProps {
  rating: number
  /* Accessible label rendered for screen readers (the marks themselves are
     decorative, matching the reference's filled-star row). */
  label: string
}

const STAR_COUNT = 5

/* Five-mark rating row: the filled count follows the reference's mixed
   ratings (four, three, four, three). */
export function StarRating({ rating, label }: StarRatingProps) {
  return (
    <div className="flex items-center gap-[4px]">
      {Array.from({ length: STAR_COUNT }, (_, index) => (
        <Star
          key={index}
          aria-hidden="true"
          className={cn(
            'h-[14px] w-[14px]',
            index < rating ? 'fill-brand text-brand' : 'text-body/40',
          )}
        />
      ))}
      <span className="sr-only">{label}</span>
    </div>
  )
}

interface SliderControlsProps {
  onPrevious: () => void
  onNext: () => void
  label: string
}

const CONTROL_CLASS =
  'inline-flex h-[40px] w-[40px] items-center justify-center bg-brand text-white transition-colors duration-300 hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40'

/* Shared square prev/next pair used by the testimonial and blog sliders
   (the reference drives these with its carousel plugin; here they are a
   React-state pager). */
export function SliderControls({ onPrevious, onNext, label }: SliderControlsProps) {
  return (
    <div className="mt-[50px] flex items-center justify-center gap-[12px]">
      <button
        type="button"
        aria-label={`Previous ${label}`}
        onClick={onPrevious}
        className={CONTROL_CLASS}
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button type="button" aria-label={`Next ${label}`} onClick={onNext} className={CONTROL_CLASS}>
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  )
}
