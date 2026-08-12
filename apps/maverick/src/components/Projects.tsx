import { PROJECTS, SERVICES_BLURB } from '../data'

/* Projects section recreated from the ColorLib "Clark" masonry grid: six
   photo tiles (one 4-col, one 8-col, then two stacked in an 8-col slot and
   two stacked in a 4-col slot) that reveal a black overlay (opacity 0.9)
   with a centered title + category on hover. */

const [tileA, tileB, tileC, tileD, tileE, tileF] = PROJECTS

export function Projects() {
  return (
    <section id="projects-section" className="bg-black py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-[13px] font-medium uppercase tracking-[3px] text-brand">
            Our Projects
          </p>
          <h2 className="text-[50px] font-bold text-white">Our Projects</h2>
          <p className="mx-auto mt-4 max-w-lg text-[16px] text-muted">{SERVICES_BLURB}</p>
        </div>

        <div className="grid gap-[30px] md:grid-cols-12">
          {/* Row 1: 4-col + 8-col */}
          <div className="md:col-span-4">
            <ProjectTile project={tileA} />
          </div>
          <div className="md:col-span-8">
            <ProjectTile project={tileB} />
          </div>
          {/* Row 2: 8-col with two stacked + 4-col with two stacked */}
          <div className="grid gap-[30px] md:col-span-8 md:grid-cols-2">
            <ProjectTile project={tileC} />
            <ProjectTile project={tileD} />
          </div>
          <div className="grid gap-[30px] md:col-span-4 md:grid-cols-1">
            <ProjectTile project={tileE} />
            <ProjectTile project={tileF} />
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectTile({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <a
      href="#projects-section"
      className="group relative block h-[285px] overflow-hidden"
      aria-label={`${project.title} — ${project.category}`}
    >
      <img
        src={project.image}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-90"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="px-6 text-center text-[20px] font-semibold text-white">{project.title}</h3>
        <span className="mt-2 text-[13px] text-brand">{project.category}</span>
      </div>
    </a>
  )
}
