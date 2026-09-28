import { ImageIcon } from 'lucide-react'

const galleryImages = [
  {
    src: 'https://picsum.photos/seed/bites-gal1/800/600',
    alt: 'Food gallery 1',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://picsum.photos/seed/bites-gal2/400/300',
    alt: 'Food gallery 2',
    span: 'col-span-1 row-span-2',
  },
  {
    src: 'https://picsum.photos/seed/bites-gal3/400/300',
    alt: 'Food gallery 3',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://picsum.photos/seed/bites-gal4/400/300',
    alt: 'Food gallery 4',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://picsum.photos/seed/bites-gal5/400/300',
    alt: 'Food gallery 5',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://picsum.photos/seed/bites-gal6/800/600',
    alt: 'Food gallery 6',
    span: 'col-span-2 row-span-2',
  },
]

export function Gallery() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-4xl font-bold text-ink">Foodbar Galleries</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-brand" />
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {galleryImages.map((img) => (
            <div key={img.src} className={`group relative overflow-hidden rounded-lg ${img.span}`}>
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ImageIcon className="h-8 w-8 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
