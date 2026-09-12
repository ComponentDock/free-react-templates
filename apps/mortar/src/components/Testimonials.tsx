import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Emily Watson',
    role: 'CEO, BrightPath',
    text: 'Working with this team was an absolute pleasure. They understood our vision from day one and delivered results that exceeded our expectations.',
    image: 'https://picsum.photos/seed/mortar-testimonial-1/100/100',
  },
  {
    name: 'David Kim',
    role: 'Founder, NovaTech',
    text: 'Professional, creative, and detail-oriented. They transformed our online presence completely and helped us reach new audiences.',
    image: 'https://picsum.photos/seed/mortar-testimonial-2/100/100',
  },
  {
    name: 'Sophie Laurent',
    role: 'Marketing Director, UrbanStyle',
    text: 'The attention to design quality and user experience is unmatched. Our conversion rates improved significantly after the redesign.',
    image: 'https://picsum.photos/seed/mortar-testimonial-3/100/100',
  },
  {
    name: 'Michael Torres',
    role: 'CTO, DataFlow',
    text: 'Their technical expertise combined with creative thinking produced a solution that perfectly balances form and function.',
    image: 'https://picsum.photos/seed/mortar-testimonial-4/100/100',
  },
] as const

interface TestimonialCardProps {
  name: string
  role: string
  text: string
  image: string
}

function TestimonialCard({ name, role, text, image }: TestimonialCardProps) {
  return (
    <div className="rounded border border-gray-100 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-4 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-accent-400 text-accent-400" aria-hidden="true" />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-smoke dark:text-gray-300">&ldquo;{text}&rdquo;</p>
      <div className="mt-6 flex items-center gap-4">
        <img
          src={image}
          alt={`Portrait of ${name}`}
          className="h-12 w-12 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <p className="text-sm font-medium text-ink dark:text-gray-100">{name}</p>
          <p className="text-xs text-smoke dark:text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" aria-label="Testimonials" className="bg-mist py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl font-medium text-ink dark:text-gray-100">What Our Clients Say</h2>
          <p className="mt-5 leading-relaxed text-smoke dark:text-gray-400">
            Hear from the businesses and teams we have helped achieve their digital goals.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
