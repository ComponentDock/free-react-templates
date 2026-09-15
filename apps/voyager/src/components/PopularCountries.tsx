const tourImages = [
  { title: 'Rome - 5 Days', price: 120, seed: 'voyager-country-1' },
  { title: 'Venice - 4 Days', price: 95, seed: 'voyager-country-2' },
  { title: 'Florence - 3 Days', price: 85, seed: 'voyager-country-3' },
  { title: 'Naples - 6 Days', price: 150, seed: 'voyager-country-4' },
]

const cities = [
  ['Rome', 'Milan', 'Genoa', 'Verona'],
  ['Venice', 'Bologna', 'Trieste', 'Florence'],
  ['Palermo', 'Siena', 'San Marino', 'Naples'],
]

export function PopularCountries() {
  return (
    <section className="py-20" aria-label="Popular countries">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black">Most Popular Travel Countries</h2>
          <p className="mx-auto max-w-xl text-gray-500">
            We love to tell our successful far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia.
          </p>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Left: Tour images grid */}
          <div className="grid grid-cols-2 gap-4 lg:w-1/2">
            {tourImages.map((img) => (
              <a
                key={img.title}
                href="#"
                className="group relative block h-48 overflow-hidden rounded-lg"
              >
                <div
                  className="h-full w-full bg-cover bg-center transition-transform group-hover:scale-110"
                  style={{
                    backgroundImage: `url(https://picsum.photos/seed/${img.seed}/400/300)`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="text-sm font-bold">{img.title}</h3>
                  <p className="text-xs">
                    <span className="font-bold">${img.price}</span>{' '}
                    <span className="text-white/70">/ person</span>
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Right: Description + city list */}
          <div className="lg:w-1/2">
            <h3 className="mb-4 text-2xl font-bold text-black">Italy, Europe</h3>
            <p className="mb-6 text-gray-500">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean. A small river named Duden flows
              by their place and supplies it with the necessary regelialia.
            </p>
            <h4 className="mb-4 text-lg font-bold text-black">Best Tours City</h4>
            <div className="mb-6 grid grid-cols-3 gap-4">
              {cities.map((col, i) => (
                <ul key={i} className="space-y-1">
                  {col.map((city) => (
                    <li key={city}>
                      <a
                        href="#"
                        className="text-sm text-primary-600 transition-colors hover:text-primary-700"
                      >
                        {city}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
            <a
              href="#"
              className="inline-block rounded bg-primary-500 px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-primary-600"
            >
              View All Places
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
