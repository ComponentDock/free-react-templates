import { Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Elite Martin',
    quote:
      'Exceptional work and attention to detail. The project was delivered on time and exceeded all expectations. Highly recommended!',
    seed: 'kael-t1',
  },
  {
    name: 'David Saden',
    quote:
      'Professional, creative, and responsive. Transformed our vision into a stunning reality. Would absolutely work together again.',
    seed: 'kael-t2',
  },
  {
    name: 'Sarah Chen',
    quote:
      'Incredible developer with a keen eye for design. The final product was polished, performant, and exactly what we needed.',
    seed: 'kael-t3',
  },
]

export function Testimonials() {
  return (
    <section className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold uppercase text-ink md:text-4xl">
            Client Say About Me
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-smoke">
            Trusted by clients worldwide to deliver outstanding results and exceptional digital
            experiences.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex flex-col items-center rounded-xl bg-white p-8 text-center shadow-sm dark:bg-gray-900"
            >
              <img
                src={`https://picsum.photos/seed/${t.seed}/120/120`}
                alt={t.name}
                className="mb-4 h-20 w-20 rounded-full object-cover"
                width={80}
                height={80}
              />
              <h4 className="mb-2 font-display text-lg font-bold text-ink">{t.name}</h4>
              <div className="mb-4 flex gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-smoke">{t.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
