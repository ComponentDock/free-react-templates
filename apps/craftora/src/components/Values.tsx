const values = [
  { number: '01.', title: 'Our Values' },
  { number: '02.', title: 'Our Mission' },
  { number: '03.', title: 'Our Philosophy' },
] as const

export function Values() {
  return (
    <section id="about" className="bg-white py-16 dark:bg-gray-950 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="relative pt-12">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-6 left-0 text-8xl font-black text-ghost dark:text-gray-900"
              >
                {value.number}
              </span>
              <h2 className="text-2xl font-bold text-black dark:text-white">{value.title}</h2>
              <p className="mt-4 leading-relaxed text-ink dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium eos nulla
                qui commodi consectetur beatae fugiat. Veniam iste rerum perferendis.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
