const images = [
  {
    src: 'https://picsum.photos/seed/horseclub-gallery-1/600/400',
    alt: 'Horse jumping an obstacle',
  },
  {
    src: 'https://picsum.photos/seed/horseclub-gallery-2/600/400',
    alt: 'Riders on a morning trail',
  },
  { src: 'https://picsum.photos/seed/horseclub-gallery-3/600/400', alt: 'Foal in the stable yard' },
  {
    src: 'https://picsum.photos/seed/horseclub-gallery-4/600/400',
    alt: 'Dressage practice in the arena',
  },
  { src: 'https://picsum.photos/seed/horseclub-gallery-5/600/400', alt: 'Tack room with saddles' },
  { src: 'https://picsum.photos/seed/horseclub-gallery-6/600/400', alt: 'Clubhouse at sunset' },
] as const

export function Gallery() {
  return (
    <section id="events" className="bg-white py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-ink dark:text-white lg:text-4xl">
            Moments at the Club
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-muted dark:text-gray-400">
            A glimpse of life at Horse Club — events, training, and our horses.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {images.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="aspect-square w-full rounded-2xl object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
