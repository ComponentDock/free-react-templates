import { Expand } from 'lucide-react'

const projects = [
  { title: 'Residential Rooftop', category: 'House', seed: 'shingle-proj-1' },
  { title: 'Commercial Complex', category: 'Office', seed: 'shingle-proj-2' },
  { title: 'Industrial Warehouse', category: 'Factory', seed: 'shingle-proj-3' },
  { title: 'Modern Apartment', category: 'Residential', seed: 'shingle-proj-4' },
  { title: 'Shopping Center', category: 'Commercial', seed: 'shingle-proj-5' },
  { title: 'School Building', category: 'Institution', seed: 'shingle-proj-6' },
  { title: 'Healthcare Facility', category: 'Medical', seed: 'shingle-proj-7' },
  { title: 'Sports Arena', category: 'Recreation', seed: 'shingle-proj-8' },
] as const

export function Projects() {
  return (
    <section id="projects" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-semibold text-ink sm:text-3xl">Done Projects</h2>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-0 sm:grid-cols-4">
        {projects.map((p) => (
          <div key={p.seed} className="group relative aspect-square overflow-hidden">
            <img
              src={`https://picsum.photos/seed/${p.seed}/600/600`}
              alt={p.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex h-full flex-col items-center justify-center text-white">
                <Expand className="h-6 w-6" aria-hidden="true" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
              <h3 className="text-sm font-semibold text-white">{p.title}</h3>
              <span className="text-xs text-white/70">{p.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
