import { useState } from 'react'

const testimonials = [
  {
    name: 'David Williams',
    role: 'Business Owner',
    text: 'Counsel provided exceptional legal representation for our company. Their expertise in corporate law saved us from a potentially devastating lawsuit.',
    avatar: 'https://picsum.photos/seed/counsel-testi-1/100/100',
  },
  {
    name: 'Jennifer Martinez',
    role: 'Entrepreneur',
    text: "The team at Counsel went above and beyond to protect my intellectual property. I couldn't have asked for a better legal partner.",
    avatar: 'https://picsum.photos/seed/counsel-testi-2/100/100',
  },
  {
    name: 'Robert Thompson',
    role: 'Real Estate Developer',
    text: 'From contract negotiation to dispute resolution, Counsel handled everything with professionalism and skill. Highly recommended.',
    avatar: 'https://picsum.photos/seed/counsel-testi-3/100/100',
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)
  const current = testimonials[active]!

  return (
    <section className="bg-section-bg py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">Testimonial</h2>
          <p className="mt-4 text-base text-mist">What our clients say about us</p>
        </div>

        <div className="mt-12 mx-auto max-w-3xl">
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <p className="text-base leading-relaxed text-mist italic">
              &ldquo;{current.text}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-4">
              <img
                src={current.avatar}
                alt={current.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="font-display font-bold text-ink">{current.name}</p>
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
