const photos = [
  { seed: 'wedlock-2', alt: 'Couple exchanging vows under a floral arch' },
  { seed: 'wedlock-3', alt: 'Bride and groom sharing a first dance' },
  { seed: 'wedlock-4', alt: 'Wedding table setting with candles and flowers' },
  { seed: 'wedlock-5', alt: 'Bride holding a bouquet of white roses' },
  { seed: 'wedlock-6', alt: 'Wedding guests throwing confetti' },
  { seed: 'wedlock-7', alt: 'Couple walking hand in hand at sunset' },
]

export function Gallery() {
  return (
    <section id="photos" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-center font-serif text-4xl font-bold text-ink-900 sm:text-5xl">
          Your memories
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg text-ink-700">
          Every wedding tells a different love story — here are a few frames we are proud to have
          captured.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <a
              key={photo.seed}
              href="#photos"
              className="group relative block overflow-hidden rounded-lg"
            >
              <img
                src={`https://picsum.photos/seed/${photo.seed}/800/600`}
                alt={photo.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-accent-500/0 transition-colors duration-300 group-hover:bg-accent-500/20" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
