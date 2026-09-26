import { Plus } from 'lucide-react'

const images = [
  'https://picsum.photos/seed/joplin-port1/600/400',
  'https://picsum.photos/seed/joplin-port2/600/400',
  'https://picsum.photos/seed/joplin-port3/600/400',
  'https://picsum.photos/seed/joplin-port4/600/400',
  'https://picsum.photos/seed/joplin-port5/600/400',
  'https://picsum.photos/seed/joplin-port6/600/400',
]

export function Gallery() {
  return (
    <section id="portfolio" data-testid="gallery" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-10 text-3xl font-bold text-maroon">Selected Portfolios</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {images.map((src, i) => (
            <div key={i} className="group relative overflow-hidden">
              <img
                src={src}
                alt={`Portfolio ${i + 1}`}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-56"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Plus className="text-white" size={32} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
