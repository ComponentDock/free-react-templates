import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  heroPostAutoAdvanceMs,
  heroPostStripLabel,
  heroStripPosts,
  nextSlideLabel,
  previousSlideLabel,
} from '../data'

/* Numbered posts strip over the hero bottom (reference `div.hero-post-area`,
   absolute bottom 40px): 4 slides with a 55px circular number badge (5px
   solid #8d8d8d border) and a 14px 700 title. The active slide gets the blue
   accent border + white title; the strip auto-advances. */
export function HeroPostStrip() {
  const [index, setIndex] = useState(0)
  const slideCount = heroStripPosts.length

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slideCount)
    }, heroPostAutoAdvanceMs)
    return () => window.clearInterval(timer)
  }, [slideCount])

  const previous = () => setIndex((current) => (current - 1 + slideCount) % slideCount)
  const next = () => setIndex((current) => (current + 1) % slideCount)

  return (
    <section aria-label={heroPostStripLabel} className="absolute bottom-10 left-0 z-[200] w-full">
      <div className="mx-auto max-w-[1170px] px-4">
        <div className="flex items-start gap-4">
          <div className="grid flex-1 grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-4">
            {heroStripPosts.map((post, slideIndex) => {
              const active = slideIndex === index
              return (
                <article key={post.number} className="flex items-center gap-4">
                  <p
                    className={cn(
                      'flex h-[55px] w-[55px] flex-none items-center justify-center rounded-full border-[5px] font-heading text-2xl font-bold',
                      active
                        ? 'border-t-brand border-r-brand border-b-brand border-l-text-muted text-white'
                        : 'border-text-muted text-text-muted',
                    )}
                  >
                    {post.number}
                  </p>
                  <a
                    href="#"
                    aria-current={active ? 'true' : undefined}
                    className={cn(
                      'font-heading text-sm leading-snug',
                      active ? 'font-bold text-white' : 'font-bold text-text-muted',
                    )}
                  >
                    {post.title}
                  </a>
                </article>
              )
            })}
          </div>
          <div className="hidden flex-none gap-2 md:flex">
            <button
              type="button"
              aria-label={previousSlideLabel}
              onClick={previous}
              className="rounded-full border border-white/40 p-1.5 text-white transition-colors hover:bg-white/20"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label={nextSlideLabel}
              onClick={next}
              className="rounded-full border border-white/40 p-1.5 text-white transition-colors hover:bg-white/20"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
