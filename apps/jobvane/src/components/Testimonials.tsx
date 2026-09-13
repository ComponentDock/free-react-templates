import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Danica Lewis',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    rating: 5,
  },
  {
    name: 'Nicole Simon',
    quote:
      'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy.',
    rating: 5,
  },
  {
    name: 'Cloe Meyer',
    quote:
      'The quick brown fox jumps over the lazy dog. A wonderful serenity has taken possession of my entire soul.',
    rating: 4,
  },
  {
    name: 'Rachel Clinton',
    quote:
      'Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts separated.',
    rating: 5,
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const visible = 2
  const max = testimonials.length - visible

  const prev = () => setIndex((i) => Math.max(0, i - 1))
  const next = () => setIndex((i) => Math.min(max, i + 1))

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-extrabold text-ink">Happy Clients</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${index * 50}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.name} className="w-1/2 flex-shrink-0 px-4">
                  <div className="rounded-lg bg-gray-50 p-6">
                    <p className="mb-4 italic text-smoke">{t.quote}</p>
                    <div className="flex items-center gap-4">
                      <img
                        src={`https://picsum.photos/seed/${t.name.toLowerCase().replace(/\s+/g, '-')}/50/50`}
                        alt={t.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-bold text-ink">{t.name}</h4>
                        <div className="flex gap-0.5">
                          {Array.from({ length: t.rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-colors hover:bg-gray-100"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-colors hover:bg-gray-100"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
