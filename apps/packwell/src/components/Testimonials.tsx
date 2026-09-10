import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    name: 'Jabin Kane',
    role: 'CEO, TopSmmPanel.com',
    avatar: 'packwell-testi-1',
  },
  {
    quote:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    name: 'Sarah Mitchell',
    role: 'Director, FreightCore',
    avatar: 'packwell-testi-2',
  },
  {
    quote:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.',
    name: 'David Chen',
    role: 'Logistics Manager, ShipLink',
    avatar: 'packwell-testi-3',
  },
] as const

export function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  const next = () => setActive((i) => (i === testimonials.length - 1 ? 0 : i + 1))

  const current = testimonials[active]!

  return (
    <section className="bg-paper py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-ink">What Client&apos;s Say</h2>

        {/* Photo dots */}
        <div className="mt-8 flex items-center justify-center gap-3">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActive(i)}
              aria-label={`View testimonial from ${t.name}`}
              className={`h-14 w-14 overflow-hidden rounded-full border-2 transition-colors ${
                i === active ? 'border-brand' : 'border-transparent'
              }`}
            >
              <img
                src={`https://picsum.photos/seed/${t.avatar}/100/100`}
                alt={t.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="mt-4 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-ink transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-ink transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Active testimonial */}
        <div className="mt-8 text-center">
          <blockquote className="mx-auto max-w-3xl text-sm leading-relaxed text-mist italic">
            &ldquo;{current.quote}&rdquo;
          </blockquote>
          <h3 className="mt-4 text-lg font-bold text-ink">{current.name}</h3>
          <p className="text-sm text-mist">{current.role}</p>
        </div>
      </div>
    </section>
  )
}
