import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PROJECTS } from '../data'

/* Carousel window — three of the four project cards visible at once,
   wrapping around at the ends (the source's owl-carousel showed 3 per
   view on desktop; on mobile the grid stacks). */
const WINDOW = 3

/* Projects — the dark-navy "Our Projects" section: heading + a carousel
   of photo cards (hover dark overlay + image scale) with category label
   and title, driven by prev/next arrows. */
export function Projects() {
  const [start, setStart] = useState(0)

  const visible = Array.from(
    { length: WINDOW },
    (_, offset) => PROJECTS[(start + offset) % PROJECTS.length]!,
  )

  const next = () => setStart((s) => (s + 1) % PROJECTS.length)
  const prev = () => setStart((s) => (s - 1 + PROJECTS.length) % PROJECTS.length)

  return (
    <section aria-label="Our Projects" className="bg-navy py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="font-heading text-xl font-light uppercase tracking-[0.2em] text-brand">
            Our Projects
          </p>
          <h2 className="mt-3 font-heading text-4xl font-light text-white">
            Explore Our Recent Projects
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {visible.map((project) => (
            <article key={project.title} className="group relative overflow-hidden">
              <img
                src={`https://picsum.photos/id/${project.image}/640/480`}
                alt={project.title}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/70"
                aria-hidden="true"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-heading text-sm uppercase tracking-[0.2em] text-brand">
                  {project.category}
                </p>
                <h3 className="mt-1 font-heading text-2xl font-normal text-white">
                  {project.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 flex justify-center gap-4">
          <button
            type="button"
            aria-label="Previous projects"
            onClick={prev}
            className="bg-white p-3 text-black transition-colors hover:bg-brand hover:text-white"
          >
            <ChevronLeft size={24} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next projects"
            onClick={next}
            className="bg-white p-3 text-black transition-colors hover:bg-brand hover:text-white"
          >
            <ChevronRight size={24} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
