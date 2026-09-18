import { Star } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  rating: number
  text: string
  avatarSeed: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Fannie Rowe',
    rating: 3,
    text: 'Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.',
    avatarSeed: 'curate-avatar-1',
  },
  {
    id: 2,
    name: 'Hulda Sutton',
    rating: 3,
    text: 'Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.',
    avatarSeed: 'curate-avatar-2',
  },
  {
    id: 3,
    name: 'Lillie Summers',
    rating: 3,
    text: 'Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.',
    avatarSeed: 'curate-avatar-3',
  },
  {
    id: 4,
    name: 'Ruth Burns',
    rating: 2,
    text: 'Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.',
    avatarSeed: 'curate-avatar-4',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'fill-star text-star' : 'text-gray-300'}
          aria-hidden="true"
        />
      ))}
      <span className="sr-only">{rating} out of 5 stars</span>
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-4">
        <img
          src={`https://picsum.photos/seed/${testimonial.avatarSeed}/80/80`}
          alt={testimonial.name}
          className="h-12 w-12 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <h4 className="font-semibold text-ink">{testimonial.name}</h4>
          <StarRating rating={testimonial.rating} />
        </div>
      </div>
      <p className="text-sm leading-relaxed text-mist">{testimonial.text}</p>
    </div>
  )
}

export function Testimonials() {
  return (
    <section id="testimonial" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-ink">How Our Customers Treat Us</h2>
          <p className="text-mist">Who are in extremely love with eco friendly system..</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
