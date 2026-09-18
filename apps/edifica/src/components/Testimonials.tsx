import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Edifica transformed our vision into reality. Their attention to detail and commitment to quality is unmatched in the industry.',
    name: 'Sarah Mitchell',
    role: 'Property Developer',
    avatar: 'edifica-avatar-1',
  },
  {
    quote:
      'Working with the Edifica team was a seamless experience. They delivered our commercial project on time and within budget.',
    name: 'James Carter',
    role: 'Business Owner',
    avatar: 'edifica-avatar-2',
  },
  {
    quote:
      'The craftsmanship and professionalism of Edifica exceeded all our expectations. Highly recommend for any construction project.',
    name: 'Emily Rodriguez',
    role: 'Homeowner',
    avatar: 'edifica-avatar-3',
  },
]

export function Testimonials() {
  return (
    <section className="bg-accent-400 py-16" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-white/80">
            Testimonial
          </span>
          <h2 id="testimonials-heading" className="text-3xl font-bold text-white">
            Happy Clients
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <Quote size={24} className="mb-4 text-primary-400" />
              <p className="mb-6 text-sm leading-relaxed text-white/90">{t.quote}</p>
              <div className="flex items-center gap-3">
                <img
                  src={`https://picsum.photos/seed/${t.avatar}/48/48`}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-white/70">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
