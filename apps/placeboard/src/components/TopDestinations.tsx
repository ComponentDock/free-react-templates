const topDestinations = [
  { name: 'Rome, Italy', seed: 'placeboard-top-1' },
  { name: 'Paris, France', seed: 'placeboard-top-2' },
  { name: 'Tokyo, Japan', seed: 'placeboard-top-3' },
  { name: 'Barcelona, Spain', seed: 'placeboard-top-4' },
  { name: 'Sydney, Australia', seed: 'placeboard-top-5' },
  { name: 'New York, USA', seed: 'placeboard-top-6' },
]

export function TopDestinations() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2
            className="mb-3 text-3xl font-bold text-heading"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Top Destinations
          </h2>
          <p className="mx-auto max-w-2xl text-body">
            Discover the most popular travel destinations loved by millions of travelers around the
            world
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {topDestinations.map((dest) => (
            <a
              key={dest.name}
              href="#"
              className="group block overflow-hidden transition-opacity hover:opacity-70"
            >
              <div className="mb-3 overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${dest.seed}/300/200`}
                  alt={dest.name}
                  className="h-32 w-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3
                className="text-sm font-bold text-heading"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {dest.name}
              </h3>
              <p className="text-xs text-body">Visit This Place</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
