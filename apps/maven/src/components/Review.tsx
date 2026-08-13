import { useState } from 'react'
import { ArrowLeft, ArrowRight, Play } from 'lucide-react'
import { review } from '../data'

/** Split review section (reference `.review_part`): video poster with a
 *  pulsing play button on the left, testimonial slider on the right. */
export function Review() {
  const [index, setIndex] = useState(0)
  const count = review.testimonials.length
  const current = review.testimonials[index]!

  return (
    <section aria-label="Review" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <img
            src={review.video.poster}
            alt=""
            width={640}
            height={550}
            className="h-[550px] w-full bg-black/70 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
            <button
              type="button"
              aria-label="Play intro video"
              className="flex h-20 w-20 animate-pulse items-center justify-center rounded-full bg-primary-600 text-white transition-colors hover:bg-primary-700"
            >
              <Play className="ml-1 h-8 w-8" aria-hidden="true" />
            </button>
            <p className="text-[15px] text-white">{review.video.caption}</p>
          </div>
        </div>

        <div>
          <blockquote className="text-[16px] italic leading-relaxed text-gray-600">
            “{current.quote}”
          </blockquote>
          <h3 className="mt-8 font-heading text-[20px] font-medium text-navy-deep">
            {current.name}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{current.role}</p>

          <div className="mt-8 flex items-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => setIndex((value) => (value - 1 + count) % count)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-primary-600 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => setIndex((value) => (value + 1) % count)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-primary-600 hover:text-white"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
