import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { nextSlideLabel, previousSlideLabel, trendingSliderLabel, type PostPane } from '../data'
import { SmallPostRow } from './SmallPostRow'

interface TrendingSliderProps {
  posts: PostPane
  className?: string
}

/* Sliding row of post groups (reference `div.world-catagory-slider2.
   owl-carousel` with 2 `div.single-cata-slide` rows): groups of 4 posts,
   navigable with prev/next controls. */
export function TrendingSlider({ posts, className }: TrendingSliderProps) {
  const [index, setIndex] = useState(0)
  const groupSize = 4
  const groupCount = Math.ceil(posts.length / groupSize)

  const previous = () => setIndex((current) => (current - 1 + groupCount) % groupCount)
  const next = () => setIndex((current) => (current + 1) % groupCount)

  const group = posts.slice(index * groupSize, index * groupSize + groupSize)

  return (
    <section aria-label={trendingSliderLabel} className={cn('mt-10', className)}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {group.map((post) => (
          <SmallPostRow key={post.title} post={post} />
        ))}
      </div>
      <div className="mt-6 flex justify-end gap-2">
        <button
          type="button"
          aria-label={previousSlideLabel}
          onClick={previous}
          className="rounded-full border border-border p-1.5 text-ink transition-colors hover:bg-divider"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label={nextSlideLabel}
          onClick={next}
          className="rounded-full border border-border p-1.5 text-ink transition-colors hover:bg-divider"
        >
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
