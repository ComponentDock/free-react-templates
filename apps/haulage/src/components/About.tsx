import { useEffect, useRef, useState } from 'react'
import { Play, X } from 'lucide-react'
import { ABOUT, COUNTERS } from '../data'

/* Animated counter (.block-counter-1): counts up from 0 when it scrolls
   into view; falls back to the final value instantly when
   IntersectionObserver is unavailable (jsdom). Numbers are 4rem orange,
   captions below. */
function Counter({ value, suffix, caption }: { value: number; suffix: string; caption: string }) {
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)
  const startRef = useRef<number | null>(null)
  const frameRef = useRef(0)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setDisplay(value)
      return
    }
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      }
    })
    observer.observe(document.getElementById(`counter-${caption}`)!)
    return () => observer.disconnect()
  }, [value, caption])

  useEffect(() => {
    if (!started) {
      return
    }
    const animate = (now: number) => {
      if (startRef.current === null) {
        startRef.current = now
      }
      const progress = Math.min((now - startRef.current) / 1200, 1)
      setDisplay(Math.round(value * progress))
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }
    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [started, value])

  return (
    <div id={`counter-${caption}`} className="text-center">
      <div className="font-display text-4xl font-medium text-brand lg:text-[4rem]">
        {display}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-smoke">{caption}</div>
    </div>
  )
}

/* About Us (white) + the video-image block with a play button and the
   animated counters row (both on the #f6f5f5 band). The play button opens
   a lightweight modal (the source uses a fancybox video lightbox). */
export function About() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <>
      <section id="about" className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 max-w-2xl">
            <h2 className="font-display text-[2rem] font-medium uppercase text-brand lg:text-5xl">
              About Us
            </h2>
            <p className="mt-3 text-smoke">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
          </div>
        </div>
      </section>

      <section aria-label="Video and numbers" className="bg-light py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4">
          {/* figure.block-img-video-1 — full-width image with a play
              overlay; the source overlaps the section above on desktop. */}
          <figure className="group relative overflow-hidden rounded">
            <img
              src={ABOUT.image}
              alt="Our logistics operations"
              loading="lazy"
              className="w-full object-cover"
            />
            <button
              type="button"
              aria-label="Play video"
              onClick={() => setVideoOpen(true)}
              className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/20 transition-colors hover:bg-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span className="flex h-[80px] w-[80px] items-center justify-center rounded-full bg-white/90 transition-transform group-hover:scale-105">
                <Play
                  aria-hidden="true"
                  className="h-8 w-8 translate-x-0.5 text-brand"
                  fill="currentColor"
                />
              </span>
            </button>
          </figure>

          {/* .block-counter-1 × 4 — animated counters. */}
          <div className="mt-14 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {COUNTERS.map((counter) => (
              <Counter key={counter.caption} {...counter} />
            ))}
          </div>
        </div>
      </section>

      {/* Lightweight video modal (fancybox recreation). */}
      {videoOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Video"
          className="fixed inset-0 z-[2100] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div className="relative w-full max-w-3xl" onClick={(event) => event.stopPropagation()}>
            <img src={ABOUT.image} alt="Video placeholder" className="w-full rounded" />
            <button
              type="button"
              aria-label="Close video"
              onClick={() => setVideoOpen(false)}
              className="absolute -top-12 right-0 cursor-pointer text-white transition-colors hover:text-brand"
            >
              <X aria-hidden="true" className="h-8 w-8" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
