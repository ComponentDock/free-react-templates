const stats = [
  { value: '500+', label: 'Qualified Lawyer' },
  { value: '20,650+', label: 'Solved Cases' },
  { value: '2.5k+', label: 'Trusted Clients' },
  { value: '50+', label: 'Achievements' },
] as const

export function About() {
  return (
    <section id="about" className="bg-paper py-16 dark:bg-gray-900 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img
            src="https://picsum.photos/seed/crafted-about/720/520"
            alt="The Crafted studio at work"
            className="w-full rounded object-cover shadow-lg"
          />
          <div>
            <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
              We Are Crafted. Some Info About Us
            </h2>
            <p className="mt-5 leading-relaxed text-body dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mt-4 leading-relaxed text-body dark:text-gray-400">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 rounded bg-counter p-8 dark:bg-gray-800 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold text-primary-500 sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-body dark:text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
