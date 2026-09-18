import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const missionItems = [
  {
    title: 'Road to Success',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt labore dolore magna aliqua enim minim veniam quis nostrud.',
  },
  {
    title: 'About Our Mission',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    title: 'Our Vision',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
  },
] as const

export function Mission() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((current - 1 + missionItems.length) % missionItems.length)
  const next = () => setCurrent((current + 1) % missionItems.length)

  const item = missionItems[current]!

  return (
    <section id="about" className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2">
        <img
          src="https://picsum.photos/seed/domicile-mission/800/600"
          alt="Our mission"
          className="h-80 w-full object-cover lg:h-full"
        />
      </div>

      <div className="flex w-full items-center bg-white px-8 py-12 lg:w-1/2 lg:px-16">
        <div className="w-full max-w-lg">
          <h2 className="font-display text-3xl font-bold uppercase text-ink">{item.title}</h2>
          <p className="mt-4 leading-relaxed text-body">{item.text}</p>

          <div className="mt-8 flex items-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous mission item"
              className="flex h-10 w-10 items-center justify-center border border-border text-body transition-colors hover:border-primary-400 hover:text-primary-400"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {missionItems.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to mission item ${i + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    i === current ? 'bg-primary-400' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next mission item"
              className="flex h-10 w-10 items-center justify-center border border-border text-body transition-colors hover:border-primary-400 hover:text-primary-400"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
