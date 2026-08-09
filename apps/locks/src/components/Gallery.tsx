const photos = [1, 2, 3, 4, 5, 6] as const

export function Gallery() {
  return (
    <section id="gallery" className="bg-white py-24 transition-colors dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-ink dark:text-white sm:text-4xl">
          Our <span className="text-brand">Gallery</span>
        </h2>
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {photos.map((photo) => (
            <img
              key={photo}
              src={`https://picsum.photos/seed/locks-gallery-${photo}/600/600`}
              alt="Salon work sample"
              className="aspect-square w-full rounded-xl object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
