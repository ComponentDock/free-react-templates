const causes = [
  {
    image: 'https://picsum.photos/seed/warmheart-cause-1/400/250',
    title: 'Education for All',
    description:
      'Every child deserves access to quality education. Help us build schools and provide learning resources to underserved communities.',
    raised: 50689,
    total: 500000,
    percent: 10,
  },
  {
    image: 'https://picsum.photos/seed/warmheart-cause-2/400/250',
    title: 'Clean Water Initiative',
    description:
      'Access to clean water is a basic human right. We work to install water purification systems in communities lacking safe drinking water.',
    raised: 32450,
    total: 250000,
    percent: 13,
  },
  {
    image: 'https://picsum.photos/seed/warmheart-cause-3/400/250',
    title: 'Medical Aid Relief',
    description:
      'Providing essential medical supplies and healthcare services to communities in need across developing nations.',
    raised: 67800,
    total: 400000,
    percent: 17,
  },
] as const

export function MajorCauses() {
  return (
    <section id="causes" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <h2 className="text-2xl font-medium text-text-primary md:text-3xl">Our Major Causes</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-text-muted">
            The French Revolution constituted for the conscience of the dominant aristocratic class
            a fall from innocence, and upturning of the natural chain of events that resounded.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {causes.map((cause) => (
            <div
              key={cause.title}
              className="overflow-hidden border border-border bg-white shadow-sm"
            >
              <img
                src={cause.image}
                alt={cause.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="px-6 pb-6 pt-4">
                <div className="mb-1 h-2 w-full overflow-hidden bg-gray-200">
                  <div
                    className="h-full bg-brand"
                    style={{ width: `${cause.percent}%` }}
                    role="progressbar"
                    aria-valuenow={cause.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <p className="mb-4 text-xs text-text-muted">
                  Raised: ${cause.raised.toLocaleString()} / ${cause.total.toLocaleString()}
                </p>
                <h3 className="mb-2 text-base font-medium text-text-primary">{cause.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-text-muted">{cause.description}</p>
                <a
                  href="#donate"
                  className="inline-block border border-brand bg-transparent px-6 py-2 text-xs font-bold uppercase tracking-wider text-brand transition-colors hover:bg-brand hover:text-white"
                >
                  Donate Here
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
