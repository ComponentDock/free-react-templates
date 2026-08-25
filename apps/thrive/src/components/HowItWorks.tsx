const steps = [
  {
    number: '01',
    title: 'Connect',
    blurb: 'Link your repository and pick a template — we handle the rest.',
  },
  {
    number: '02',
    title: 'Build',
    blurb: 'Push code and watch previews appear for every branch in seconds.',
  },
  {
    number: '03',
    title: 'Deploy',
    blurb: 'Ship to production with one click and scale automatically.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            From idea to production in minutes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Three simple steps stand between your idea and a live product.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <p className="text-4xl font-extrabold text-primary-600 dark:text-primary-400">
                {step.number}
              </p>
              <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{step.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
