import { useState } from 'react'
import { Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const testimonials = [
  {
    date: '02/02/2024',
    rating: 5,
    quote:
      'An absolutely wonderful stay. The rooms were immaculate, the staff incredibly welcoming, and the facilities top-notch.',
    author: 'Sarah Johnson',
    role: 'Travel Blogger',
    photo: 'https://picsum.photos/seed/lodge-author1/80/80',
  },
  {
    date: '15/03/2024',
    rating: 5,
    quote:
      'The wellness center was the highlight of our trip. Pure relaxation from check-in to check-out. Will definitely return.',
    author: 'Michael Chen',
    role: 'Business Traveler',
    photo: 'https://picsum.photos/seed/lodge-author2/80/80',
  },
  {
    date: '28/01/2024',
    rating: 4,
    quote:
      'Beautiful hotel with great attention to detail. The restaurant served exceptional cuisine and the views were breathtaking.',
    author: 'Emily Davis',
    role: 'Vacationer',
    photo: 'https://picsum.photos/seed/lodge-author3/80/80',
  },
]

export function Guestbook() {
  const [active, setActive] = useState(0)
  const current = testimonials[active]!

  return (
    <section id="guestbook" className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <h2
          className="mb-12 text-center text-3xl font-bold"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Guestbook
        </h2>

        {/* Testimonial card */}
        <div className="rounded-lg bg-lodge-50 p-8 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-wider text-lodge-400">
            {current.date}
          </span>
          <div className="mb-4 flex justify-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'h-4 w-4',
                  i < current.rating ? 'fill-gold-500 text-gold-500' : 'text-lodge-300',
                )}
              />
            ))}
          </div>
          <p
            className="mb-6 text-lg leading-relaxed text-lodge-700 italic"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            &ldquo;{current.quote}&rdquo;
          </p>
          <div className="flex items-center justify-center gap-3">
            <img
              src={current.photo}
              alt={current.author}
              className="h-10 w-10 rounded-full object-cover"
              loading="lazy"
            />
            <div className="text-left">
              <p className="text-sm font-bold">{current.author}</p>
              <p className="text-xs text-lodge-400">{current.role}</p>
            </div>
          </div>
        </div>

        {/* Tab dots */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={cn(
                'h-2.5 w-2.5 rounded-full transition-colors',
                i === active ? 'bg-gold-500' : 'bg-lodge-300 hover:bg-lodge-400',
              )}
              aria-label={`Show testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
