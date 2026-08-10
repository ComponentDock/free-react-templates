import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { heroSlides, imgUrl, nextSlideLabel, previousSlideLabel, type HeroPost } from '../data'

/** Hero carousel: auto-advances every 5s and supports prev/next controls.
    Each slide shows one large post beside two stacked posts, all with a
    dark bottom-up overlay and a date + white title caption (reference:
    .hero-area owl-carousel + .bg-overlay). */
export function Hero() {
  const [active, setActive] = useState(0)
  const slideCount = heroSlides.length

  const goNext = useCallback(() => setActive((index) => (index + 1) % slideCount), [slideCount])
  const goPrev = useCallback(
    () => setActive((index) => (index - 1 + slideCount) % slideCount),
    [slideCount],
  )

  useEffect(() => {
    const id = window.setInterval(goNext, 5000)
    return () => window.clearInterval(id)
  }, [goNext])

  const slide = heroSlides[active]!
  const [large, stackedOne, stackedTwo] = slide.posts

  return (
    <section aria-label="Featured stories" className="bg-white">
      <div className="relative mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-4 lg:grid-cols-2">
          <HeroPostCard post={large} large className="h-72 lg:h-full" />
          <div className="grid gap-4">
            <HeroPostCard post={stackedOne} className="h-44 lg:h-auto" />
            <HeroPostCard post={stackedTwo} className="h-44 lg:h-auto" />
          </div>
        </div>

        <button
          type="button"
          onClick={goPrev}
          aria-label={previousSlideLabel}
          className="absolute top-1/2 left-2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white/80 text-ink transition-colors hover:bg-accent hover:text-white"
        >
          <ChevronLeft className="h-6 w-6" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label={nextSlideLabel}
          className="absolute top-1/2 right-2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white/80 text-ink transition-colors hover:bg-accent hover:text-white"
        >
          <ChevronRight className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}

interface HeroPostCardProps {
  post: HeroPost
  /** The large left post renders a taller image and a larger title. */
  large?: boolean
  className?: string
}

function HeroPostCard({ post, large = false, className }: HeroPostCardProps) {
  return (
    <a
      href="#story"
      className={cn('group relative block overflow-hidden', className)}
      aria-label={post.title}
    >
      <img
        src={imgUrl(post.seed, 800, large ? 600 : 400)}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10"
        aria-hidden="true"
      />
      <div className="absolute bottom-0 left-0 p-5 text-white">
        <p className="text-xs text-white/80">{post.date}</p>
        <h3
          className={`font-bold leading-snug text-white transition-colors group-hover:text-accent ${
            large ? 'mt-1 text-2xl lg:text-3xl' : 'mt-1 text-lg lg:text-xl'
          }`}
        >
          {post.title}
        </h3>
      </div>
    </a>
  )
}
