import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    avatar: 'https://picsum.photos/seed/embankment-te1/200/200',
    quote:
      'Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware.',
    name: 'Mark Alviro Wiens',
    role: 'CEO at Google',
  },
  {
    avatar: 'https://picsum.photos/seed/embankment-te2/200/200',
    quote:
      'Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware.',
    name: 'Sarah Johnson',
    role: 'CTO at Microsoft',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const testimonial = testimonials[current]!

  return (
    <section className="bg-testimonial-bg py-[120px]">
      <div className="mx-auto max-w-[1170px] px-4">
        <div className="flex items-center gap-8">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-dark shadow transition-colors hover:bg-accent hover:text-white"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex flex-1 items-center gap-8">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="h-[100px] w-[100px] shrink-0 rounded-full object-cover"
            />
            <div>
              <p className="text-[15px] leading-relaxed text-muted">{testimonial.quote}</p>
              <h4 className="mt-4 font-oswald text-lg font-medium text-dark">{testimonial.name}</h4>
              <h5 className="font-poppins text-sm text-accent">{testimonial.role}</h5>
            </div>
          </div>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-dark shadow transition-colors hover:bg-accent hover:text-white"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
