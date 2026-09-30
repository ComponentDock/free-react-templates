import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { videos } from '../data'
import { useCarousel, windowed } from '../carousel'
import { SectionHeading } from './SectionHeading'

/** Videos (reference `.video-media`): red-bar heading with prev/next arrows
 *  and a three-up carousel of thumbnails carrying the red play circle and
 *  title captions (state-based, no slider library). */
export function VideosSection() {
  const { start, next, prev } = useCarousel(videos.length)
  const visible = windowed(videos, start, 3)

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
      <div className="flex items-center justify-between">
        <SectionHeading>Videos</SectionHeading>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous videos"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next videos"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {visible.map(({ item }) => (
          <article key={item.title} className="relative overflow-hidden">
            <img src={item.thumb} alt={item.title} className="aspect-video w-full object-cover" />
            <button
              type="button"
              aria-label={`Play ${item.title}`}
              className="absolute bottom-4 left-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
                <Play className="h-5 w-5" aria-hidden="true" />
              </span>
            </button>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-20 pt-10">
              <h3 className="text-sm font-bold text-white">{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
