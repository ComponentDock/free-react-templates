import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonies = [
  {
    name: 'Jeremy Watson',
    quote:
      'Compassion Church has been a blessing to my family. The community here truly cares for one another, and I have found strength and hope through our shared faith.',
    image: 'https://picsum.photos/seed/compassion-pastor1/200/200',
  },
  {
    name: 'Martha Jenkins',
    quote:
      "Through the sermons and fellowship at Compassion, I have grown closer to God and found a second family that supports me through all of life's challenges.",
    image: 'https://picsum.photos/seed/compassion-pastor2/200/200',
  },
  {
    name: 'Robert Williams',
    quote:
      'The pastoral team at Compassion has guided me through some of the darkest times in my life. I am forever grateful for their compassion and dedication.',
    image: 'https://picsum.photos/seed/compassion-pastor3/200/200',
  },
] as const

export function PersonalTestimony() {
  const [current, setCurrent] = useState(0)

  function prev() {
    setCurrent((c) => (c === 0 ? testimonies.length - 1 : c - 1))
  }

  function next() {
    setCurrent((c) => (c === testimonies.length - 1 ? 0 : c + 1))
  }

  const t = testimonies[current] as (typeof testimonies)[number]

  return (
    <section className="bg-surface px-4 py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-8 text-3xl font-bold text-black">Personal Testimony</h2>

        <div className="relative">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
            aria-label="Previous testimony"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="mx-8">
            <img
              src={t.image}
              alt={t.name}
              className="mx-auto mb-4 h-20 w-20 rounded-full object-cover"
            />
            <blockquote className="mb-4 text-sm leading-relaxed italic text-gray-600">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <p className="text-sm font-semibold text-black">&mdash; {t.name}</p>
          </div>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
            aria-label="Next testimony"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonies.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === current ? 'bg-black' : 'bg-dot-inactive'
              }`}
              aria-label={`Go to testimony ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
