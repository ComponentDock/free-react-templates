import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const slides = [
  {
    quote:
      'The team at Sana treated my mother with incredible patience and skill. Every nurse knew her name and her story — that meant the world to us.',
    name: 'Fannie Rowe',
    role: 'Marketing Manager',
    image: 'https://picsum.photos/seed/sana-feedback-1/120/120',
  },
  {
    quote:
      'From the first consultation to the follow-up call, everything felt organised and caring. I finally trust a hospital completely.',
    name: 'Fannie Rowe',
    role: 'Marketing Manager',
    image: 'https://picsum.photos/seed/sana-feedback-2/120/120',
  },
  {
    quote:
      'The emergency department responded in minutes and the doctors explained every step. Professional care with a human touch.',
    name: 'Fannie Rowe',
    role: 'Marketing Manager',
    image: 'https://picsum.photos/seed/sana-feedback-3/120/120',
  },
  {
    quote:
      'Our family has been with Sana for years. Clean facilities, modern equipment, and doctors who truly listen to their patients.',
    name: 'Fannie Rowe',
    role: 'Marketing Manager',
    image: 'https://picsum.photos/seed/sana-feedback-4/120/120',
  },
] as const

const AUTOPLAY_MS = 5000

/** Client feedback carousel: auto-advances and responds to controls. */
export function Feedback() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length)
    }, AUTOPLAY_MS)
    return () => window.clearInterval(timer)
  }, [])

  const prev = () => setActive((current) => (current - 1 + slides.length) % slides.length)
  const next = () => setActive((current) => (current + 1) % slides.length)

  return (
    <section id="feedback" className="bg-band-50 py-24">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <h2 className="text-3xl font-bold text-ink-900">Enjoy our Client&rsquo;s Feedback</h2>
        <div className="relative mt-16">
          {slides.map((slide, index) => (
            <figure
              key={slide.quote}
              aria-hidden={index !== active}
              className={cn(
                'px-2 transition-opacity duration-300',
                index === active ? 'block' : 'hidden',
              )}
            >
              <blockquote className="text-base leading-8 text-ink-900 italic">
                &ldquo;{slide.quote}&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center justify-center gap-4">
                <img
                  src={slide.image}
                  alt={`${slide.name} portrait`}
                  className="h-14 w-14 rounded-full object-cover"
                  loading="lazy"
                />
                <figcaption className="text-left">
                  <h3 className="text-lg font-medium text-ink-900">{slide.name}</h3>
                  <p className="text-sm text-mute-500">{slide.role}</p>
                </figcaption>
              </div>
              <div className="mt-4 flex justify-center gap-1" aria-label="5 out of 5 stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
            </figure>
          ))}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous feedback"
            className="absolute top-1/2 -left-4 -translate-y-1/2 rounded-full border border-line-300 bg-white p-2 text-ink-900 transition-colors hover:text-primary-500 lg:-left-16"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next feedback"
            className="absolute top-1/2 -right-4 -translate-y-1/2 rounded-full border border-line-300 bg-white p-2 text-ink-900 transition-colors hover:text-primary-500 lg:-right-16"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
