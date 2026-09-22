import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const projects: Array<{ title: string; category: string; img: string }> = [
  {
    title: 'Research and Development Center',
    category: 'Construction',
    img: 'https://picsum.photos/seed/industrix-proj1/800/500',
  },
  {
    title: 'Project of Technological Park',
    category: 'Engineering',
    img: 'https://picsum.photos/seed/industrix-proj2/800/500',
  },
  {
    title: 'Industrial Complex Build',
    category: 'Construction',
    img: 'https://picsum.photos/seed/industrix-proj3/800/500',
  },
]

export function Projects() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent((c) => (c + 1) % projects.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + projects.length) % projects.length), [])

  useEffect(() => {
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [next])

  const project = projects[current]!

  return (
    <section id="projects" className="relative py-24" aria-labelledby="projects-heading">
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/industrix-parallax/1920/800)' }}
      />
      <div className="absolute inset-0 bg-ink/85" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            Our Portfolio
          </span>
          <h2
            id="projects-heading"
            className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl"
          >
            Take a look around
          </h2>
        </div>

        <div className="relative mt-12 mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-lg">
            <img
              src={project.img}
              alt={project.title}
              className="h-[400px] w-full object-cover transition-opacity duration-500"
            />
          </div>
          <div className="mt-4 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand">
              {project.category}
            </span>
            <h3 className="mt-1 font-display text-xl font-bold text-white">{project.title}</h3>
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous project"
            className="absolute left-0 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-dark"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next project"
            className="absolute right-0 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-dark"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Go to project ${i + 1}`}
              className={`h-3 w-3 rounded-full transition-colors ${
                i === current ? 'bg-brand' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
