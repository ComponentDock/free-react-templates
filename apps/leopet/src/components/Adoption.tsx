const stats = [
  { value: '590+', label: 'Pets Available' },
  { value: '300+', label: 'Happy Clients' },
] as const

export function Adoption() {
  return (
    <section id="adopt" className="bg-paper py-16 dark:bg-gray-900 md:py-24">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-heading sm:text-4xl dark:text-white">
          We need your help Adopt Us
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base font-medium text-gray-500 dark:text-gray-400">
          Working with humanitarian aid agencies, we support programmes that alleviate human
          suffering through animal welfare.
        </p>
        <dl className="mx-auto mt-10 grid max-w-2xl gap-8 sm:grid-cols-2">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-800">
              <dt className="text-4xl font-bold text-brand">{stat.value}</dt>
              <dd className="mt-2 text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
        <a
          href="#contact"
          className="mt-10 inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Browse Now
        </a>
      </div>
    </section>
  )
}
