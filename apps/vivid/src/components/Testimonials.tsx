import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Creative Director',
    quote:
      'Molestie at elementum eu facilisis sed odio. Scelerisque in dictum non consectetur a erat. Aliquam id diam maecenas ultricies mi eget mauris.',
    avatar: 'https://picsum.photos/seed/vivid-testi-1/100/100',
  },
  {
    name: 'James Wilson',
    role: 'Product Manager',
    quote:
      'Molestie at elementum eu facilisis sed odio. Scelerisque in dictum non consectetur a erat. Aliquam id diam maecenas ultricies mi eget mauris.',
    avatar: 'https://picsum.photos/seed/vivid-testi-2/100/100',
  },
  {
    name: 'Emily Park',
    role: 'UX Designer',
    quote:
      'Molestie at elementum eu facilisis sed odio. Scelerisque in dictum non consectetur a erat. Aliquam id diam maecenas ultricies mi eget mauris.',
    avatar: 'https://picsum.photos/seed/vivid-testi-3/100/100',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]!

  return (
    <section className="relative py-32">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/vivid-testi-bg/1920/800)' }}
      />
      <div className="absolute inset-0 bg-dark-bg opacity-85" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        {/* Avatar */}
        <img
          src={t.avatar}
          alt={t.name}
          className="mx-auto mb-6 h-20 w-20 rounded-full border-4 border-white/20 object-cover"
        />

        <h3 className="mb-1 text-xl font-bold text-white">{t.name}</h3>
        <span className="mb-6 block text-sm text-white/60">{t.role}</span>
        <p className="mb-8 text-lg leading-relaxed text-white/80">&ldquo;{t.quote}&rdquo;</p>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="text-white/60 transition-colors hover:text-white"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="text-white/60 transition-colors hover:text-white"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  )
}
