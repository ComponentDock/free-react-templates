const publishers = [
  'Publisher One',
  'Publisher Two',
  'Publisher Three',
  'Publisher Four',
  'Publisher Five',
]

export function Partners() {
  return (
    <section className="border-b border-gray-100 bg-white py-12" aria-label="Partners">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {publishers.map((name) => (
            <div
              key={name}
              className="flex h-12 items-center justify-center opacity-40 grayscale transition-all hover:opacity-70 hover:grayscale-0"
            >
              <span className="font-display text-lg font-bold text-gray-500">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
