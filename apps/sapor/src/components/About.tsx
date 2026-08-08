const stats = [
  { value: '40+', label: 'Years of Excellence' },
  { value: '50K+', label: 'Happy Guests' },
  { value: '4.9', label: 'Star Rating' },
] as const

export function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            A Family Tradition of Excellence
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            For nearly four decades, Sapor has been bringing the authentic flavors of Italy to our
            community. Founded by the Rossi family in 1985, every dish tells a story of heritage,
            passion and the simple joy of sharing a meal.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            From hand-rolled pasta to wood-fired classics, our kitchen honors time-honored recipes
            while embracing the freshest local ingredients — because family recipes deserve the
            finest table.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col text-center">
              <span className="font-serif text-4xl font-bold text-primary-600 sm:text-5xl">
                {stat.value}
              </span>
              <span className="mt-2 text-sm font-medium uppercase tracking-wider text-gray-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
