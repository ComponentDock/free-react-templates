import { useState, useEffect, useCallback } from 'react'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    text: 'Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. Aliquam finibus nulla quam, a iaculis justo finibus non. Suspendisse in fermentum nunc.',
    name: 'Michelle Williams',
    location: 'Client, Los Angeles',
    avatar: 'https://picsum.photos/seed/vignette-avatar1/100/100',
  },
  {
    text: 'Aliquam finibus nulla quam, a iaculis justo finibus non. Nunc pulvinar molestie sem id blandit. Suspendisse in fermentum nunc. Pellentesque ac lectus at odio.',
    name: 'Sarah Connor',
    location: 'Client, New York',
    avatar: 'https://picsum.photos/seed/vignette-avatar2/100/100',
  },
  {
    text: 'Pellentesque ac lectus at odio viverra hendrerit. Nunc venenatis interdum mollis. Aliquam finibus nulla quam, a iaculis justo finibus non. Suspendisse in fermentum nunc.',
    name: 'Emily Carter',
    location: 'Client, Chicago',
    avatar: 'https://picsum.photos/seed/vignette-avatar3/100/100',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const t = testimonials[current]!

  return (
    <section aria-label="Testimonials" className="bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-ink">Testimonials</h2>

        <div className="mt-12">
          <Quote className="mx-auto h-8 w-8 text-brand/30" aria-hidden="true" />
          <blockquote className="mt-4 text-base leading-relaxed text-mist">
            &ldquo;{t.text}&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <img
              src={t.avatar}
              alt=""
              className="h-12 w-12 rounded-full object-cover"
              loading="lazy"
            />
            <div className="text-left">
              <p className="text-sm font-bold text-ink">{t.name}</p>
              <p className="text-xs text-mist">{t.location}</p>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === current ? 'w-8 bg-brand' : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
