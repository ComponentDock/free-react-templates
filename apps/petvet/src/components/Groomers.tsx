const groomers = [
  { name: 'Lloyd Wilson', role: 'CEO, Founder' },
  { name: 'Rachel Parker', role: 'Trainer' },
  { name: 'Ian Smith', role: 'Groomer' },
  { name: 'Alicia Henderson', role: 'Groomer' },
] as const

export function Groomers() {
  return (
    <section id="groomers" className="bg-paper py-16 dark:bg-gray-900 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-black text-gray-900 sm:text-4xl dark:text-white">
          Our Groomers
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {groomers.map((groomer, index) => (
            <article
              key={groomer.name}
              className="rounded-2xl bg-white p-6 text-center shadow-sm dark:bg-gray-800"
            >
              <img
                src={`https://picsum.photos/seed/petvet-groomer-${index + 1}/300/300`}
                alt={`Portrait of ${groomer.name}`}
                className="mx-auto h-32 w-32 rounded-full object-cover"
              />
              <h3 className="mt-5 text-lg font-bold text-gray-900 dark:text-white">
                {groomer.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-brand">{groomer.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
