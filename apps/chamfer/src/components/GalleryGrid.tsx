import { ArrowRight } from 'lucide-react'

const galleryItems = [
  {
    image: 'https://picsum.photos/seed/chamfer-gal-1/800/600',
    name: 'Modern Living Room',
    cols: 'md:col-span-2',
  },
  {
    image: 'https://picsum.photos/seed/chamfer-gal-2/800/600',
    name: 'Kitchen Renovation',
    cols: '',
  },
  { image: 'https://picsum.photos/seed/chamfer-gal-3/800/600', name: 'Bedroom Suite', cols: '' },
  { image: 'https://picsum.photos/seed/chamfer-gal-4/800/600', name: 'Office Space', cols: '' },
  { image: 'https://picsum.photos/seed/chamfer-gal-5/800/600', name: 'Bathroom Design', cols: '' },
  { image: 'https://picsum.photos/seed/chamfer-gal-6/800/600', name: 'Penthouse View', cols: '' },
] as const

export function GalleryGrid() {
  return (
    <section id="gallery" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold uppercase tracking-wider text-dark-text md:text-4xl">
          Our Gallery
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 bg-brand-red" />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {galleryItems.map((item) => (
            <div
              key={item.name}
              className={`group relative cursor-pointer overflow-hidden ${item.cols}`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-dark-navy/0 opacity-0 transition-all duration-300 group-hover:bg-dark-navy/70 group-hover:opacity-100">
                <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white">
                  {item.name}
                </h3>
                <ArrowRight className="mt-2 h-5 w-5 text-brand-red" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
