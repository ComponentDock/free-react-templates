import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const slides = [
  'https://picsum.photos/seed/belmont-room-1/800/600',
  'https://picsum.photos/seed/belmont-room-2/800/600',
  'https://picsum.photos/seed/belmont-room-3/800/600',
]

export function BigRoom() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))

  return (
    <section className="bg-brand-darker py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left: Image slider */}
        <div className="relative overflow-hidden rounded">
          <img
            src={slides[current]}
            alt="Room with private swimming pool"
            className="h-72 w-full object-cover sm:h-96"
          />
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-ink transition hover:bg-white"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-ink transition hover:bg-white"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Right: Text + testimonial */}
        <div className="space-y-8 text-white">
          <div className="space-y-4">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Rooms with private swimming pool
            </h2>
            <p className="leading-relaxed text-white/70">
              Indulge in our exclusive rooms featuring private swimming pools. Each room is designed
              with the utmost attention to detail, offering a serene escape with premium amenities
              and stunning views.
            </p>
          </div>

          {/* Testimonial */}
          <div className="border-l-4 border-accent pl-6">
            <div className="mb-3 flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill="currentColor"
                  data-testid="testimonial-star"
                  className="text-accent"
                />
              ))}
            </div>
            <p className="mb-4 italic text-white/80">
              &ldquo;This was the best luxury hotel experience I have ever had. The private pool was
              absolutely wonderful and the service was impeccable.&rdquo;
            </p>
            <p className="text-sm font-semibold text-accent">— Sarah Johnson</p>
          </div>
        </div>
      </div>
    </section>
  )
}
