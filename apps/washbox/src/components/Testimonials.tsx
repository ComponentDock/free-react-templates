import { useState } from 'react'
import { Quote } from 'lucide-react'

interface Testimonial {
  quote: string
  name: string
  role: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'The automated process starts as soon as your vehicle goes into the wash bay. The outcome is a gleaming finish that exceeds expectations every single time.',
    name: 'Sarah Mitchell',
    role: 'Business Owner',
  },
  {
    quote:
      'Outstanding attention to detail. My car has never looked this good — the interior detailing was absolutely thorough and the exterior polish is showroom quality.',
    name: 'James Cooper',
    role: 'Returning Customer',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const active = TESTIMONIALS[current]

  return (
    <section className="py-20 lg:py-28 bg-[#010A44] relative overflow-hidden" id="testimonials">
      {/* Decorative background image */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20"
        style={{
          backgroundImage: `url('https://picsum.photos/seed/washbox-testi/600/800')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="relative">
            <Quote size={48} className="text-brand/30 mb-4" />

            <blockquote className="text-white text-lg sm:text-xl leading-relaxed mb-8">
              &ldquo;{active!.quote}&rdquo;
            </blockquote>

            <div className="flex items-center gap-4">
              <img
                src={`https://picsum.photos/seed/washbox-avatar-${current}/64/64`}
                alt={active!.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <span className="text-white font-semibold block">{active!.name}</span>
                <span className="text-white/60 text-sm">{active!.role}</span>
              </div>
            </div>

            {/* Dot navigation */}
            <div className="flex gap-2 mt-8">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === current ? 'bg-brand' : 'bg-white/30'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
