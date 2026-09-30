import { ChevronLeft, ChevronRight } from 'lucide-react'
import { trending } from '../data'
import { useCarousel } from '../carousel'

/** Trending news strip (reference `.trending-news-section`): dark #151618
 *  band with a red title block on the left and a headline slider driven by
 *  prev/next square arrow buttons. */
export function TrendingStrip() {
  const { start, next, prev } = useCarousel(trending.length)
  const headline = trending[start]!

  return (
    <section className="bg-dark">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 lg:flex-row lg:items-stretch lg:px-8">
        <div className="flex items-center gap-3 bg-brand px-6 py-4 lg:w-1/3">
          <ChevronRight className="h-5 w-5 text-white" aria-hidden="true" />
          <h2 className="text-lg font-medium uppercase tracking-wide text-white">Trending News</h2>
        </div>

        <p className="flex flex-1 items-center px-2 text-base font-medium text-white">{headline}</p>

        <div className="flex items-center gap-2 lg:pl-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous headline"
            className="flex h-9 w-9 items-center justify-center border border-[#8a8b8c] text-[#ababab] transition-colors hover:border-brand hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next headline"
            className="flex h-9 w-9 items-center justify-center border border-[#8a8b8c] text-[#ababab] transition-colors hover:border-brand hover:text-white"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
