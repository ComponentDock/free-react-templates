import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

interface Review {
  quote: string
  name: string
  role: string
}

const reviews: Review[] = [
  {
    quote:
      'The only show I never skip. Every episode leaves me with something I can apply to my own startup the same week.',
    name: 'Priya Kapoor',
    role: 'Founder, Launchpad Labs',
  },
  {
    quote:
      'A gift for asking the right questions. These interviews go deeper than anything else in my feed.',
    name: 'Daniel Okafor',
    role: 'Product Lead, Scaleyard',
  },
  {
    quote:
      'I started listening on my commute and now plan my week around new episodes. Genuinely inspiring stuff for builders.',
    name: 'Sofia Rossi',
    role: 'CEO, Buildright',
  },
  {
    quote:
      'Consistently thought-provoking. It has become the first thing I play every single morning.',
    name: 'Chris Adler',
    role: 'Daily Listener',
  },
  {
    quote:
      'Being a guest was a fantastic experience — professional setup, sharp questions, and a wonderful audience.',
    name: 'Dr. Amara Diallo',
    role: 'Episode 118 Guest',
  },
  {
    quote:
      'Production quality is top-notch. Crystal-clear audio and a style that makes complex topics click for everyone.',
    name: 'Kim Nielsen',
    role: 'Listener since Season 1',
  },
]

export function Reviews() {
  const [index, setIndex] = useState(0)
  const count = reviews.length

  function prev() {
    setIndex((i) => (i > 0 ? i - 1 : i))
  }

  function next() {
    setIndex((i) => (i < count - 1 ? i + 1 : i))
  }

  return (
    <section className="bg-gray-900 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-primary-600/15 px-3 py-1 text-xs font-medium tracking-wide text-primary-300">
            Reviews
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What Listeners Say
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-400">
            Hear from the community that tunes in every week.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {reviews.map((review, i) => (
                <figure
                  key={review.name}
                  aria-hidden={i !== index}
                  className="w-full shrink-0 px-3"
                >
                  <div className="rounded-2xl border border-gray-800 bg-gray-950/50 p-8">
                    <div className="flex gap-1" role="img" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, star) => (
                        <Star
                          key={star}
                          className="h-4 w-4 text-yellow-400"
                          fill="currentColor"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <blockquote className="mt-5 text-lg leading-relaxed text-gray-300">
                      &ldquo;{review.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-4">
                      <span
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-purple-500 text-sm font-bold text-white"
                        aria-hidden="true"
                      >
                        {review.name
                          .split(' ')
                          .map((part) => part[0])
                          .join('')}
                      </span>
                      <span>
                        <span className="block font-semibold text-white">{review.name}</span>
                        <span className="block text-sm text-gray-400">{review.role}</span>
                      </span>
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous review"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="flex gap-2">
              {reviews.map((review, i) => (
                <button
                  key={review.name}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to review ${i + 1}`}
                  aria-current={i === index}
                  className={
                    i === index
                      ? 'h-2.5 w-2.5 rounded-full bg-primary-600'
                      : 'h-2.5 w-2.5 rounded-full bg-gray-700'
                  }
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next review"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
