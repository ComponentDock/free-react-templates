const steps = [
  {
    step: '01',
    title: 'Grow',
    copy: 'Seeds are planted in rich, chemical-free soil and tended by hand.',
  },
  {
    step: '02',
    title: 'Harvest',
    copy: 'Produce is picked at peak ripeness for the best flavor and nutrition.',
  },
  {
    step: '03',
    title: 'Quality Check',
    copy: 'Every batch is inspected for quality, freshness, and safety.',
  },
  {
    step: '04',
    title: 'Deliver',
    copy: 'Fresh goods reach your table quickly, straight from the farm.',
  },
] as const

export function FarmToTable() {
  return (
    <section id="farm-to-table" className="bg-paper py-14 dark:bg-gray-900 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold text-black dark:text-white">
          From Farm To Your Table
        </h2>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ step, title, copy }) => (
            <article key={title} className="text-center">
              <span className="text-5xl font-extrabold text-brand/25">{step}</span>
              <h3 className="mt-4 text-xl font-bold text-black dark:text-white">{title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-gray-500 dark:text-gray-400">
                {copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
