import { Plus } from 'lucide-react'

const images = [
  'https://picsum.photos/seed/wavecrest-g1/400/300',
  'https://picsum.photos/seed/wavecrest-g2/400/300',
  'https://picsum.photos/seed/wavecrest-g3/400/300',
  'https://picsum.photos/seed/wavecrest-g4/400/300',
  'https://picsum.photos/seed/wavecrest-g5/400/300',
] as const

export function Gallery() {
  return (
    <section id="news" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-10 text-center font-heading text-3xl font-bold text-navy sm:text-4xl">
          Our Gallery
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {images.map((src, i) => (
            <div key={src} className="group relative overflow-hidden rounded-lg">
              <img
                src={src}
                alt={`Gallery image ${i + 1}`}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-navy/0 transition-colors group-hover:bg-navy/40">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-brand opacity-0 transition-opacity group-hover:opacity-100">
                  <Plus className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
