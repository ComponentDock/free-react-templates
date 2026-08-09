const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '4,800+', label: 'Happy Clients' },
  { value: '25+', label: 'Expert Stylists' },
] as const

export function AboutTressly() {
  return (
    <section id="story" className="bg-mist-100 py-20 dark:bg-gray-900">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <img
          src="https://picsum.photos/seed/tressly-about/640/480"
          alt="Stylist at work in the Tressly salon"
          className="w-full rounded-2xl object-cover shadow-lg"
          loading="lazy"
        />
        <div>
          <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            About Tressly
          </h2>
          <p className="mt-5 text-gray-600 dark:text-gray-300">
            Our passion for hair shows in every cut, colour and style we create — Tressly has been a
            neighbourhood favourite for over fifteen years.
          </p>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Book a visit and let our team take care of the rest.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-white p-4 text-center shadow-sm dark:bg-gray-800"
              >
                <div className="font-display text-2xl font-bold text-leaf-600 dark:text-leaf-400">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
