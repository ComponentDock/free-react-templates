import { useCallback, useEffect, useState, type ReactNode } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export interface CarouselProps {
  slides: ReactNode[]
  /** How many slides are visible at once (owl-carousel slidesToShow equivalent). */
  visibleCount?: number
  /** Render dot indicators instead of relying on arrows only. */
  showDots?: boolean
  /** Auto-advance interval in ms; omitted = no autoplay. */
  autoplayMs?: number
  regionLabel: string
  prevLabel?: string
  nextLabel?: string
  dotLabel?: (index: number) => string
  className?: string
}

export function Carousel({
  slides,
  visibleCount = 1,
  showDots = false,
  autoplayMs,
  regionLabel,
  prevLabel = 'Previous slide',
  nextLabel = 'Next slide',
  dotLabel = (i) => `Go to slide ${i + 1}`,
  className,
}: CarouselProps) {
  const maxIndex = Math.max(0, slides.length - visibleCount)
  const [index, setIndex] = useState(0)

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % (maxIndex + 1)) + (maxIndex + 1)) % (maxIndex + 1))
    },
    [maxIndex],
  )

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (autoplayMs === undefined) return
    const id = setInterval(next, autoplayMs)
    return () => clearInterval(id)
  }, [autoplayMs, next])

  const allSlides = slides

  return (
    <div role="region" aria-label={regionLabel} className={cn('relative', className)}>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * (100 / visibleCount)}%)` }}
        >
          {allSlides.map((slide, i) => (
            <div
              key={i}
              className="shrink-0 px-2"
              style={{ width: `${100 / visibleCount}%` }}
              aria-hidden={i < index || i >= index + visibleCount}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label={prevLabel}
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-black/40 p-2 text-white transition-colors hover:bg-brand"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label={nextLabel}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-black/40 p-2 text-white transition-colors hover:bg-brand"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {showDots && (
        <div className="mt-4 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              type="button"
              aria-label={dotLabel(i)}
              aria-current={i === index}
              onClick={() => goTo(i)}
              className={cn(
                'h-2.5 w-2.5 rounded-full transition-colors',
                i === index ? 'bg-brand' : 'bg-gray-400 hover:bg-gray-500',
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}
