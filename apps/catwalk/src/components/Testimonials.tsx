import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  quote: string
  author: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    author: 'Garreth Smith',
    role: 'Agent',
  },
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    author: 'Garreth Smith',
    role: 'Model',
  },
  {
    quote:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life one day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
    author: 'Victoria Adams',
    role: 'Creative Director',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const current = testimonials[index]!

  const showPrevious = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const showNext = () => setIndex((i) => (i + 1) % testimonials.length)

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-semibold text-ink dark:text-white lg:text-4xl">
          My satisfied customer says
        </h2>
        <figure className="mt-12 bg-paper p-10 dark:bg-gray-800">
          <p className="text-6xl leading-none text-brand" aria-hidden="true">
            “
          </p>
          <blockquote className="mt-4 text-sm font-light leading-relaxed text-mist dark:text-gray-300">
            {current.quote}
          </blockquote>
          <figcaption className="mt-6">
            <p className="font-semibold text-ink dark:text-white">{current.author}</p>
            <p className="text-sm text-brand">{current.role}</p>
          </figcaption>
        </figure>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:border-brand hover:text-brand dark:border-gray-700 dark:text-gray-300"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:border-brand hover:text-brand dark:border-gray-700 dark:text-gray-300"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
