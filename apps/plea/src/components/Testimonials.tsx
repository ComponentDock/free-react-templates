import { useState, useCallback, useEffect } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    text: 'Plea helped me navigate through the most difficult time in my life. Their counseling services provided the support and guidance I needed to find clarity and peace.',
    name: 'Sarah Johnson',
    role: 'Client',
    avatar: 'https://picsum.photos/seed/avatar1/80/80',
  },
  {
    text: 'The legal team at Plea was incredibly professional and compassionate. They made the entire process seamless and kept me informed every step of the way.',
    name: 'Michael Chen',
    role: 'Client',
    avatar: 'https://picsum.photos/seed/avatar2/80/80',
  },
  {
    text: 'Thanks to the family therapy sessions, my relationship with my children has improved dramatically. I cannot recommend Plea highly enough.',
    name: 'Emily Rodriguez',
    role: 'Client',
    avatar: 'https://picsum.photos/seed/avatar3/80/80',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const t = testimonials[current]!

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/plea-testi/1920/1080)' }}
    >
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Quote className="mx-auto mb-6 h-10 w-10 text-[#589167]" />

        <blockquote className="mb-8 text-lg leading-relaxed text-white/90">"{t.text}"</blockquote>

        <div className="mb-8 flex items-center justify-center gap-4">
          <img
            src={t.avatar}
            alt={t.name}
            className="h-12 w-12 rounded-full object-cover"
            loading="lazy"
          />
          <div className="text-left">
            <p className="font-semibold text-white">{t.name}</p>
            <p className="text-sm text-white/60">{t.role}</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-white hover:bg-white/10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-white hover:bg-white/10"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
