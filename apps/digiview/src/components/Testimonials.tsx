import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    text: 'DigiView transformed our online presence completely. Their team delivered a stunning website that exceeded our expectations.',
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director, GrowthCo',
    text: 'The results speak for themselves — our traffic increased by 300% within three months of launching the new site.',
  },
  {
    name: 'Emma Williams',
    role: 'Founder, CreativeHub',
    text: 'Professional, creative, and always on time. DigiView is the partner every growing business needs.',
  },
]

interface TestimonialsProps {
  className?: string
}

export function Testimonials({ className }: TestimonialsProps) {
  const [index, setIndex] = useState(0)
  const current = testimonials[index]!

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))

  return (
    <section id="testimony" className={cn('bg-dark py-20 text-white', className)}>
      <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
        <Quote className="mx-auto mb-6 h-10 w-10 text-brand opacity-60" />
        <p className="mb-8 text-lg leading-relaxed text-gray-300">&ldquo;{current.text}&rdquo;</p>
        <div className="mb-1 text-lg font-semibold">{current.name}</div>
        <div className="mb-6 text-sm text-gray-400">{current.role}</div>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
