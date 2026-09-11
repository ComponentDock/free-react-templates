import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
    name: 'John Doe',
    role: 'CEO, Company Name',
  },
  {
    quote:
      'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint.',
    name: 'Jane Smith',
    role: 'Director, Company Name',
  },
  {
    quote:
      'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis.',
    name: 'Bob Wilson',
    role: 'Manager, Company Name',
  },
] as const

export function Testimonial() {
  return (
    <section id="testimonial" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Subtitle</p>
          <h2 className="mt-2 text-3xl font-bold text-heading">Testimonial</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-lg bg-light p-8 text-center">
              <Quote className="mx-auto h-8 w-8 text-accent" aria-hidden="true" />
              <p className="mt-4 text-sm leading-relaxed text-body italic">"{item.quote}"</p>
              <div className="mt-6">
                <p className="text-sm font-bold text-heading">{item.name}</p>
                <p className="text-xs text-body">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
