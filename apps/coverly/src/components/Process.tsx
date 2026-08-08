const steps = [
  {
    number: '01',
    title: 'Get a Quote',
    blurb: 'Tell us about yourself and what you need to protect. It takes less than two minutes.',
  },
  {
    number: '02',
    title: 'Choose Your Plan',
    blurb: 'Compare personalized options and pick the coverage and price that fit your budget.',
  },
  {
    number: '03',
    title: "You're Covered",
    blurb: 'Sign digitally and get your policy documents instantly. We handle the paperwork.',
  },
] as const

export function Process() {
  return (
    <section id="process" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Getting Covered is Easy
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Three simple steps between you and the peace of mind you deserve.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.number}
              className="rounded-2xl border border-gray-200 bg-white p-8 text-center dark:border-gray-800 dark:bg-gray-950"
            >
              <span className="text-5xl font-extrabold text-primary-600/20 dark:text-primary-400/25">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {step.blurb}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
