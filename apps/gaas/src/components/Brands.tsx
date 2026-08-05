const brands = [
  'https://picsum.photos/seed/gaas-brand-1/140/48',
  'https://picsum.photos/seed/gaas-brand-2/140/48',
  'https://picsum.photos/seed/gaas-brand-3/140/48',
  'https://picsum.photos/seed/gaas-brand-4/140/48',
  'https://picsum.photos/seed/gaas-brand-5/140/48',
] as const

export function Brands() {
  return (
    <section aria-label="Client brands" className="bg-paper py-16 sm:py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
          What Our Clients Say About Us
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-body dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-10">
          {brands.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Client brand logo ${index + 1}`}
              className="h-12 w-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
