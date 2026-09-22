import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Excellent service from start to finish. The team replaced our entire roof in just two days and the quality is outstanding.',
    name: 'Sarah Mitchell',
    role: 'Homeowner',
    seed: 'shingle-person-1',
  },
  {
    quote:
      'Professional, punctual, and affordable. They handled our commercial roofing project without any disruption to our business.',
    name: 'James Carter',
    role: 'Business Owner',
    seed: 'shingle-person-2',
  },
  {
    quote:
      'After the storm damage, they were at our property within hours. Quick response and a thorough repair job.',
    name: 'Emily Rodriguez',
    role: 'Property Manager',
    seed: 'shingle-person-3',
  },
] as const

export function Testimonials() {
  return (
    <section className="bg-paper py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-semibold text-ink sm:text-3xl">
          Happy Clients &amp; Feedback
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
            >
              <Quote className="h-8 w-8 text-brand/30" aria-hidden="true" />
              <p className="mt-4 leading-relaxed text-mist">{t.quote}</p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={`https://picsum.photos/seed/${t.seed}/80/80`}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-mist">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
