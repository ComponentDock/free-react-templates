import { Plus } from 'lucide-react'
import { projects } from '../data'

/** Full-bleed projects grid (reference `.section.border-t.pb-0`): six tiles
 *  with an image, title, and plus icon; hover reveals a dark overlay, a
 *  zoomed image, and a sliding title. */
export function Projects() {
  return (
    <section className="border-t-2 border-[#dee2e6] bg-white pt-[7rem]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-black text-black md:text-4xl">Projects</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Even the all-powerful Pointing has no control about the blind texts it is an almost
            unorthographic life.
          </p>
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-3">
        {projects.map((project) => (
          <a key={project.title} href="#projects" className="group relative block overflow-hidden">
            <img
              src={project.image}
              alt=""
              aria-hidden="true"
              className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/60"
              aria-hidden="true"
            />
            <Plus
              className="absolute top-6 right-6 h-[30px] w-[30px] text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden="true"
            />
            <h3 className="absolute bottom-7 left-6 translate-y-6 text-lg font-normal text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              {project.title}
            </h3>
          </a>
        ))}
      </div>
    </section>
  )
}
