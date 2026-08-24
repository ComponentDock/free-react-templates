import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react'
import { Badge } from '@free-react-templates/ui'
import { cn } from '@free-react-templates/ui'

interface Cause {
  id: number
  category: string
  title: string
  progress: number
  raised: string
  goal: string
  image: string
}

const causes: Cause[] = [
  {
    id: 1,
    category: 'Education',
    title: 'Give Food to Homeless Children',
    progress: 70,
    raised: '$5,600',
    goal: '$8,000',
    image: 'https://picsum.photos/seed/cuddle-cause-1/400/280',
  },
  {
    id: 2,
    category: 'Medical Health',
    title: 'Medical Support for Poor Children',
    progress: 45,
    raised: '$3,200',
    goal: '$7,000',
    image: 'https://picsum.photos/seed/cuddle-cause-2/400/280',
  },
  {
    id: 3,
    category: 'Environment',
    title: 'Clean Water for Rural Villages',
    progress: 85,
    raised: '$12,800',
    goal: '$15,000',
    image: 'https://picsum.photos/seed/cuddle-cause-3/400/280',
  },
  {
    id: 4,
    category: 'Shelter/Home',
    title: 'Build Homes for Homeless Families',
    progress: 30,
    raised: '$9,500',
    goal: '$30,000',
    image: 'https://picsum.photos/seed/cuddle-cause-4/400/280',
  },
  {
    id: 5,
    category: 'Clothes',
    title: 'Winter Clothes for Street Kids',
    progress: 60,
    raised: '$4,200',
    goal: '$7,000',
    image: 'https://picsum.photos/seed/cuddle-cause-5/400/280',
  },
  {
    id: 6,
    category: 'Food',
    title: 'Daily Meals for Orphanage',
    progress: 90,
    raised: '$18,000',
    goal: '$20,000',
    image: 'https://picsum.photos/seed/cuddle-cause-6/400/280',
  },
] as const

export function Causes() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3
  const maxIndex = causes.length - itemsPerView

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i > 0 ? i - 1 : maxIndex))
  }, [maxIndex])

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i < maxIndex ? i + 1 : 0))
  }, [maxIndex])

  const goTo = useCallback(
    (index: number) => {
      setCurrentIndex(Math.max(0, Math.min(index, maxIndex)))
    },
    [maxIndex],
  )

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(goNext, 5000)
    return () => clearInterval(interval)
  }, [goNext])

  return (
    <section id="causes" className="py-20 sm:py-28 bg-brand-light">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="font-display text-lg font-semibold uppercase tracking-[0.25em] text-brand">
            Our Causes
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl text-ink">
            Our Causes & Help Us
          </h2>
        </div>

        <div className="mt-12 relative">
          {/* Carousel viewport */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${(currentIndex / causes.length) * 100}%)` }}
            >
              {causes.map((cause) => (
                <CauseCard key={cause.id} cause={cause} />
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goPrev}
            aria-label="Previous cause"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-ink shadow-lg hover:bg-brand hover:text-white transition-colors"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            onClick={goNext}
            aria-label="Next cause"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-ink shadow-lg hover:bg-brand hover:text-white transition-colors"
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Pagination */}
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === currentIndex ? 'true' : 'false'}
                className={cn(
                  'h-2 w-8 rounded-full transition-colors',
                  i === currentIndex ? 'bg-brand' : 'bg-gray-300 hover:bg-brand/50',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CauseCard({ cause }: { cause: Cause }) {
  return (
    <article
      className="flex w-[calc(100%/3)] flex-col rounded-2xl bg-white p-5 shadow-sm transition-shadow hover:shadow-xl lg:w-[calc(100%/3)]"
      style={{ minWidth: '300px' }}
    >
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
        <img
          src={cause.image}
          alt={`Cause: ${cause.title}`}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="default" className="bg-white/90 backdrop-blur text-ink">
            {cause.category}
          </Badge>
        </div>
      </div>
      <div className="mt-4 flex-1 flex flex-col">
        <h3 className="font-display text-lg font-bold text-ink">{cause.title}</h3>
        <div className="mt-4 flex-1">
          <div className="flex justify-between text-sm text-mist">
            <span>
              Raised: <span className="font-semibold text-ink">{cause.raised}</span>
            </span>
            <span>
              Goal: <span className="font-semibold text-ink">{cause.goal}</span>
            </span>
          </div>
          <div className="mt-2 h-2 w-full rounded-full bg-gray-200 overflow-hidden">
            <div
              className="h-full rounded-full bg-brand transition-all duration-500"
              style={{ width: `${cause.progress}%` }}
              role="progressbar"
              aria-valuenow={cause.progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${cause.progress}% complete`}
            />
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-mist">{cause.progress}% funded</span>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-brand hover:bg-brand hover:text-white transition-colors"
            aria-label={`Donate to ${cause.title}`}
          >
            <Heart className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  )
}
