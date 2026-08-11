import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cardImage, durationBadgeLabel, nextLabel, prevLabel, type Video } from '../data'
import { PostMeta } from './PostMeta'

/* Carousel block (reference owl-carousel recreated as a static grid): a
   heading with prev/next controls that rotate the visible card row. */
export function VideoCarousel({
  heading,
  videos,
  large = false,
}: {
  heading: string
  videos: Video[]
  large?: boolean
}) {
  const [offset, setOffset] = useState(0)
  const rotated = videos.map((_, index) => videos[(index + offset) % videos.length]!)

  return (
    <section aria-label={heading}>
      <div className="mb-6 flex items-center justify-between">
        <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">
          {heading}
        </h3>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label={prevLabel}
            onClick={() => setOffset((value) => (value + videos.length - 1) % videos.length)}
            className="flex h-9 w-9 items-center justify-center bg-panel text-white transition-colors hover:bg-brand"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={nextLabel}
            onClick={() => setOffset((value) => (value + 1) % videos.length)}
            className="flex h-9 w-9 items-center justify-center bg-panel text-white transition-colors hover:bg-brand"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rotated.map((video) => (
          <article key={video.id}>
            <div className="relative mb-4 overflow-hidden">
              <img
                src={cardImage(video, large ? 500 : 350, large ? 280 : 200)}
                alt={video.title}
                className={`w-full object-cover ${large ? 'aspect-video' : 'aspect-[16/9]'}`}
              />
              <span
                className="absolute bottom-2 right-2 bg-ink px-2 py-1 font-display text-sm text-white"
                title={durationBadgeLabel(video.duration)}
              >
                {video.duration}
              </span>
            </div>
            <h4 className="font-display text-base font-bold leading-snug text-white">
              <a href="#" className="transition-colors hover:text-brand">
                {video.title}
              </a>
            </h4>
            <div className="mt-2">
              <PostMeta meta={video.meta} />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
