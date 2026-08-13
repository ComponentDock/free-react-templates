import { useState } from 'react'
import { Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { testimonials, testimonialBackground } from '../data'

export function Testimonials() {
  const [index, setIndex] = useState(0)

  return (
    <section data-section="testimonials" className="flex flex-col lg:flex-row">
      <div
        data-testimonial-bg
        className="min-h-[320px] lg:w-1/2"
        style={{
          backgroundImage: `url(${testimonialBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />

      <div className="bg-ink-800 px-4 py-[100px] lg:w-1/2 lg:px-15">
        <div className="mx-auto max-w-[740px]">
          <h2 className="text-3xl font-light text-white">Client&apos;s Testimonials</h2>

          <div className="mt-10">
            {testimonials.map((testimonial, testimonialIndex) => (
              <div
                key={testimonialIndex}
                aria-hidden={testimonialIndex !== index ? 'true' : undefined}
                className={cn(testimonialIndex === index ? 'block' : 'hidden')}
              >
                <Quote className="h-10 w-10 text-primary-600" aria-hidden="true" />
                <p className="mt-4 text-base leading-relaxed text-white/80">{testimonial.quote}</p>
                <div className="mt-8 flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={`Portrait of ${testimonial.name}`}
                    className="h-[60px] w-[60px] rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h5 className="text-lg text-white">{testimonial.name}</h5>
                    <span className="text-sm text-primary-600">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex gap-2">
            {testimonials.map((_, dotIndex) => (
              <button
                key={dotIndex}
                type="button"
                aria-label={`Go to testimonial ${dotIndex + 1}`}
                aria-current={dotIndex === index ? 'true' : undefined}
                onClick={() => setIndex(dotIndex)}
                className={cn(
                  'h-2.5 rounded-full transition-all',
                  dotIndex === index ? 'w-8 bg-primary-600' : 'w-2.5 bg-white/30 hover:bg-white/60',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
