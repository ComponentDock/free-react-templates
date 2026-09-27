const logos = [
  { name: 'Client 1', seed: 'dwellpoint-l1' },
  { name: 'Client 2', seed: 'dwellpoint-l2' },
  { name: 'Client 3', seed: 'dwellpoint-l3' },
  { name: 'Client 4', seed: 'dwellpoint-l4' },
  { name: 'Client 5', seed: 'dwellpoint-l5' },
]

export function Clients() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-800">Reliable Customers</h2>
          <p className="mx-auto max-w-2xl text-gray-500">
            Trusted by leading companies and individuals. Our partners value quality, transparency,
            and results.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10">
          {logos.map(({ name, seed }) => (
            <div
              key={name}
              className="flex h-16 w-32 items-center justify-center grayscale opacity-40 transition-all hover:opacity-80 hover:grayscale-0"
            >
              <img
                src={`https://picsum.photos/seed/${seed}/128/48`}
                alt={name}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
