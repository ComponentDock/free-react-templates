const stats = [
  { value: '15+', label: 'Years Roasting' },
  { value: '12', label: 'Origin Countries' },
  { value: '3', label: 'Portland Locations' },
  { value: '50k+', label: 'Happy Customers' },
]

export function Story() {
  return (
    <section id="story" className="scroll-mt-20 bg-primary-50 py-20 dark:bg-gray-900 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-primary-100 bg-white p-6 text-center dark:border-gray-800 dark:bg-gray-950"
            >
              <p className="font-display text-3xl font-bold text-primary-700 dark:text-primary-300">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            From Portland, With Love
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            What started as a small cart at the Saturday Market has grown into three beloved
            locations across Portland. But our mission remains the same: to source exceptional
            coffees, roast them with care, and share them with our community.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Every bag we roast tells a story — of the farmers who grew it, the land that nurtured
            it, and the hands that brought it to your cup. We believe coffee should be more than
            just caffeine; it should be an experience.
          </p>
          <a
            href="#process"
            className="mt-8 inline-block font-medium text-primary-700 underline-offset-4 transition-colors hover:text-primary-800 hover:underline dark:text-primary-300 dark:hover:text-primary-200"
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  )
}
