import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

interface Testimonial {
  id: number
  quote: string
  name: string
  role: string
  avatarSeed: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote:
      'This platform helped me so much in understanding complex subjects. The instructors are world-class and the materials are top-notch.',
    name: 'Emily Carter',
    role: 'Student',
    avatarSeed: 'lectio-test-1',
  },
  {
    id: 2,
    quote:
      'I went from knowing nothing about software engineering to building full-stack apps in six months. Absolutely life-changing experience.',
    name: 'James Wilson',
    role: 'Student',
    avatarSeed: 'lectio-test-2',
  },
  {
    id: 3,
    quote:
      'The online courses are incredibly well-structured. I was able to study at my own pace while working full-time.',
    name: 'Sarah Thompson',
    role: 'Student',
    avatarSeed: 'lectio-test-3',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1))

  const t = TESTIMONIALS[current]!

  return (
    <section className="bg-gradient-to-b from-primary-400 to-brand py-20 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Quote className="mx-auto mb-6 h-10 w-10 text-white/30" aria-hidden="true" />

        <blockquote className="mb-8 text-lg font-light leading-relaxed text-white/90 sm:text-xl">
          &ldquo;{t.quote}&rdquo;
        </blockquote>

        <div className="mb-8 flex items-center justify-center gap-4">
          <img
            src={`https://picsum.photos/seed/${t.avatarSeed}/80/80`}
            alt={`${t.name} avatar`}
            className="h-14 w-14 rounded-full border-2 border-white/30 object-cover"
          />
          <div className="text-left">
            <p className="font-semibold text-white">{t.name}</p>
            <p className="text-sm text-white/70">{t.role}</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  i === current ? 'bg-white' : 'bg-white/40'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
