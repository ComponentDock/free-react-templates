const clients = ['Google', 'Microsoft', 'Apple', 'Amazon', 'Netflix', 'Spotify']

export function Clients() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-10 text-center text-2xl font-extralight text-gray-800">
          Trusted By <strong className="font-bold">Leading Brands</strong>
        </h2>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
          {clients.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center text-lg font-bold text-gray-400 transition-colors hover:text-brand-primary"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
