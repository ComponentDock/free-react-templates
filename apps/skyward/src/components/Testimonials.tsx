import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Mark Web',
    role: 'Marketing Manager',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    name: 'Mark Web',
    role: 'Interface Designer',
    quote:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    name: 'Mark Web',
    role: 'UI Designer',
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    name: 'Mark Web',
    role: 'Web Developer',
    quote:
      'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  },
  {
    name: 'Mark Web',
    role: 'System Analyst',
    quote: 'The Big Oxmox advised her not to do so, because there were thousands of bad Commas.',
  },
]

const AUTO_ADVANCE_MS = 5000

function Stars() {
  return (
    <div role="img" aria-label="5 out of 5 stars" className="flex justify-center gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className="h-4 w-4 fill-star-400 text-star-400" aria-hidden="true" />
      ))}
    </div>
  )
}

/** Testimonial carousel: one quote at a time with prev/next controls and
 *  auto-advance. */
export function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length)
    }, AUTO_ADVANCE_MS)
    return () => window.clearInterval(timer)
  }, [])

  const next = () => setIndex((current) => (current + 1) % testimonials.length)
  const prev = () =>
    setIndex((current) => (current - 1 + testimonials.length) % testimonials.length)

  const active = testimonials[index]!

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium text-gray-900">Our satisfied customer says</h2>
          <p className="mt-4 text-gray-500">
            Even the all-powerful Pointing has no control about the blind texts it is an almost
            unorthographic.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <figure className="rounded-lg bg-mist-50 p-10 text-center">
            <blockquote className="text-lg leading-8 text-gray-600">“{active.quote}”</blockquote>
            <figcaption className="mt-6">
              <Stars />
              <img
                src="https://picsum.photos/seed/skyward-avatar/80/80"
                alt={`${active.name} avatar`}
                className="mx-auto mt-4 h-16 w-16 rounded-full"
              />
              <p className="mt-4 font-medium text-gray-900">{active.name}</p>
              <p className="mt-1 text-sm text-gray-500">{active.role}</p>
            </figcaption>
          </figure>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:bg-primary-600 hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:bg-primary-600 hover:text-white"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
