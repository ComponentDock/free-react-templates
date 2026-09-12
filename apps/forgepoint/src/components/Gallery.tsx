const PROJECTS = [
  { id: '01', img: 'forgepoint-gallery-1' },
  { id: '02', img: 'forgepoint-gallery-2' },
  { id: '03', img: 'forgepoint-gallery-3' },
  { id: '04', img: 'forgepoint-gallery-4' },
]

export function Gallery() {
  return (
    <section id="works" className="bg-paper py-0 dark:bg-navy">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {PROJECTS.map((proj) => (
          <div key={proj.id} className="group relative overflow-hidden">
            <img
              src={`https://picsum.photos/seed/${proj.img}/600/600`}
              alt={`Project ${proj.id}`}
              className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Bottom caption always visible */}
            <div className="absolute bottom-0 left-0 bg-brand/90 px-4 py-3">
              <span className="mr-2 font-display text-sm font-bold text-white">{proj.id}.</span>
              <span className="font-display text-sm font-semibold text-white">
                Floride Chemicals Factory
              </span>
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 flex flex-col justify-end bg-navy/80 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="font-display text-lg font-bold text-brand">{proj.id}.</span>
              <h4 className="mt-1 font-display text-lg font-semibold text-white">
                Floride Chemicals Factory
              </h4>
              <p className="mt-2 text-sm text-white/70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="#works"
                className="mt-3 text-sm font-semibold text-brand underline-offset-4 hover:underline"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
