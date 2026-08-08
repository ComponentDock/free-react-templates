import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface Testimonial {
  quote: string
  name: string
  role: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'I found my dream job as a Senior Engineer at a top startup within two weeks of joining. The job alerts matched my profile perfectly and the application process took minutes.',
    name: 'Sarah Mitchell',
    role: 'Senior Engineer, TechFlow',
    avatar: 'https://picsum.photos/seed/jobfield-13/100/100',
  },
  {
    quote:
      'Jobfield has transformed our recruitment process. We posted a role on Monday and had 40 qualified applicants by Friday. The candidate matching is incredible.',
    name: 'James Chen',
    role: 'HR Director, DataVault',
    avatar: 'https://picsum.photos/seed/jobfield-14/100/100',
  },
  {
    quote:
      'The salary transparency and honest job descriptions made all the difference. I knew exactly what to expect before I even applied.',
    name: 'Amara Okafor',
    role: 'Product Designer',
    avatar: 'https://picsum.photos/seed/jobfield-15/100/100',
  },
  {
    quote:
      'As a hiring manager, I love how easy it is to review candidates. The pre-screened talent pool saved us weeks of manual filtering.',
    name: 'Elena Rodriguez',
    role: 'VP Engineering, CloudPeak',
    avatar: 'https://picsum.photos/seed/jobfield-16/100/100',
  },
] as const

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = testimonials.length
  const current = testimonials[index % count]!

  const goTo = (next: number) => {
    setIndex(((next % count) + count) % count)
  }

  return (
    <section id="testimonials" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            Success Stories
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Real people, real careers, powered by Jobfield.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <figure className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-12 dark:border-gray-800 dark:bg-gray-950">
            <div className="flex items-center justify-center gap-1" aria-label="Rated 5 out of 5">
              {Array.from({ length: 5 }, (_, starIndex) => (
                <Star
                  key={starIndex}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  aria-hidden="true"
                />
              ))}
            </div>
            <blockquote className="mt-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-8 flex items-center justify-center gap-3">
              <img
                src={current.avatar}
                alt={`${current.name} portrait`}
                loading="lazy"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-semibold text-gray-900 dark:text-white">{current.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{current.role}</p>
              </div>
            </figcaption>
          </figure>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-700 shadow-lg transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((testimonial, dotIndex) => (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => setIndex(dotIndex)}
                  aria-label={`Go to slide ${dotIndex + 1}`}
                  aria-current={dotIndex === index}
                  className={cn(
                    'h-2.5 w-2.5 rounded-full transition-colors',
                    dotIndex === index
                      ? 'bg-primary-600 dark:bg-primary-400'
                      : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600',
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-700 shadow-lg transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
