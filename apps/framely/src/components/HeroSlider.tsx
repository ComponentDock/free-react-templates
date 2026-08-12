import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { slides } from '../data'

const AUTOPLAY_MS = 3000
const SLIDE_GAP = 300

export function HeroSlider() {
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState<number | null>(null)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((current) => (current + 1) % slides.length)
    }, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (lightbox === null) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [lightbox])

  const goTo = (next: number) => {
    setActive(((next % slides.length) + slides.length) % slides.length)
  }

  const openLightbox = (index: number) => setLightbox(index)
  const closeLightbox = () => setLightbox(null)

  return (
    <section id="home" className="bg-white pb-20 pt-24 md:pt-32">
      <div className="relative mx-auto h-[340px] max-w-5xl overflow-hidden md:h-[420px]">
        {slides.map((slide, index) => {
          const offset = index - active
          const distance = Math.abs(offset)
          const scale = distance === 0 ? 1 : distance === 1 ? 0.85 : 0.7
          return (
            <button
              key={slide.image}
              type="button"
              onClick={() => openLightbox(index)}
              aria-label={`Open photo ${index + 1}: ${slide.title}`}
              className="absolute left-1/2 top-1/2 block h-[320px] w-[280px] cursor-pointer overflow-hidden p-0 outline-none md:h-[400px] md:w-[420px]"
              style={{
                transform: `translate(calc(-50% + ${offset * SLIDE_GAP}px), -50%) scale(${scale})`,
                zIndex: 10 - distance,
                opacity: distance > 2 ? 0 : distance === 2 ? 0.35 : distance === 1 ? 0.7 : 1,
                transition: 'transform 0.4s ease, opacity 0.4s ease',
              }}
            >
              <img
                src={slide.image}
                alt=""
                className="h-full w-full object-cover"
                draggable={false}
              />
            </button>
          )
        })}

        <button
          type="button"
          onClick={() => goTo(active - 1)}
          aria-label="Previous slide"
          className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-2 text-ink shadow transition-colors hover:text-brand"
        >
          <ChevronLeft className="h-6 w-6" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => goTo(active + 1)}
          aria-label="Next slide"
          className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-2 text-ink shadow transition-colors hover:text-brand"
        >
          <ChevronRight className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <div aria-live="polite" className="mx-auto max-w-2xl px-4 pt-12 text-center">
        <h1 className="text-4xl font-bold leading-snug text-ink">{slides[active]!.title}</h1>
        <p className="mt-3 text-base leading-relaxed text-ash">Photography</p>
      </div>

      {lightbox !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={slides[lightbox]!.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close lightbox"
            className="absolute right-6 top-6 text-white transition-colors hover:text-brand"
          >
            <X className="h-8 w-8" aria-hidden="true" />
          </button>
          <img
            src={slides[lightbox]!.image}
            alt={slides[lightbox]!.title}
            className="max-h-[85vh] max-w-full object-contain"
          />
          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 font-display text-xs font-bold uppercase tracking-widest text-white/70">
            {slides[lightbox]!.title}
          </span>
        </div>
      ) : null}
    </section>
  )
}
