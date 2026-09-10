import { useState } from 'react'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    text: 'Own midst. Behold sea created male he together of That Said fourth deep abundantly have light night beginning rule darkness seed darkness which land saying moveth. Fifth shall wont signs, can seasons green days gathered great.',
    name: 'Daniel E Gilchrist',
    title: 'Manager, Vision',
    avatar: 'https://picsum.photos/seed/testimonial-1/80/80',
  },
  {
    text: 'Lights fly above bearing brought abundantly whose. Without one may I seed void whales great face god were deep be first. Unto for third be in moveth. Bring land bearing un abundantly firmament appear.',
    name: 'Sarah Mitchell',
    title: 'Director, Horizon',
    avatar: 'https://picsum.photos/seed/testimonial-2/80/80',
  },
  {
    text: 'Multiply which firmament deep make. Dominion over can yielding his moveth under of depend brought him is. Male bring land. His order moveth under of dry brought him is.',
    name: 'Robert Chen',
    title: 'CEO, Apex Solutions',
    avatar: 'https://picsum.photos/seed/testimonial-3/80/80',
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-heading sm:text-4xl">Customer Are Saying</h2>
          <p className="text-body">Winged hath had face creepeth abundantly</p>
        </div>

        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-12">
          {/* Thumbnails */}
          <div className="flex flex-row gap-4 lg:flex-col">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-16 w-16 overflow-hidden rounded-full border-2 transition-all ${
                  active === i ? 'border-brand-accent' : 'border-transparent opacity-60'
                }`}
                aria-label={`View testimonial from ${t.name}`}
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>

          {/* Quote slide */}
          <div className="flex-1 text-center">
            <Quote size={40} className="mx-auto mb-4 text-brand-start/50" aria-hidden="true" />
            <p className="mb-6 text-lg leading-relaxed text-body">{testimonials[active]!.text}</p>
            <h3 className="text-xl font-semibold text-heading">{testimonials[active]!.name}</h3>
            <h5 className="text-sm text-body">{testimonials[active]!.title}</h5>
          </div>
        </div>
      </div>
    </section>
  )
}
