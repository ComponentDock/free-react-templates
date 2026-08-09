const images = Array.from(
  { length: 8 },
  (_, index) => `https://picsum.photos/seed/serenity-gallery-${index + 1}/600/600`,
)

export function Gallery() {
  return (
    <section id="gallery" className="bg-white transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
            Gallery
          </span>
          <h2 className="mt-3 text-3xl font-light text-ink dark:text-white sm:text-4xl">
            See the latest photos
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-mist dark:text-white/60">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`Serenity spa photo ${index + 1}`}
              loading="lazy"
              className="h-48 w-full object-cover transition-opacity hover:opacity-80 sm:h-56"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
