import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Smilecraft completely transformed my smile. The team was professional and made me feel comfortable throughout the entire process.',
    name: 'Sarah Johnson',
    role: 'Patient',
    rating: 5,
  },
  {
    quote:
      'I was nervous about dental work, but the doctors here are incredibly gentle and caring. I actually look forward to my appointments now!',
    name: 'Michael Brown',
    role: 'Patient',
    rating: 5,
  },
  {
    quote:
      'The best dental experience I have ever had. Modern facilities, friendly staff, and excellent results. Highly recommend Smilecraft!',
    name: 'Emily Davis',
    role: 'Patient',
    rating: 5,
  },
] as const

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">What Our Patients Say</h2>
          <p className="mx-auto mt-3 max-w-xl text-body">
            Real stories from our satisfied patients about their Smilecraft experience.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-lg border border-gray-200 bg-light-bg p-6">
              <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }, (_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-400"
                    fill="currentColor"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-body">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4">
                <p className="font-bold text-ink">{t.name}</p>
                <p className="text-xs text-body">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
