import { ArrowUpRight } from 'lucide-react'
import { galleryProjects } from '../data'

/** Three full-width tall photo tiles with a dark gradient + slide-up white
 *  caption and arrow link revealed on hover. */
export function Gallery() {
  return (
    <section id="gallery" className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {galleryProjects.map((project) => (
          <a
            key={project.title}
            href="#gallery"
            className="group relative block h-[580px] overflow-hidden bg-cover bg-center"
            style={{
              backgroundImage: `url(https://picsum.photos/seed/stalwart-gallery-${project.title.toLowerCase().replaceAll(' ', '-')}/800/580)`,
            }}
          >
            <span
              className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden="true"
            />
            <span className="absolute inset-x-0 bottom-0 flex translate-y-8 items-center justify-between px-10 pb-10 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <span>
                <span className="block font-display text-3xl font-semibold text-white">
                  {project.title}
                </span>
                <span className="mt-2 block max-w-md text-sm leading-relaxed text-white/80">
                  {project.blurb}
                </span>
              </span>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
