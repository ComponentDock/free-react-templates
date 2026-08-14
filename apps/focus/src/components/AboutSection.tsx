import { useEffect, useRef, useState } from 'react'
import { Play } from 'lucide-react'
import { ABOUT } from '../data'

/* About section: video-thumb image with a play button on the left;
   heading, copy, an animated project counter, two small photos and a
   serif pull-quote on the right. The counter animates 0 → target when
   it scrolls into view. */
export function AboutSection() {
  const [count, setCount] = useState(0)
  const counterRef = useRef<HTMLParagraphElement>(null)
  const startedRef = useRef(false)
  const countRef = useRef(0)

  useEffect(() => {
    const el = counterRef.current!
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting) || startedRef.current) return
        startedRef.current = true
        const target = ABOUT.counterTarget
        const step = Math.max(1, Math.round(target / 60))
        const timer = window.setInterval(() => {
          countRef.current = Math.min(target, countRef.current + step)
          setCount(countRef.current)
          if (countRef.current >= target) window.clearInterval(timer)
        }, 30)
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="bg-ink px-6 py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="relative overflow-hidden">
          <img
            src={ABOUT.videoImage}
            alt="Behind the scenes on a photo shoot"
            className="h-full w-full object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-black/30" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span
              aria-hidden="true"
              className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/80 text-white"
            >
              <Play className="ml-1 h-8 w-8" aria-hidden="true" />
            </span>
          </span>
        </div>
        <div>
          <h2 className="mb-5 text-2xl leading-snug font-bold text-white md:text-3xl">
            {ABOUT.heading}
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-white/90">{ABOUT.paragraph}</p>
          <p ref={counterRef} className="mb-8 text-sm">
            <span className="font-serif text-5xl font-bold text-white">{count}</span>{' '}
            <span className="ml-2 text-[10px] font-semibold tracking-[0.2em] text-white/70 uppercase">
              {ABOUT.counterLabel}
            </span>
          </p>
          <div className="mb-8 flex gap-4">
            {ABOUT.smallImages.map((src, index) => (
              <img
                key={src}
                src={src}
                alt=""
                className="h-24 w-36 object-cover"
                loading="lazy"
                data-testid={`about-small-${index}`}
              />
            ))}
          </div>
          <blockquote className="border-l-2 border-brand pl-5">
            <p className="font-serif text-lg italic text-white/90">{ABOUT.quote}</p>
            <span className="mt-2 block text-sm text-brand">{ABOUT.quoteByline}</span>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
