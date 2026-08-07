import { useState } from 'react'

const testimonials = [
  {
    name: 'Adam Aderson',
    quote:
      'They took a difficult site and a big idea and delivered a building that feels effortless.',
    photo: 'archon-testimonial-1',
  },
  {
    name: 'Lukas Devlin',
    quote:
      "The team's attention to light and proportion transformed our studio beyond expectations.",
    photo: 'archon-testimonial-2',
  },
  {
    name: 'Kayla Bryant',
    quote:
      'Clear communication, beautiful drawings, and a finished space we are proud of every day.',
    photo: 'archon-testimonial-3',
  },
] as const

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const current = testimonials[index % testimonials.length]!

  return (
    <section id="testimonials" className="bg-paper py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <span className="text-sm font-semibold uppercase tracking-wider text-mist dark:text-gray-400">
          What They Say
        </span>
        <h2 className="mt-2 text-2xl font-bold text-ink dark:text-white">Testimonials</h2>

        <div className="mt-10">
          <img
            src={`https://picsum.photos/seed/${current.photo}/140/140`}
            alt={`Portrait of ${current.name}`}
            className="mx-auto h-[70px] w-[70px] rounded-full object-cover"
          />
          <blockquote className="mt-5 text-lg leading-relaxed text-mist dark:text-gray-300">
            “{current.quote}”
          </blockquote>
          <h3 className="mt-4 text-lg font-bold text-ink dark:text-white">{current.name}</h3>
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
