const partners = [
  { name: 'Publisher 1', seed: 'pub1' },
  { name: 'Publisher 2', seed: 'pub2' },
  { name: 'Publisher 3', seed: 'pub3' },
  { name: 'Publisher 4', seed: 'pub4' },
  { name: 'Publisher 5', seed: 'pub5' },
] as const

export function Partners() {
  return (
    <section className="border-b border-gray-100 bg-white py-12 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 px-4 sm:gap-12 md:gap-16">
        {partners.map((partner) => (
          <img
            key={partner.seed}
            src={`https://picsum.photos/seed/${partner.seed}/120/50`}
            alt={partner.name}
            className="h-10 w-auto object-contain opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0"
          />
        ))}
      </div>
    </section>
  )
}
