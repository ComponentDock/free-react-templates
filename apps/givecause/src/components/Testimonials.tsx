import { useState } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface TestimonialsProps {
  className?: string
}

const testimonials = [
  {
    text: 'GiveCause has been instrumental in helping our community. Their dedication and support have changed countless lives for the better.',
    author: 'Rebecca Adams',
    role: 'Community Leader',
  },
  {
    text: 'Working with this organization has been a truly rewarding experience. Their transparent approach ensures every donation makes an impact.',
    author: 'James Mitchell',
    role: 'Monthly Donor',
  },
  {
    text: 'The volunteer programs are incredibly well-organized. I feel like I am truly making a difference every time I participate.',
    author: 'Lisa Thompson',
    role: 'Volunteer',
  },
]

export function Testimonials({ className }: TestimonialsProps) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]!

  return (
    <section className={cn('py-20 md:py-28 bg-heading text-white', className)}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Quote className="w-12 h-12 text-brand mx-auto mb-6" />
        <p className="font-body text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
          &ldquo;{t.text}&rdquo;
        </p>
        <div className="mb-6">
          <p className="font-heading text-lg font-medium">{t.author}</p>
          <p className="font-utility text-sm text-muted-light">{t.role}</p>
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-brand text-brand hover:bg-brand hover:text-white transition-colors flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-brand text-brand hover:bg-brand hover:text-white transition-colors flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
