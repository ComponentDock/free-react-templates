import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      "Accessible though WAI-ARIA design patterns example,easy to navigate and doesn't take much brainpower to figure out.",
    name: 'David Smith',
    role: 'Creative Director',
  },
  {
    quote:
      'From the moment I started working with this team, I felt heard and understood. They truly care about delivering quality work.',
    name: 'Sarah Johnson',
    role: 'Product Manager',
  },
  {
    quote:
      'An exceptional experience from start to finish. The attention to detail and commitment to excellence is unmatched.',
    name: 'Michael Chen',
    role: 'CEO, TechStart',
  },
] as const

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-mist py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center font-display text-3xl font-semibold text-ink">
          What Our Clients Say
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-lg bg-white p-8 shadow-sm">
              <Quote className="mb-4 h-8 w-8 text-primary-400/30" aria-hidden="true" />
              <p className="mb-6 text-sm leading-relaxed text-smoke">{item.quote}</p>
              <div>
                <h6 className="text-sm font-semibold text-ink">{item.name}</h6>
                <p className="text-xs text-smoke">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
