import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { TESTIMONIALS } from '../data'

/* Testimonials recreated from the source's dark site-section: a charcoal
   band with a carousel of four distinct quote slides — Poppins blockquote
   with a white underline accent, circular avatar and name/role — advanced
   by dots and a five-second autoplay. */

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const slideCount = TESTIMONIALS.length
  const testimonial = TESTIMONIALS[index]!

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((value) => (value + 1) % slideCount)
    }, 5000)
    return () => clearInterval(id)
  }, [slideCount])

  return (
    <section className="bg-charcoal py-16">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <div key={testimonial.name} className="text-center">
          <blockquote className="text-xl font-medium leading-relaxed text-white">
            {testimonial.quote}
          </blockquote>
          <span className="mx-auto mt-10 block h-[3px] w-10 bg-white/50" aria-hidden="true" />
          <div className="mt-10 flex items-center justify-center gap-4">
            <img
              src={`https://picsum.photos/seed/meridian-client-${index + 1}/120/120`}
              alt=""
              className="h-[60px] w-[60px] rounded-full object-cover"
            />
            <div className="text-left">
              <p className="font-medium text-white">by {testimonial.name}</p>
              <p className="text-sm text-white/70">{testimonial.role}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center gap-2">
          {TESTIMONIALS.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === index}
              className={cn(
                'h-[10px] w-[10px] rounded-full transition-colors',
                i === index ? 'bg-white' : 'bg-white/30',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
