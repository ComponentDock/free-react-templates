const causes = [
  {
    title: 'Clean Water Initiative',
    image: 'https://picsum.photos/seed/givehope-cause1/600/400',
    goal: 2500,
    raised: 1533,
    percentage: 61,
  },
  {
    title: 'Education For All',
    image: 'https://picsum.photos/seed/givehope-cause2/600/400',
    goal: 3000,
    raised: 2100,
    percentage: 70,
  },
  {
    title: 'Medical Relief Fund',
    image: 'https://picsum.photos/seed/givehope-cause3/600/400',
    goal: 5000,
    raised: 3750,
    percentage: 75,
  },
] as const

export function Causes() {
  return (
    <section id="causes" className="bg-mist py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[3px] text-sub">
            Donation shows Passion
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-heading sm:text-4xl">
            Featured Causes
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {causes.map((cause) => (
            <article
              key={cause.title}
              className="overflow-hidden rounded-lg border border-border bg-white"
            >
              <img src={cause.image} alt={cause.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-heading">{cause.title}</h3>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-primary-400 transition-all"
                    style={{ width: `${cause.percentage}%` }}
                  />
                </div>
                <div className="mt-3 flex justify-between text-xs text-smoke">
                  <span>Raised: ${cause.raised.toLocaleString()}</span>
                  <span>Goal: ${cause.goal.toLocaleString()}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
