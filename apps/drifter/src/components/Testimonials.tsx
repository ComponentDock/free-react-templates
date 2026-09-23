import { Quote } from 'lucide-react'

const testimonials = [
  {
    text: 'If you are looking at blank cassettes on the web, you may be very confused at the difference in price. As conscious traveling Paupers we must always be concerned about our dear Mother Earth.',
    name: 'Fanny Spencer',
    role: 'CEO at Apple',
  },
  {
    text: 'If you are looking at blank cassettes on the web, you may be very confused at the difference in price. As conscious traveling Paupers we must always be concerned about our dear Mother Earth.',
    name: 'Fanny Spencer',
    role: 'CEO at Apple',
  },
  {
    text: 'If you are looking at blank cassettes on the web, you may be very confused at the difference in price. As conscious traveling Paupers we must always be concerned about our dear Mother Earth.',
    name: 'Fanny Spencer',
    role: 'CEO at Apple',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-light-bg py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="font-heading text-3xl font-bold text-heading">Testimonials</h2>
        <p className="mx-auto mt-3 max-w-2xl text-body-muted">
          If you are looking at blank cassettes on the web, you may be very confused at the
          difference in price.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ text, name, role }, i) => (
            <div key={i} className="rounded-lg bg-white p-8 text-left shadow-sm">
              <Quote className="mb-4 h-8 w-8 text-brand-teal" />
              <p className="text-sm leading-relaxed text-body-muted">{text}</p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={`https://picsum.photos/seed/drifter-testi-${i}/60/60`}
                  alt={name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-heading text-sm font-semibold text-heading">{name}</p>
                  <p className="text-xs text-body-muted">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
