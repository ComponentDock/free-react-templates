import { galleryItems } from '../data'

export function Gallery() {
  return (
    <section id="portfolios" aria-label="Portfolio gallery" className="bg-white pb-24">
      <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item) => (
          <figure key={item.id} className="group relative overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[440px] lg:h-[565px]"
            />
            <figcaption className="absolute inset-0 flex items-end bg-ink/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="w-full p-6 text-center text-white">
                <span className="mb-1 block text-lg font-light opacity-90">{item.span}</span>
                <h3 className="block font-display text-2xl text-white">{item.title}</h3>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
