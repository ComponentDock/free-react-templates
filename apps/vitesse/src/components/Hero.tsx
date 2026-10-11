import { useState, type FormEvent } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { trackingSchema } from '../lib/forms'

const SLIDES = [
  {
    image: 'https://picsum.photos/seed/vitesse-hero-1/1920/1080',
    before: 'Safe & Reliable',
    accent: 'Logistic',
    after: 'Solutions!',
  },
  {
    image: 'https://picsum.photos/seed/vitesse-hero-2/1920/1080',
    before: 'Fast & Secure',
    accent: 'Freight',
    after: 'Worldwide!',
  },
]

export function Hero() {
  const [index, setIndex] = useState(0)
  const [trackingId, setTrackingId] = useState('')
  const [status, setStatus] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const go = (step: number) => setIndex((i) => (i + step + SLIDES.length) % SLIDES.length)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const parsed = trackingSchema.safeParse({ trackingId })
    if (!parsed.success) {
      setError(parsed.error.issues[0]!.message)
      setStatus(null)
      return
    }
    setError(null)
    setStatus(`Tracking status for ${parsed.data.trackingId}: in transit — arriving on schedule.`)
  }

  const slide = SLIDES[index]!

  return (
    <section aria-label="Hero" className="relative overflow-hidden">
      {SLIDES.map((item, i) => (
        <img
          key={item.image}
          src={item.image}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-header/60" />
      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl flex-col justify-center px-6 pb-24 pt-16 md:min-h-[1080px]">
        <h1 className="max-w-2xl font-display text-[50px] font-semibold capitalize leading-none text-white md:text-[95px]">
          {slide.before} <span className="text-accent">{slide.accent}</span> {slide.after}
        </h1>
        <form onSubmit={onSubmit} className="mt-10 max-w-xl" noValidate>
          <div className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor="tracking-id" className="sr-only">
              Your Tracking ID
            </label>
            <input
              id="tracking-id"
              name="tracking"
              type="text"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              placeholder="Your Tracking ID"
              autoComplete="off"
              className="flex-1 rounded-[5px] border border-white/20 bg-white px-5 py-4 text-dark outline-none focus:border-accent"
            />
            <button type="submit" className="btn px-11 py-4">
              <span>Track & Trace</span>
            </button>
          </div>
          <p className="mt-3 text-sm italic text-white/80">For order status inquiry</p>
          {error ? (
            <p role="alert" className="mt-2 text-sm font-medium text-white">
              {error}
            </p>
          ) : null}
          {status ? (
            <p role="status" className="mt-2 text-sm font-medium text-white">
              {status}
            </p>
          ) : null}
        </form>
      </div>
      <div className="absolute bottom-0 right-4 z-10 flex gap-3 md:right-[90px]">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => go(-1)}
          className="flex h-[50px] w-[50px] items-center justify-center rounded-md border border-arrow text-arrow transition-colors hover:border-accent hover:text-accent"
        >
          <ChevronLeft aria-hidden="true" className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => go(1)}
          className="flex h-[50px] w-[50px] items-center justify-center rounded-md border border-arrow text-arrow transition-colors hover:border-accent hover:text-accent"
        >
          <ChevronRight aria-hidden="true" className="h-5 w-5" />
        </button>
      </div>
    </section>
  )
}
