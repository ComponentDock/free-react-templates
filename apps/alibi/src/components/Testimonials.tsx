import { useState } from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'David Williams',
    role: 'Business Owner',
    text: 'Alibi provided exceptional legal representation for our company. Their expertise in corporate law saved us from a potentially devastating lawsuit.',
    avatar: 'https://picsum.photos/seed/alibi-testi-1/100/100',
    rating: 5,
  },
  {
    name: 'Jennifer Martinez',
    role: 'Entrepreneur',
    text: 'The team at Alibi went above and beyond to protect my intellectual property. I could not have asked for a better legal partner.',
    avatar: 'https://picsum.photos/seed/alibi-testi-2/100/100',
    rating: 5,
  },
  {
    name: 'Robert Thompson',
    role: 'Real Estate Developer',
    text: 'From contract negotiation to dispute resolution, Alibi handled everything with professionalism and skill. Highly recommended.',
    avatar: 'https://picsum.photos/seed/alibi-testi-3/100/100',
    rating: 5,
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)
  const current = testimonials[active]!

  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">Testimonials</h2>
          <p className="mt-4 text-base text-mist">What our clients say about us</p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="rounded-lg bg-white p-8 shadow-sm">
            <p className="text-base leading-relaxed text-mist italic">
              &ldquo;{current.text}&rdquo;
            </p>
            <div className="mt-4 flex items-center gap-1">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  aria-hidden="true"
                />
              ))}
            </div>
            <div className="mt-4 flex items-center gap-4">
              <img
                src={current.avatar}
                alt={current.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-ink">{current.name}</p>
                <p className="text-sm text-mist">{current.role}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show testimonial from ${t.name}`}
                className={`h-10 w-10 overflow-hidden rounded-full border-2 transition-colors ${
                  i === active ? 'border-brand' : 'border-gray-300'
                }`}
              >
                <img src={t.avatar} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
