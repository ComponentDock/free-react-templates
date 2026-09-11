import { Search } from 'lucide-react'

const projects = [
  {
    title: 'Apartment Interior Design',
    image: 'https://picsum.photos/seed/sitecraft-proj1/600/400',
    colSpan: 'col-span-1',
  },
  {
    title: 'Office Space',
    image: 'https://picsum.photos/seed/sitecraft-proj2/800/400',
    colSpan: 'col-span-1 md:col-span-2',
  },
  {
    title: 'Condo Building',
    image: 'https://picsum.photos/seed/sitecraft-proj3/600/400',
    colSpan: 'col-span-1 md:col-span-1',
  },
  {
    title: 'Kitchen Interior',
    image: 'https://picsum.photos/seed/sitecraft-proj4/600/400',
    colSpan: 'col-span-1 md:col-span-1',
  },
  {
    title: 'Commercial Building',
    image: 'https://picsum.photos/seed/sitecraft-proj5/800/400',
    colSpan: 'col-span-1 md:col-span-2',
  },
  {
    title: 'Hotel Building',
    image: 'https://picsum.photos/seed/sitecraft-proj6/600/400',
    colSpan: 'col-span-1',
  },
] as const

export function ProjectGallery() {
  return (
    <section id="projects" aria-label="Our Projects" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-ink">Our Projects</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Even the all-powerful Pointing has no control about the blind texts it is an almost
            unorthographic life One day however a small line of blind text by the name.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded ${project.colSpan}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/40">
                <Search
                  className="h-8 w-8 text-white opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-ink">{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
