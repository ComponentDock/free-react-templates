import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Roger Scott',
    role: 'Marketing Manager',
    text: 'Exceptional legal representation. They fought tirelessly for my case and delivered outstanding results.',
    image: 'statutory-person1',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Business Owner',
    text: 'Professional, responsive, and deeply knowledgeable. They guided my company through complex regulatory matters.',
    image: 'statutory-person2',
  },
  {
    name: 'James Rivera',
    role: 'Real Estate Agent',
    text: 'Trustworthy counsel that always puts the client first. Highly recommend for any legal matter.',
    image: 'statutory-person3',
  },
]

export function Testimonials() {
  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{
        backgroundImage:
          'linear-gradient(rgba(29,34,39,0.8),rgba(29,34,39,0.8)), url(https://picsum.photos/seed/statutory-testimonial/1920/800)',
      }}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">
            Testimonial
          </span>
          <h2 className="mt-2 text-3xl font-bold text-white">Happy Clients</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded bg-white/10 p-6 backdrop-blur">
              <Quote className="mb-4 h-8 w-8 text-gold" />
              <p className="mb-6 text-white/90">{t.text}</p>
              <div className="flex items-center gap-3">
                <img
                  src={`https://picsum.photos/seed/${t.image}/80/80`}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-sm text-white/60">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
