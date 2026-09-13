import { ArrowUpRight } from 'lucide-react'

const projects = [
  { image: 'https://picsum.photos/seed/tint-port1/600/400', title: 'Interior Structure' },
  { image: 'https://picsum.photos/seed/tint-port2/600/400', title: 'Interior Structure' },
  { image: 'https://picsum.photos/seed/tint-port3/600/400', title: 'Interior Structure' },
  { image: 'https://picsum.photos/seed/tint-port4/600/400', title: 'Interior Structure' },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-widest text-gold-500">
            About Our Company
          </span>
          <h2 className="text-3xl font-bold text-navy-800 font-[family-name:var(--font-condensed)] md:text-4xl">
            Some statistics that we want
            <br />
            to show our viewers
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => (
            <div key={i} className="group relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-navy-800/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="mb-2 text-lg font-bold text-white font-[family-name:var(--font-condensed)]">
                  {project.title}
                </h3>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-white transition-colors hover:bg-gold-400 hover:border-gold-400 hover:text-navy-800"
                  aria-label={`View ${project.title}`}
                >
                  <ArrowUpRight size={18} />
                </a>
                <p className="mt-3 max-w-[200px] text-center text-xs text-white/70">
                  Some statistics that we want to show our viewers
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
