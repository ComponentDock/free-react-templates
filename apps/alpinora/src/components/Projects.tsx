import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PROJECTS } from '../data/content'
import { SectionHeading } from './SectionHeading'

const PER_VIEW = 3
const MAX_INDEX = PROJECTS.items.length - PER_VIEW

export function Projects() {
  const [index, setIndex] = useState(0)

  return (
    <section id="project" aria-label="Projects" className="section-gap bg-lavender">
      <SectionHeading title={PROJECTS.title} subtitle={PROJECTS.subtitle} />
      <div className="mx-auto max-w-7xl px-6">
        <div
          role="region"
          aria-label="Project carousel"
          data-index={index}
          className="overflow-hidden"
        >
          <ul
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${(index * 100) / PER_VIEW}%)` }}
          >
            {PROJECTS.items.map((item, i) => (
              <li key={item.image} className="w-full shrink-0 px-4 sm:w-1/2 lg:w-1/3">
                <img
                  src={item.image}
                  alt={`Project preview ${i + 1}`}
                  className="h-56 w-full object-cover"
                />
                <h6 className="mt-6 text-lg font-semibold">{item.title}</h6>
                <p className="mt-3 text-body">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 flex justify-center gap-4">
          <button
            type="button"
            aria-label="Previous project"
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className="flex h-11 w-11 items-center justify-center border border-white bg-white shadow-[-14px_14px_20px_0px_rgba(157,157,157,0.2)] disabled:opacity-40"
          >
            <ChevronLeft aria-hidden="true" className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next project"
            disabled={index === MAX_INDEX}
            onClick={() => setIndex((i) => Math.min(MAX_INDEX, i + 1))}
            className="flex h-11 w-11 items-center justify-center border border-white bg-white shadow-[-14px_14px_20px_0px_rgba(157,157,157,0.2)] disabled:opacity-40"
          >
            <ChevronRight aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
