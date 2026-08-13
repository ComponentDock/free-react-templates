import { ZoomIn } from 'lucide-react'

const photos = Array.from({ length: 8 }, (_, index) => `nuptial-${23 + index}`)

export function Gallery() {
  return (
    <section id="gallery" className="bg-white py-16 transition-colors dark:bg-gray-950 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-script text-5xl text-pink-500 sm:text-6xl">Gallery</h2>
        <div className="mt-14 grid grid-cols-2 gap-2 md:grid-cols-4">
          {photos.map((seed) => (
            <figure key={seed} className="group relative overflow-hidden">
              <img
                src={`https://picsum.photos/seed/${seed}/600/600`}
                alt=""
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              >
                <ZoomIn className="h-8 w-8 text-white" />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
