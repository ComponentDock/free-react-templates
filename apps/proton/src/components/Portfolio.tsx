const projects = [
  { seed: 'proton-port-1', title: 'Brand Identity', className: 'sm:col-span-1' },
  { seed: 'proton-port-2', title: 'Web Platform', className: 'sm:col-span-2' },
  { seed: 'proton-port-3', title: 'Mobile App', className: 'sm:col-span-2' },
  { seed: 'proton-port-4', title: 'E-Commerce', className: 'sm:col-span-1' },
]

export function Portfolio() {
  return (
    <section id="gallery" className="py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {projects.map(({ seed, title, className }) => (
            <div
              key={seed}
              className={`group relative h-[300px] overflow-hidden sm:h-[400px] ${className}`}
            >
              <img
                src={`https://picsum.photos/seed/${seed}/800/500`}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-opacity duration-300 group-hover:bg-black/50">
                <span className="translate-y-4 text-lg font-bold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
