import { Reveal } from './Reveal'

interface Photo {
  caption: string
  image: string
}

const photos: Photo[] = [
  {
    caption: 'Resort infinity pool overlooking the ocean',
    image: 'https://picsum.photos/seed/seacliff-5/800/600',
  },
  {
    caption: 'Luxurious hotel suite with ocean view',
    image: 'https://picsum.photos/seed/seacliff-6/800/600',
  },
  {
    caption: 'Pristine private beach at sunset',
    image: 'https://picsum.photos/seed/seacliff-7/800/600',
  },
  {
    caption: 'Spa treatment room with relaxing ambiance',
    image: 'https://picsum.photos/seed/seacliff-8/800/600',
  },
  {
    caption: 'Elegant restaurant with ambient lighting',
    image: 'https://picsum.photos/seed/seacliff-9/800/600',
  },
  {
    caption: 'Grand hotel lobby with modern design',
    image: 'https://picsum.photos/seed/seacliff-10/800/600',
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="bg-gray-50 py-20 dark:bg-gray-900 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            A Glimpse of Paradise
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600 dark:text-gray-400">
            Wander through the spaces that make Seacliff unforgettable.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <Reveal
              key={photo.caption}
              delay={100}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={photo.image}
                alt={photo.caption}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-sm font-semibold text-white">{photo.caption}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
