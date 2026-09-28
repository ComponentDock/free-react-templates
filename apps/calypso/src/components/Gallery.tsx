import { Eye } from 'lucide-react'

const galleryItems = [
  { src: 'https://picsum.photos/seed/gallery-1/600/400', alt: 'Project Alpha' },
  { src: 'https://picsum.photos/seed/gallery-2/600/400', alt: 'Project Beta' },
  { src: 'https://picsum.photos/seed/gallery-3/600/400', alt: 'Project Gamma' },
  { src: 'https://picsum.photos/seed/gallery-4/600/400', alt: 'Project Delta' },
] as const

export function Gallery() {
  return (
    <section data-testid="gallery" id="work" className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-brand-500 dark:text-brand-400">
            Portfolio
          </p>
          <h2 className="font-heading text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            Selected Work
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {galleryItems.map((item) => (
            <div key={item.src} className="group relative overflow-hidden rounded-2xl">
              <img
                src={item.src}
                alt={item.alt}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-72"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-brand-500/0 transition-colors duration-300 group-hover:bg-brand-500/80">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/0 text-white opacity-0 transition-all duration-300 group-hover:bg-white group-hover:text-brand-500 group-hover:opacity-100">
                  <Eye className="h-5 w-5" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm font-semibold text-white">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
