import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const testimonials = [
  {
    name: 'Carl Smith',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quaerat qui, ipsum debitis id reprehenderit ut soluta possimus consectetur asperiores totam veniam quasi molestiae.',
    seed: 'kraft-t1',
  },
  {
    name: 'Craig Darren',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At, ut enim error molestias maxime deserunt voluptate doloribus nihil nesciunt id perferendis, doloremque earum architecto.',
    seed: 'kraft-t2',
  },
  {
    name: 'John Smith',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi itaque tempore, harum aliquid aut, sapiente dolor tenetur. Tempora corrupti suscipit delectus perspiciatis.',
    seed: 'kraft-t3',
  },
  {
    name: 'John Smith',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Animi doloribus accusamus eius ex laudantium vitae. Quaerat qui, ipsum debitis id reprehenderit ut soluta possimus.',
    seed: 'kraft-t4',
  },
] as const

const AUTOPLAY_MS = 5000

export function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length)
    }, AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [])

  const goTo = (next: number) => {
    setIndex((next + testimonials.length) % testimonials.length)
  }

  const active = testimonials[index]!

  return (
    <section id="testimonials" className="bg-fog py-24 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center font-display text-4xl font-light text-black lg:text-5xl">
          Testimonial
        </h2>

        <div
          className="relative mt-14"
          role="region"
          aria-roledescription="carousel"
          aria-label="Testimonials"
        >
          <div aria-live="polite">
            <figure className="mx-auto max-w-[700px] text-center">
              <div className="flex items-center justify-center gap-5">
                <img
                  src={`https://picsum.photos/seed/${active.seed}/120/120`}
                  alt={`Portrait of ${active.name}`}
                  className="h-[60px] w-[60px] rounded-full border-4 border-white object-cover"
                  loading="lazy"
                />
                <figcaption className="text-left">
                  <h3 className="font-display text-lg font-light text-black">{active.name}</h3>
                  <span className="block text-sm text-[#a6a6a6]">Customer Corp.</span>
                </figcaption>
              </div>
              <blockquote className="mt-6 text-base leading-relaxed text-mist">
                &ldquo;{active.quote}&rdquo;
              </blockquote>
            </figure>
          </div>

          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous testimonial"
            className="absolute -left-2 top-1/2 -translate-y-1/2 p-2 text-black/40 transition-colors hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:left-0"
          >
            <ChevronLeft className="h-8 w-8" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next testimonial"
            className="absolute -right-2 top-1/2 -translate-y-1/2 p-2 text-black/40 transition-colors hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:right-0"
          >
            <ChevronRight className="h-8 w-8" aria-hidden="true" />
          </button>

          <div className="mt-10 flex justify-center gap-2">
            {testimonials.map((item, dotIndex) => (
              <button
                key={`${item.name}-${dotIndex}`}
                type="button"
                onClick={() => goTo(dotIndex)}
                aria-label={`Go to testimonial ${dotIndex + 1}`}
                aria-current={dotIndex === index ? 'true' : undefined}
                className={cn(
                  'h-2 w-2 rounded-full bg-[#ccc] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand',
                  dotIndex === index && 'bg-brand',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
