import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const testimonials = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    name: 'Carl Anderson',
    role: 'CEO, Co-Founder',
    image: 'https://picsum.photos/seed/truss-7/200/200',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    name: 'Maria Gomez',
    role: 'Design Director',
    image: 'https://picsum.photos/seed/truss-8/200/200',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    name: 'David Lee',
    role: 'Project Manager',
    image: 'https://picsum.photos/seed/truss-9/200/200',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    name: 'Emma Wilson',
    role: 'Lead Architect',
    image: 'https://picsum.photos/seed/truss-10/200/200',
  },
] as const

export function Testimonials() {
  const [active, setActive] = useState(0)
  const current = testimonials[active]!

  const goTo = (index: number) => {
    setActive((index + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-[#fff9f6] py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <div className="text-center">
          <img
            src={current.image}
            alt=""
            loading="lazy"
            className="mx-auto mb-6 h-16 w-16 rounded-full object-cover"
          />
          <blockquote className="text-lg leading-relaxed text-mist dark:text-white/70">
            &ldquo;{current.quote}&rdquo;
          </blockquote>
          <div className="mt-6">
            <p className="font-display text-base font-bold text-ink dark:text-white">
              {current.name}
            </p>
            <p className="mt-1 text-sm text-mist dark:text-white/60">{current.role}</p>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => goTo(active - 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-ink transition-colors hover:border-brand hover:text-brand dark:border-white/20 dark:text-white"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial slides">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                role="tab"
                aria-selected={index === active}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => goTo(index)}
                className={cn(
                  'h-2.5 w-2.5 rounded-full transition-colors',
                  index === active ? 'bg-brand' : 'bg-black/20 hover:bg-brand/50 dark:bg-white/25',
                )}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => goTo(active + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-ink transition-colors hover:border-brand hover:text-brand dark:border-white/20 dark:text-white"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
