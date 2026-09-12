const photos = [
  'https://picsum.photos/seed/lodge-insta1/400/400',
  'https://picsum.photos/seed/lodge-insta2/400/400',
  'https://picsum.photos/seed/lodge-insta3/400/400',
  'https://picsum.photos/seed/lodge-insta4/400/400',
]

export function Instagram() {
  return (
    <section className="bg-lodge-900 py-12">
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <h2
          className="mb-8 text-xl font-light text-white"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Follow us on Instagram @lodgehotel
        </h2>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {photos.map((src, i) => (
            <a key={i} href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img
                src={src}
                alt={`Hotel room ${i + 1}`}
                className="aspect-square w-full object-cover transition hover:opacity-80"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
