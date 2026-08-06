const steps = [
  { number: 1, title: 'This is the first step' },
  { number: 2, title: 'This is the second step' },
  { number: 3, title: 'This is the third step' },
  { number: 4, title: 'This is the fourth step' },
] as const

export function Workflow() {
  return (
    <section aria-label="Workflow" className="bg-paper py-16 sm:py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-500 dark:text-primary-300">
            Process
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
            This is how we work on Projects
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-gray-100 bg-white p-8 text-center dark:border-gray-800 dark:bg-gray-950"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-500 font-display text-xl font-black text-white">
                {step.number}.
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink dark:text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et
                tellus blandit.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
