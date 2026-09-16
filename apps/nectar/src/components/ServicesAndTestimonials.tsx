import { useState, useCallback } from 'react'
import { HardHat, Ruler, Headphones, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const serviceItems = [
  {
    icon: HardHat,
    title: 'Building Construction',
    description: 'Complete building construction services from foundation to final finishing.',
  },
  {
    icon: Ruler,
    title: 'Interior Design',
    description:
      'Creative and functional interior design tailored to your lifestyle and preferences.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock customer support to assist you at every stage of your project.',
  },
]

const testimonials = [
  {
    text: 'Absolutely outstanding work! The team delivered our project on time and exceeded all expectations. Highly recommend their services.',
    name: 'John Anderson',
    role: 'CEO, TechCorp',
    seed: 'nectar-testimonial-1',
  },
  {
    text: 'Professional, reliable, and incredibly skilled. They transformed our office space into something truly remarkable.',
    name: 'Maria Garcia',
    role: 'Director, Innovate LLC',
    seed: 'nectar-testimonial-2',
  },
  {
    text: 'From start to finish, the experience was seamless. Their attention to detail and commitment to quality is unmatched.',
    name: 'Robert Chen',
    role: 'Homeowner',
    seed: 'nectar-testimonial-3',
  },
]

export function ServicesAndTestimonials() {
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  const goTo = useCallback((index: number) => setTestimonialIndex(index), [])

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- index is always in bounds
  const testimonial = testimonials[testimonialIndex]!

  return (
    <section className="bg-paper py-16">
      <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2">
        {/* Services List */}
        <div>
          <h2 className="font-heading text-2xl font-bold text-heading md:text-3xl">
            Experience Great Services
          </h2>
          <div className="mt-2 h-1 w-16 bg-brand" aria-hidden="true" />
          <div className="mt-8 space-y-6">
            {serviceItems.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10">
                    <Icon className="h-6 w-6 text-brand" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-heading">{item.title}</h3>
                    <p className="mt-1 text-sm text-body">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="font-heading text-2xl font-bold text-heading md:text-3xl">
            Satisfied Customer
          </h2>
          <div className="mt-2 h-1 w-16 bg-brand" aria-hidden="true" />
          <div className="mt-8 rounded-sm border border-muted p-6">
            <Quote className="mb-4 h-8 w-8 text-brand/40" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-body italic">
              &ldquo;{testimonial.text}&rdquo;
            </p>
            <div className="mt-4 flex items-center gap-3">
              <img
                src={`https://picsum.photos/seed/${testimonial.seed}/60/60`}
                alt={testimonial.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="font-heading text-sm font-bold text-heading">{testimonial.name}</p>
                <p className="text-xs text-body">{testimonial.role}</p>
              </div>
            </div>
          </div>
          {/* Dots */}
          <div className="mt-4 flex gap-2" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={testimonialIndex === index}
                aria-label={`View testimonial ${index + 1}`}
                className={cn(
                  'h-2.5 w-2.5 rounded-full transition-colors',
                  testimonialIndex === index ? 'bg-brand' : 'bg-muted',
                )}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
