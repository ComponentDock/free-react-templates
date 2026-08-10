const instagramSeeds = [
  'feature-insta-1',
  'feature-insta-2',
  'feature-insta-3',
  'feature-insta-4',
  'feature-insta-5',
  'feature-insta-6',
  'feature-insta-7',
  'feature-insta-8',
] as const

export function InstagramStrip() {
  return (
    <section aria-label="Instagram" className="pb-28">
      <h2 className="mb-10 text-center text-base font-semibold uppercase tracking-[0.3em] text-ink-heading dark:text-gray-100">
        Instagram
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8">
        {instagramSeeds.map((seed, index) => (
          <a
            key={seed}
            href="#"
            aria-label={`Instagram photo ${index + 1}`}
            className="group relative h-[200px] overflow-hidden"
          >
            <img
              src={`https://picsum.photos/seed/${seed}/200/200`}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30"
              aria-hidden="true"
            />
          </a>
        ))}
      </div>
    </section>
  )
}
