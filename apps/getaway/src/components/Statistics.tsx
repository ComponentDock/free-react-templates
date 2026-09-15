const stats = [
  { number: '300', label: 'Successful Tours' },
  { number: '24,000', label: 'Happy Tourists' },
  { number: '200', label: 'Places Explored' },
]

export function Statistics() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <img
            src="https://picsum.photos/seed/getaway-about/800/600"
            alt="Travel experience"
            className="w-full rounded-lg object-cover"
          />

          <div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Make Your Tour Memorable and Safe With Us
            </h2>
            <p className="mb-8 text-gray-600">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map(({ number, label }) => (
                <div key={label} className="text-center">
                  <span className="block text-3xl font-bold text-sunset-700">{number}</span>
                  <span className="text-sm text-gray-600">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
