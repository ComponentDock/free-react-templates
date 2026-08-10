import { useState, type ReactNode } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PostCarouselProps<T> {
  title: string
  items: readonly T[]
  renderItem: (item: T) => ReactNode
  visibleCount?: number
  prevLabel: string
  nextLabel: string
}

export function PostCarousel<T>({
  title,
  items,
  renderItem,
  visibleCount = 2,
  prevLabel,
  nextLabel,
}: PostCarouselProps<T>) {
  const [start, setStart] = useState(0)
  const count = Math.min(visibleCount, items.length)

  const goPrev = () => setStart((current) => (current - 1 + items.length) % items.length)
  const goNext = () => setStart((current) => (current + 1) % items.length)

  return (
    <div className="mb-12 last:mb-0">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg font-bold text-black dark:text-white">{title}</h3>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label={prevLabel}
            onClick={goPrev}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-black transition-colors hover:bg-white dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={nextLabel}
            onClick={goNext}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-black transition-colors hover:bg-white dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="mt-8 space-y-6">
        {Array.from({ length: count }, (_, i) => items[(start + i) % items.length]!).map(
          (item, i) => (
            <div key={`${title}-${i}`}>{renderItem(item)}</div>
          ),
        )}
      </div>
    </div>
  )
}
