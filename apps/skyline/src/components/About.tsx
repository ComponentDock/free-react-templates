const stats = [
  { value: '100', label: 'Projects' },
  { value: '300', label: 'Clients' },
  { value: '150', label: 'Team Members' },
] as const

export function About() {
  return (
    <section id="about" className="bg-paper py-20 dark:bg-gray-950 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-[5px]">
          <img
            src="https://picsum.photos/seed/skyline-about/700/560"
            alt="Modern apartment building with glass balconies"
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[2.4px] text-brand">About Us</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-tight text-ink dark:text-white sm:text-4xl">
            Hello City, We Are Leaders In Properties
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-mist dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Suspendisse ultrices gravida.
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-black/10 pt-8 dark:border-white/10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dd className="font-display text-3xl font-extrabold text-brand sm:text-4xl">
                  {stat.value}
                </dd>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-mist dark:text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
