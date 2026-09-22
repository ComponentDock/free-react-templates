import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Fanny Spencer',
    stars: 5,
    text: 'As conscious traveling paupers we must always be concerned about our dear Mother Earth. If you think about it, you travel across her face and She is the host to your journey.',
    avatar: 'grandeur-test1',
  },
  {
    name: 'James Whitmore',
    stars: 5,
    text: 'An unforgettable stay that exceeded every expectation. The staff went above and beyond to ensure our comfort from check-in to departure.',
    avatar: 'grandeur-test2',
  },
  {
    name: 'Elena Rodriguez',
    stars: 5,
    text: 'The rooms are beautifully appointed, the dining is world-class, and the atmosphere is simply perfect. We will absolutely return.',
    avatar: 'grandeur-test3',
  },
]

export function Testimonials() {
  return (
    <section className="bg-light-alt py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Quote icon */}
        <div className="mb-8 text-center">
          <Quote className="mx-auto h-12 w-12 text-brand/30" />
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded bg-white p-8 text-center shadow-sm">
              <div className="mb-4 flex justify-center">
                <img
                  src={`https://picsum.photos/seed/${t.avatar}/80/80`}
                  alt={t.name}
                  className="h-16 w-16 rounded-full object-cover"
                  loading="lazy"
                />
              </div>
              <h4 className="mb-2 font-heading text-lg font-semibold text-ink">{t.name}</h4>
              <div className="mb-4 flex justify-center gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand text-brand" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-body">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
