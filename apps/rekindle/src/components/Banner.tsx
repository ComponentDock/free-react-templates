import { useEffect, useState } from 'react'
import {
  bannerAutoplayMs,
  bannerHeadline,
  bannerSlides,
  shareStripLabel,
  slideIndicatorLabel,
} from '../data'
import { SocialIcons } from './SocialIcons'
import { cn } from '@free-react-templates/ui'

export function Banner() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % bannerSlides.length)
    }, bannerAutoplayMs)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section
      aria-label="Home banner"
      className="relative h-[560px] w-full overflow-hidden md:h-[640px]"
    >
      {bannerSlides.map((slide, index) => (
        <div
          key={slide.seed}
          aria-hidden={index !== active}
          className={cn(
            'absolute inset-0 transition-opacity duration-700',
            index === active ? 'opacity-100' : 'opacity-0',
          )}
        >
          <img
            src={`https://picsum.photos/seed/${slide.seed}/1600/900`}
            alt={slide.alt}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <h1 className="max-w-[700px] font-serif text-3xl leading-tight text-white md:text-4xl">
            {bannerHeadline}
          </h1>
        </div>
      </div>
      <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-left md:left-10">
        <div className="flex items-center gap-4 text-white">
          <SocialIcons names={['Facebook', 'Twitter', 'Pinterest']} className="gap-3" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em]">
            {shareStripLabel}
          </span>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
        {bannerSlides.map((slide, index) => (
          <button
            key={slide.seed}
            type="button"
            aria-label={slideIndicatorLabel(index)}
            aria-current={index === active ? 'true' : undefined}
            onClick={() => setActive(index)}
            className={cn(
              'h-2.5 w-2.5 rounded-full transition-colors',
              index === active ? 'bg-white' : 'bg-white/40 hover:bg-white/70',
            )}
          />
        ))}
      </div>
    </section>
  )
}
