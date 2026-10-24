import { useEffect, useState } from 'react'
import { Play, X } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { btn } from './action'
import { playLabel, slides, videoClose, videoHeading, videoPoster } from '../data'
import { prefersReducedMotion } from '../motion'

const autoplayMs = 5000

export function Hero() {
  const [active, setActive] = useState(0)
  const [videoOpen, setVideoOpen] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const id = window.setInterval(() => {
      if (document.hidden) return
      setActive((index) => (index + 1) % slides.length)
    }, autoplayMs)
    return () => window.clearInterval(id)
  }, [])

  useEffect(() => {
    if (!videoOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setVideoOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [videoOpen])

  return (
    <section aria-label="Gym highlights" className="relative h-[620px] overflow-hidden sm:h-[720px] lg:h-[895px]">
      {slides.map((slide, index) => (
        <div
          key={slide.accent}
          data-active={index === active}
          aria-hidden={index !== active}
          className={cn(
            'absolute inset-0 transition-opacity duration-700',
            index === active ? 'opacity-100' : 'pointer-events-none opacity-0',
          )}
        >
          <img src={slide.image} alt={slide.alt} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center lg:pt-[180px]">
            <button
              type="button"
              aria-label={playLabel}
              onClick={() => setVideoOpen(true)}
              className="mb-[17px] flex h-[56px] w-[56px] items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-deep"
            >
              <Play className="ml-[3px] h-5 w-5 fill-current" aria-hidden="true" />
            </button>
            <h1 className="text-[45px] font-medium leading-[1.05] text-white sm:text-[65px] md:text-[105px] lg:text-[130px]">
              {slide.headline}
              <span className="block">{slide.accent}</span>
            </h1>
            <ButtonLink href={slide.href} className={cn(btn.base, btn.filled, 'mt-[45px]')}>
              {slide.cta}
            </ButtonLink>
          </div>
        </div>
      ))}

      <div className="absolute bottom-[30px] left-1/2 z-10 flex -translate-x-1/2 items-center gap-[22px]">
        {slides.map((slide, index) => (
          <button
            key={`dot-${slide.accent}`}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            aria-current={index === active ? 'true' : undefined}
            onClick={() => setActive(index)}
            className={cn(
              'flex h-[26px] w-[26px] items-center justify-center rounded-full border-[3px] transition-colors',
              index === active ? 'border-white' : 'border-transparent',
            )}
          >
            <span className="block h-[6px] w-[6px] rounded-full bg-white" />
          </button>
        ))}
      </div>

      {videoOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={videoHeading}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 px-4"
        >
          <div className="relative w-full max-w-[900px]">
            <button
              type="button"
              aria-label={videoClose}
              onClick={() => setVideoOpen(false)}
              className="absolute -top-[46px] right-0 text-white transition-colors hover:text-brand"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
            <img src={videoPoster} alt="Gym tour poster frame" className="h-auto w-full" />
            <p className="mt-4 text-center text-[13px] uppercase tracking-[3px] text-white/70">
              {videoHeading}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
