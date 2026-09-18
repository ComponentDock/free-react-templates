const tips = [
  {
    image: 'https://picsum.photos/seed/turfly-spring/400/300',
    season: 'Spring',
    title: 'Spring Lawn Revival',
    description:
      'Start the season right with aeration, overseeding, and the first fertilizer application to wake up your lawn.',
  },
  {
    image: 'https://picsum.photos/seed/turfly-summer/400/300',
    season: 'Summer',
    title: 'Summer Maintenance',
    description:
      'Keep your lawn healthy during the heat with proper watering schedules and regular mowing at the right height.',
  },
  {
    image: 'https://picsum.photos/seed/turfly-autumn/400/300',
    season: 'Autumn',
    title: 'Fall Preparation',
    description:
      'Prepare your lawn for winter with leaf removal, final mowing, and a winterizing fertilizer treatment.',
  },
  {
    image: 'https://picsum.photos/seed/turfly-winter/400/300',
    season: 'Winter',
    title: 'Winter Protection',
    description:
      'Protect your turf from frost damage and plan your spring strategy with a professional lawn assessment.',
  },
] as const

export function SeasonalTips() {
  return (
    <section aria-labelledby="tips-heading" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="tips-heading" className="text-center text-3xl font-bold text-ink sm:text-4xl">
          Seasonal Lawn Care Tips
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500">
          Follow our seasonal guide to keep your lawn in top condition throughout the year.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tips.map((tip) => (
            <article
              key={tip.season}
              className="group overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={tip.image}
                  alt={`${tip.season} lawn care`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <span className="inline-block rounded bg-primary-100 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-primary-500">
                  {tip.season}
                </span>
                <h3 className="mt-2 text-lg font-bold text-ink">{tip.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{tip.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
