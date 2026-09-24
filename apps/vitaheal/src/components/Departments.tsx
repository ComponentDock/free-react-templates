import { ChevronRight } from 'lucide-react'

const departments = [
  { title: 'Neonatology', image: 'vitaheal-dept-1' },
  { title: 'Dentistry', image: 'vitaheal-dept-2' },
  { title: 'Orthopedics', image: 'vitaheal-dept-3' },
  { title: 'Laboratory', image: 'vitaheal-dept-4' },
] as const

/** Horizontal scrollable department cards with images and Read More links. */
export function Departments() {
  return (
    <section id="departments" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-ink-900">Our Departments</h2>
          <p className="mt-2 text-sm text-mute-600">to choose from</p>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {departments.map(({ title, image }) => (
            <div
              key={title}
              className="group relative min-w-[260px] shrink-0 overflow-hidden rounded-sm"
            >
              <img
                src={`https://picsum.photos/seed/${image}/400/300`}
                alt={title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 transition-colors group-hover:bg-black/50">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <a
                  href="#services"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-white transition-colors hover:text-teal-300"
                >
                  Read More <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
