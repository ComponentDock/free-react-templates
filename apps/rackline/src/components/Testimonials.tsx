import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { Reveal } from './Reveal'

interface Testimonial {
  name: string
  role: string
  quote: string
  avatar: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Priya Raghunathan',
    role: 'Head of Platform, Northwind Retail',
    quote:
      'We moved forty storefronts across in a weekend and nothing went dark. The migration desk even rebuilt our cached routes for us.',
    avatar: 'https://picsum.photos/seed/rackline-avatar-1/180/180',
  },
  {
    name: 'Tomas Neruda',
    role: 'Founder, Studio Fold',
    quote:
      'The plan page told me exactly what I would pay three years from now. No surprise renewal, no upsell call, just the invoice I expected.',
    avatar: 'https://picsum.photos/seed/rackline-avatar-2/180/180',
  },
  {
    name: 'Aisha Bello',
    role: 'CTO, Ledgerly',
    quote:
      'Their status page is the only one I trust. When a region wobbles, we hear from them before our own monitoring tells us.',
    avatar: 'https://picsum.photos/seed/rackline-avatar-3/180/180',
  },
  {
    name: 'Marcus Vandermeer',
    role: 'Lead Engineer, Houttuin Logistics',
    quote:
      'Support answered with a real diagnosis, not a template. They had our database replica rebuilt in under an hour.',
    avatar: 'https://picsum.photos/seed/rackline-avatar-4/180/180',
  },
]

/**
 * The light testimonial band: a centred title over a carousel of four slides.
 * Each slide is a centred 525px column with a 90px circular avatar, an 18px/300
 * name, an uppercase muted role and the quote at 17.6px. Below the desktop
 * breakpoint one slide fills the view. Controls are 8px dots (the active one
 * lime) plus 30px arrows that stay dim until hovered.
 */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const last = TESTIMONIALS.length - 1

  return (
    <section id="reviews" className="bg-soft py-[48px] scroll-mt-[148px] min-[768px]:py-[112px] max-[992px]:scroll-mt-[75px]">
      <div className="mx-auto w-full max-w-[1140px] px-5">
        <Reveal className="mb-12">
          <h2 className="text-center text-[32px] leading-[1.2] font-medium text-copy">
            What the racks hear back
          </h2>
        </Reveal>

        <Reveal>
          <div aria-roledescription="carousel" aria-label="Client testimonials" className="relative">
            <div className="overflow-hidden pb-[2em]">
              <ul
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {TESTIMONIALS.map((testimonial, slideIndex) => (
                  <li
                    key={testimonial.name}
                    aria-hidden={slideIndex !== index}
                    className="w-full shrink-0 px-5 text-center"
                  >
                    <div className="mx-auto max-w-[525px]">
                      <img
                        src={testimonial.avatar}
                        alt=""
                        width={90}
                        height={90}
                        className="mx-auto mb-5 h-[90px] w-[90px] rounded-full object-cover"
                      />
                      <h3 className="text-[18px] font-light text-ink">{testimonial.name}</h3>
                      <p className="mb-5 text-muted uppercase">{testimonial.role}</p>
                      <p className="text-[1.1rem] leading-[1.7]">{testimonial.quote}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => setIndex((current) => (current === 0 ? current : current - 1))}
              className={cn(
                'absolute top-1/2 left-[50px] -translate-y-1/2 text-[30px] text-copy opacity-20 transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-lime',
                index === 0 && 'hidden',
              )}
            >
              <ChevronLeft aria-hidden="true" className="h-[30px] w-[30px]" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => setIndex((current) => (current === last ? current : current + 1))}
              className={cn(
                'absolute top-1/2 right-[50px] -translate-y-1/2 text-[30px] text-copy opacity-20 transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-lime',
                index === last && 'hidden',
              )}
            >
              <ChevronRight aria-hidden="true" className="h-[30px] w-[30px]" />
            </button>
          </div>
        </Reveal>

        <ul className="mt-6 flex justify-center">
          {TESTIMONIALS.map((testimonial, dotIndex) => (
            <li key={testimonial.name} className="mr-[10px] last:mr-0">
              <button
                type="button"
                aria-label={`Show testimonial ${dotIndex + 1}`}
                aria-current={dotIndex === index}
                onClick={() => setIndex(dotIndex)}
                className={cn(
                  'block h-2 w-2 rounded-full transition-colors',
                  dotIndex === index ? 'bg-lime' : 'bg-dot',
                )}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
