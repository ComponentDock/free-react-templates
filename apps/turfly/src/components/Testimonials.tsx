import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Homeowner',
    image: 'https://picsum.photos/seed/turfly-sarah/100/100',
    quote:
      'Turfly transformed our backyard into a beautiful garden retreat. Their attention to detail and professionalism is outstanding.',
    rating: 5,
  },
  {
    name: 'James Cooper',
    role: 'Property Manager',
    image: 'https://picsum.photos/seed/turfly-james/100/100',
    quote:
      'Reliable, efficient, and always on time. They maintain all of our rental properties and the results speak for themselves.',
    rating: 5,
  },
  {
    name: 'Emily Watson',
    role: 'Business Owner',
    image: 'https://picsum.photos/seed/turfly-emily/100/100',
    quote:
      'Our office grounds have never looked better. The seasonal care plan keeps everything green and inviting year-round.',
    rating: 5,
  },
] as const

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-accent-400 text-accent-400" aria-hidden="true" />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="testimonials-heading"
          className="text-center text-3xl font-bold text-ink sm:text-4xl"
        >
          Happy Clients
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500">
          See what our satisfied customers have to say about our lawn care services.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg bg-white p-6 text-center shadow-sm">
              <img
                src={t.image}
                alt={t.name}
                className="mx-auto h-16 w-16 rounded-full object-cover"
                loading="lazy"
              />
              <Stars count={t.rating} />
              <p className="mt-4 text-sm leading-relaxed text-gray-500">&ldquo;{t.quote}&rdquo;</p>
              <h3 className="mt-4 text-sm font-bold text-ink">{t.name}</h3>
              <p className="text-xs text-gray-400">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
