import { useEffect, useState } from 'react'
import { ArrowRight, Play, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { hero, video } from '../content'
import { useTypewriter } from '../lib/use-typewriter'
import { containerClass } from './ui'

/** An authored storyboard stands in for the reference's placeholder embed. */
function VideoModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
      data-testid="video-modal"
      className="fixed inset-0 z-[80] grid place-items-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="w-full max-w-3xl" onClick={(event) => event.stopPropagation()}>
        <div className="mb-3 flex items-center justify-between text-white">
          <p className="text-base font-semibold">{video.title}</p>
          <button
            type="button"
            onClick={onClose}
            aria-label={video.close}
            className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
        <div className="grid aspect-video place-items-center rounded-2xl border border-white/15 bg-gray-900 p-8">
          <ol className="grid gap-4 text-left sm:grid-cols-3">
            {video.steps.map((step, index) => (
              <li key={step} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="font-serif text-lg font-semibold text-white">{index + 1}</p>
                <p className="mt-1 text-sm leading-6 text-primary-100">{step}</p>
              </li>
            ))}
          </ol>
        </div>
        <p className="mt-3 text-sm text-primary-100">{video.caption}</p>
      </div>
    </div>
  )
}

/**
 * Centred hero on a sage wash, two drifting blobs behind it, a three-phrase
 * typewriter on the second line, three controls, a **static** serif strip and
 * a framed photo. The strip is deliberately not the counter band below.
 */
export function Hero() {
  const [playing, setPlaying] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const phrase = useTypewriter(hero.phrases)

  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-gradient-to-b from-accent-50 to-white"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-hero-float absolute -top-24 -left-16 h-72 w-72 rounded-full bg-accent-200/50 blur-3xl" />
        <div className="animate-hero-float-reverse absolute -top-10 right-0 h-80 w-80 rounded-full bg-primary-200/40 blur-3xl" />
      </div>

      <div className={cn(containerClass, 'py-20 lg:py-32')}>
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-white/70 px-4 py-1.5 text-sm leading-5 font-medium text-accent-800">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
            </span>
            {hero.pill}
          </span>

          <h1
            id="hero-title"
            className="mt-6 font-serif text-4xl leading-[1.05] font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            {hero.title}
            <br />
            <span data-testid="typewriter" className="text-gradient">
              {phrase}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-gray-600 sm:text-xl sm:leading-8">{hero.lede}</p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={hero.primaryCta.href}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary-600 px-6 text-base font-semibold text-white shadow-soft transition-colors hover:bg-primary-700"
            >
              {hero.primaryCta.label}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex h-12 items-center justify-center rounded-full border border-gray-300 bg-white px-6 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              {hero.secondaryCta.label}
            </a>
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="inline-flex items-center gap-3 text-sm font-medium text-gray-700"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-primary-900 text-white">
                <Play aria-hidden="true" className="h-4 w-4" />
              </span>
              {hero.video}
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-gray-200 pt-10 sm:grid-cols-4">
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-4xl leading-none font-semibold text-gray-900">{stat.value}</p>
                <p className="mt-2 text-sm leading-5 font-medium text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center lg:mt-24">
          <img
            src="https://picsum.photos/seed/slotline-hero/1200/600"
            alt={hero.photoAlt}
            width={1200}
            height={600}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            className={cn(
              'w-full max-w-5xl rounded-2xl object-cover shadow-2xl ring-1 ring-gray-200',
              !loaded && 'img-shimmer',
            )}
          />
        </div>
      </div>

      {playing ? <VideoModal onClose={() => setPlaying(false)} /> : null}
    </section>
  )
}
