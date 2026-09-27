import { Star, Quote } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  role: string
  text: string
  image: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Arise Naieh',
    role: 'Property Buyer',
    text: 'Exceptional service! The team helped me find my dream home in just two weeks. Highly recommended for anyone looking for a seamless real estate experience.',
    image: 'https://picsum.photos/seed/dwelling-testi-1/100/100',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Torres',
    role: 'Property Investor',
    text: 'Professional, responsive, and truly invested in finding the right property. They understood my investment goals and delivered beyond expectations.',
    image: 'https://picsum.photos/seed/dwelling-testi-2/100/100',
    rating: 5,
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'First-time Renter',
    text: 'As a first-time renter, I was nervous about the process. The team walked me through everything and made it stress-free. Will definitely use again!',
    image: 'https://picsum.photos/seed/dwelling-testi-3/100/100',
    rating: 4,
  },
]

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="rounded-lg bg-bg-light p-6">
      <Quote size={32} className="text-brand/30" />
      <p className="mt-3 text-sm leading-relaxed text-text-muted">{testimonial.text}</p>
      <div className="mt-4 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
          />
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <h4 className="font-heading text-sm font-bold text-text-dark">{testimonial.name}</h4>
          <p className="text-xs text-text-muted">{testimonial.role}</p>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="bg-bg-light py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-sm font-semibold uppercase tracking-widest text-brand">
            What Our Clients Say
          </h2>
          <h3 className="mt-2 font-heading text-3xl font-bold text-text-dark">Testimonials</h3>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
