const photos = [
  { seed: 'dogger-gallery-1' },
  { seed: 'dogger-gallery-2' },
  { seed: 'dogger-gallery-3' },
  { seed: 'dogger-gallery-4' },
  { seed: 'dogger-gallery-5' },
  { seed: 'dogger-gallery-6' },
] as const

export function Gallery() {
  return (
    <section id="gallery" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold text-black dark:text-white">
          Photo Gallery
        </h2>
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
          {photos.map((photo, index) => (
            <img
              key={photo.seed}
              src={`https://picsum.photos/seed/${photo.seed}/640/480`}
              alt=""
              loading="lazy"
              className={`w-full rounded-lg object-cover ${index === 0 ? 'aspect-[4/3]' : 'aspect-square'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
