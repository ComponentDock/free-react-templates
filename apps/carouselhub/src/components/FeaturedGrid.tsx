import { gridItems } from '../data'

export function FeaturedGrid() {
  return (
    <section id="gallery" className="bg-slate-light py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-[28px] font-semibold text-slate-dark">Featured Collections</h2>
          <p className="text-sm text-gray-500">Explore our curated portfolio of creative works</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {gridItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-slate-dark">{item.title}</h3>
                <span className="mt-1 inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
