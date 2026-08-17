import { useEffect, useState } from 'react'
import { Play, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { HERO } from '../data'

interface VideoModalProps {
  title: string
  embedUrl: string
  onClose: () => void
}

function VideoModal({ title, embedUrl, onClose }: VideoModalProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-night/90 p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-card p-2 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close video"
          className="absolute -top-12 right-0 p-2 text-white transition-colors hover:text-brand"
          onClick={onClose}
        >
          <X className="size-7" />
        </button>
        <div className="aspect-video w-full">
          <iframe
            src={embedUrl}
            title={title}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}

/* Full-width hero slider: two photo slides under a dark purple-black
   overlay with the giant uppercase headline, pink date, location, yellow
   ticket CTA and a pink circular play button that opens the video modal.
   Slides advance on a timer and via arrow buttons. */
export function Hero() {
  const [slide, setSlide] = useState(0)
  const [videoOpen, setVideoOpen] = useState(false)

  useEffect(() => {
    const id = window.setInterval(() => {
      setSlide((current) => (current + 1) % HERO.slides.length)
    }, 7000)
    return () => window.clearInterval(id)
  }, [])

  const goTo = (index: number) => {
    setSlide((index + HERO.slides.length) % HERO.slides.length)
  }

  return (
    <section id="home" aria-label="Hero" className="relative isolate overflow-hidden bg-fog">
      {HERO.slides.map((slideData, index) => (
        <div
          key={slideData.image}
          aria-hidden={slide === index ? undefined : 'true'}
          className={cn(
            'absolute inset-0 bg-cover bg-center transition-opacity duration-700',
            slide === index ? 'opacity-100' : 'opacity-0',
          )}
          style={{ backgroundImage: `url(${slideData.image})` }}
        />
      ))}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-night/70 to-[#0a0002]/80"
      />

      <div className="relative mx-auto flex min-h-[600px] max-w-6xl flex-col items-center justify-center px-6 py-40 text-center lg:min-h-[720px]">
        <h1 className="mb-16 text-[44px] font-bold uppercase leading-none text-white sm:text-[58px] lg:text-[100px]">
          <span className="text-brand">{HERO.cityWord}</span> {HERO.trailingWords}
        </h1>
        <div className="mb-4 font-display text-lg font-medium text-blush sm:text-2xl">
          {HERO.date}
        </div>
        <div className="mb-10 text-lg text-white sm:text-xl">{HERO.location}</div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="#schedule"
            className="group relative inline-flex overflow-hidden rounded-none bg-brand px-8 py-[22px] font-display text-base font-medium uppercase tracking-wide text-white"
          >
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-full origin-left scale-x-0 bg-ember transition-transform duration-500 group-hover:scale-x-100"
            />
            <span className="relative z-10">{HERO.ticketLabel}</span>
          </a>
          <button
            type="button"
            aria-label="Play event video"
            className="flex size-16 items-center justify-center rounded-full bg-gradient-to-b from-blush to-blush text-white transition-transform hover:scale-110"
            onClick={() => setVideoOpen(true)}
          >
            <Play aria-hidden="true" className="ml-1 size-7 fill-current" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {HERO.slides.map((slideData, index) => (
          <button
            key={slideData.image}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={slide === index ? 'true' : undefined}
            onClick={() => goTo(index)}
            className={cn(
              'size-2.5 rounded-full transition-colors',
              slide === index ? 'bg-brand' : 'bg-white/40',
            )}
          />
        ))}
      </div>

      {videoOpen && (
        <VideoModal
          title={HERO.videoTitle}
          embedUrl={HERO.videoEmbedUrl}
          onClose={() => setVideoOpen(false)}
        />
      )}
    </section>
  )
}
