import { Quote } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Justine Miller',
    role: 'Web Developer at Envato',
    quote:
      'Doflo transformed our digital presence. Their attention to detail and creative approach exceeded all expectations.',
  },
  {
    name: 'Danny Jonson',
    role: 'Creative Director at Apple',
    quote:
      'Working with Doflo was a game-changer. They delivered a product that perfectly captures our brand identity.',
  },
]

function TestimonialCard({ name, role, quote }: Testimonial) {
  return (
    <div className="rounded-lg bg-white p-8 shadow-md">
      <Quote className="mb-4 h-8 w-8 text-brand-400" aria-hidden="true" />
      <p className="mb-6 text-gray-600 italic leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-4">
        <img
          src={`https://picsum.photos/seed/${name.replace(/\s/g, '-')}/48/48`}
          alt={name}
          className="h-12 w-12 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">What Our Clients Say</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}
