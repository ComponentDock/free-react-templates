import { useState, useEffect, useCallback } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    text: 'Exceptional service and attention to detail. They transformed our vision into a stunning reality.',
    name: 'Garreth Smith',
    role: 'Marketing Manager',
    avatar: 'https://picsum.photos/seed/airy-person-1/100/100',
  },
  {
    text: 'Professional, creative, and always on time. The best team we have worked with.',
    name: 'Sarah Johnson',
    role: 'Interface Designer',
    avatar: 'https://picsum.photos/seed/airy-person-2/100/100',
  },
  {
    text: 'Their design expertise helped us stand out in a crowded market. Highly recommended.',
    name: 'Michael Chen',
    role: 'UI Designer',
    avatar: 'https://picsum.photos/seed/airy-person-3/100/100',
  },
  {
    text: 'From concept to execution, the process was seamless. The results exceeded expectations.',
    name: 'Emily Davis',
    role: 'Web Developer',
    avatar: 'https://picsum.photos/seed/airy-person-4/100/100',
  },
  {
    text: 'A truly collaborative partner who understands the importance of user experience.',
    name: 'David Wilson',
    role: 'System Analyst',
    avatar: 'https://picsum.photos/seed/airy-person-5/100/100',
  },
]

export function Testimony() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const t = testimonials[current]!

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary-300">
            Testimony
          </span>
          <h2 className="mt-2 text-3xl font-bold text-ink">What Our Clients Say</h2>
        </div>
        <div className="relative mx-auto max-w-2xl text-center">
          <button
            onClick={prev}
            className="absolute -left-12 top-1/2 -translate-y-1/2 text-ink-muted transition hover:text-ink"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="mb-6 flex justify-center">
            <img
              src={t.avatar}
              alt={t.name}
              className="h-20 w-20 rounded-full object-cover ring-4 ring-primary-100"
            />
          </div>
          <Quote className="mx-auto mb-4 text-primary-300" size={32} />
          <p className="mb-6 text-lg italic text-ink-muted">&ldquo;{t.text}&rdquo;</p>
          <p className="font-semibold text-ink">{t.name}</p>
          <p className="text-sm text-ink-muted">{t.role}</p>
          <button
            onClick={next}
            className="absolute -right-12 top-1/2 -translate-y-1/2 text-ink-muted transition hover:text-ink"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
