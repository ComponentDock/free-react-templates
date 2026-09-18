import { Plus } from 'lucide-react'

const projects = [
  {
    title: 'Ducting Design in Colorado',
    image: 'https://picsum.photos/seed/cogwork-proj1/600/400',
  },
  {
    title: 'Tanks Project In California',
    image: 'https://picsum.photos/seed/cogwork-proj2/600/400',
  },
  {
    title: 'Structural Design in New York',
    image: 'https://picsum.photos/seed/cogwork-proj3/600/400',
  },
  { title: 'Stacks Design', image: 'https://picsum.photos/seed/cogwork-proj4/600/400' },
  { title: 'Intercate Custom', image: 'https://picsum.photos/seed/cogwork-proj5/600/400' },
  { title: 'Banker Design', image: 'https://picsum.photos/seed/cogwork-proj6/600/400' },
]

export function Projects() {
  return (
    <section id="projects" className="border-t py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Our Latest Projects</h2>
          <p className="mx-auto max-w-2xl text-[#6c757d]">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {projects.map((p) => (
          <a key={p.title} href="#" className="group relative block h-64 overflow-hidden">
            <img
              src={p.image}
              alt={p.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h3 className="mb-2 text-center text-lg font-bold text-white">{p.title}</h3>
              <Plus className="text-white" size={24} />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
