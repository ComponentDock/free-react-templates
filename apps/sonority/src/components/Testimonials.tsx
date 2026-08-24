import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    title: 'Music Enthusiast',
    quote:
      'Sonority has completely changed how I discover new music. The personalized playlists are spot on!',
    avatar: 'https://picsum.photos/seed/sonority-avatar1/80/80',
  },
  {
    name: 'Michael Chen',
    title: 'Podcast Creator',
    quote:
      'The audio quality is incredible. I can finally hear every detail in my favorite tracks.',
    avatar: 'https://picsum.photos/seed/sonority-avatar2/80/80',
  },
  {
    name: 'Emma Davis',
    title: 'DJ & Producer',
    quote: 'Offline mode is a lifesaver. I download sets before flights and never miss a beat.',
    avatar: 'https://picsum.photos/seed/sonority-avatar3/80/80',
  },
  {
    name: 'James Wilson',
    title: 'Casual Listener',
    quote: 'No ads and unlimited skips? That alone makes Premium worth every penny.',
    avatar: 'https://picsum.photos/seed/sonority-avatar4/80/80',
  },
]

function Stars() {
  return (
    <div className="mb-4 flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  )
}

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const total = TESTIMONIALS.length

  const prev = () => setCurrent((i) => (i - 1 + total) % total)
  const next = () => setCurrent((i) => (i + 1) % total)

  const t = TESTIMONIALS[current]!

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-brand-dark md:text-4xl">
            Customers are loving Sonority
          </h2>
        </div>
        <div className="relative mx-auto max-w-2xl">
          <div className="rounded-2xl bg-brand-section p-8 text-center md:p-12">
            <img
              src={t.avatar}
              alt={t.name}
              className="mx-auto mb-4 h-16 w-16 rounded-full object-cover"
              width={64}
              height={64}
            />
            <h3 className="mb-1 text-lg font-semibold text-brand-dark">{t.name}</h3>
            <p className="mb-4 text-sm text-brand-body">{t.title}</p>
            <Stars />
            <p className="text-brand-body italic">&ldquo;{t.quote}&rdquo;</p>
          </div>
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-x-12 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-colors hover:bg-brand-blue hover:text-white"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 rounded-full bg-white p-2 shadow-md transition-colors hover:bg-brand-blue hover:text-white"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-3 w-3 rounded-full transition-colors ${
                i === current ? 'bg-brand-blue' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
