import { useState } from 'react'

const testimonials = [
  {
    name: 'Mike Fisher',
    quote:
      'After a full day here I feel like a completely different person — light, calm and restored.',
    photo: 'halcyon-testimonial-1',
  },
  {
    name: 'Sarah Miles',
    quote: 'The hot stone massage was pure bliss. I have already booked my next visit.',
    photo: 'halcyon-testimonial-2',
  },
  {
    name: 'Amelia Clarke',
    quote: 'A serene space with therapists who truly listen. My favourite escape in the city.',
    photo: 'halcyon-testimonial-3',
  },
] as const

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const current = testimonials[index % testimonials.length]!

  return (
    <section id="testimonials" className="bg-paper py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-serif text-3xl font-bold text-ink dark:text-white sm:text-4xl">
          Testimonials
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 rounded bg-brand" />
        <div className="mt-12">
          <img
            src={`https://picsum.photos/seed/${current.photo}/200/200`}
            alt={`Portrait of ${current.name}`}
            className="mx-auto h-20 w-20 rounded-full object-cover"
          />
          <blockquote className="mt-6 text-lg italic leading-relaxed text-mist dark:text-gray-300">
            “{current.quote}”
          </blockquote>
          <h3 className="mt-4 font-serif text-xl font-bold text-ink dark:text-white">
            {current.name}
          </h3>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <button
            type="button"
            onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
            className="rounded-full border border-line bg-white px-6 py-2 text-sm font-semibold text-ink transition-colors hover:bg-brand hover:text-white dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
            className="rounded-full border border-line bg-white px-6 py-2 text-sm font-semibold text-ink transition-colors hover:bg-brand hover:text-white dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  )
}
