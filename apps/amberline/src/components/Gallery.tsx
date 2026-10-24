import { useEffect, useState } from 'react'
import { Plus, X } from 'lucide-react'
import { projects } from '../data'
import { SectionHeading } from './SectionHeading'

export function Gallery() {
  const [active, setActive] = useState<number | null>(null)
  const current = active === null ? null : projects[active]

  useEffect(() => {
    if (active === null) {
      return
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActive(null)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [active])

  return (
    <section id="projects" className="bg-page py-24 lg:py-32">
      <div className="mx-auto mb-14 max-w-[1320px] px-4">
        <SectionHeading eyebrow="Portfolio" title="Projects" />
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-3">
        {projects.map((project, index) => (
          <li key={project.title} className="group relative overflow-hidden">
            <img
              src={`https://picsum.photos/seed/${project.seed}/960/680`}
              alt={`${project.title} — ${project.category}`}
              loading="lazy"
              className="h-[340px] w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/30 group-focus-within:bg-black/30"
            />
            <button
              type="button"
              id={`zoom-${index}`}
              aria-label={`Open ${project.title}`}
              onClick={() => setActive(index)}
              className="absolute top-4 right-4 flex size-[50px] items-center justify-center bg-brand text-ink opacity-100 transition-opacity md:opacity-0 md:group-focus-within:opacity-100 md:group-hover:opacity-100"
            >
              <Plus aria-hidden="true" className="size-6" />
            </button>
            <div className="absolute bottom-0 left-0 p-6 transition-all duration-300 md:mb-[-50px] md:opacity-0 md:group-focus-within:mb-0 md:group-focus-within:opacity-100 md:group-hover:mb-0 md:group-hover:opacity-100">
              <p className="text-[14px] font-semibold uppercase tracking-[0.08em] text-white/90">
                {project.category}
              </p>
              <h3 className="text-[24px] font-medium text-white">{project.title}</h3>
            </div>
          </li>
        ))}
      </ul>

      {current ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-label={current.title}
            className="relative w-full max-w-4xl"
          >
            <img
              src={`https://picsum.photos/seed/${current.seed}/1600/1100`}
              alt={current.title}
              className="max-h-[80vh] w-full object-cover"
            />
            <button
              type="button"
              aria-label="Close the project"
              onClick={() => {
                setActive(null)
                document.getElementById(`zoom-${active}`)!.focus()
              }}
              className="absolute top-4 right-4 flex size-11 items-center justify-center bg-brand text-ink"
            >
              <X aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>
      ) : null}
    </section>
  )
}
