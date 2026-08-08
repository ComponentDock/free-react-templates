import { useState } from 'react'
import { Reveal } from './Reveal'

const results = [
  {
    title: 'Facial Treatment',
    before: 'https://picsum.photos/seed/sooth-before-1/800/600',
    after: 'https://picsum.photos/seed/sooth-after-1/800/600',
  },
  {
    title: 'Skin Rejuvenation',
    before: 'https://picsum.photos/seed/sooth-before-2/800/600',
    after: 'https://picsum.photos/seed/sooth-after-2/800/600',
  },
] as const

/* Before/after comparison slider: a range input drives the split position
   (clip-path inset), matching the demo's drag-handle comparison widget —
   dependency-free and keyboard accessible. */
function Comparison({ item }: { item: (typeof results)[number] }) {
  const [position, setPosition] = useState(50)

  return (
    <div className="overflow-hidden rounded-2xl shadow-soft">
      <div className="relative aspect-[4/3] select-none">
        <img
          src={item.after}
          alt={`${item.title} after`}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <img
            src={item.before}
            alt={`${item.title} before`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <span className="absolute top-3 left-3 rounded-full bg-gray-950/60 px-3 py-1 text-xs font-medium text-white">
          Before
        </span>
        <span className="absolute top-3 right-3 rounded-full bg-primary-600/80 px-3 py-1 text-xs font-medium text-white">
          After
        </span>
        <label
          className="absolute inset-0 cursor-ew-resize"
          aria-label={`${item.title} comparison slider`}
        >
          <input
            type="range"
            min={0}
            max={100}
            value={position}
            onChange={(event) => setPosition(Number(event.target.value))}
            aria-label={`${item.title} comparison position`}
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.4)]"
            style={{ left: `${position}%` }}
          >
            <span className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xs font-bold text-gray-700 shadow-lg">
              ⇄
            </span>
          </span>
        </label>
      </div>
      <div className="border-t border-gray-200 bg-white px-6 py-4 dark:border-gray-800 dark:bg-gray-950">
        <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-white">
          {item.title}
        </h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Drag the handle to compare before and after.
        </p>
      </div>
    </div>
  )
}

export function Results() {
  return (
    <section id="results" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-wider text-primary-600 uppercase dark:text-primary-400">
            Transformations
          </p>
          <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Visible Results
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            See the difference our treatments make — real before-and-after moments from our guests.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {results.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <Comparison item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
