const steps = [
  {
    number: '01',
    title: 'Define',
    blurb: 'We dig into your goals, audience, and market to frame the problem.',
  },
  {
    number: '02',
    title: 'Design',
    blurb: 'We sketch, prototype, and refine beautiful interfaces around your brand.',
  },
  {
    number: '03',
    title: 'Build',
    blurb: 'We engineer fast, accessible products with clean, maintainable code.',
  },
  {
    number: '04',
    title: 'Launch',
    blurb: 'We ship, measure, and iterate to keep your product moving forward.',
  },
] as const

export function WhoWeAre() {
  return (
    <section id="about" aria-label="Who we are" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-gray-100">
            Who We Are
          </h2>
          <p className="mt-4 leading-relaxed text-smoke dark:text-gray-400">
            We are a group of design driven individuals passionate about creating beautiful,
            functional digital products.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-primary-100 bg-gray-50 p-7 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="font-display text-3xl font-bold text-primary-400">{step.number}</div>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink dark:text-gray-100">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-smoke dark:text-gray-400">
                {step.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
