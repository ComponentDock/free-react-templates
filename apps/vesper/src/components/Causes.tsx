const causes = [
  {
    title: 'Health care, Food',
    image: 'https://picsum.photos/seed/vesper-13/700/500',
    progress: 40,
    raised: '$40,000',
    goal: '$100,000',
    description:
      'Providing medical care and daily meals for families who are struggling to make ends meet.',
  },
  {
    title: 'Restored the Old City Church',
    image: 'https://picsum.photos/seed/vesper-14/700/500',
    progress: 65,
    raised: '$65,000',
    goal: '$100,000',
    description:
      'Repairing the roof and stained-glass windows of our historic building in the old city.',
  },
  {
    title: 'Save Children For Hunger',
    image: 'https://picsum.photos/seed/vesper-15/700/500',
    progress: 80,
    raised: '$80,000',
    goal: '$100,000',
    description:
      'Feeding programs and school meals that keep children healthy, learning, and hopeful.',
  },
  {
    title: 'Support Missionary Work',
    image: 'https://picsum.photos/seed/vesper-16/700/500',
    progress: 55,
    raised: '$55,000',
    goal: '$100,000',
    description:
      'Sending and sustaining missionaries who share the gospel and serve communities abroad.',
  },
] as const

export function Causes() {
  return (
    <section id="causes" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
          Causes Needs Our Help
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {causes.map((cause) => (
            <article
              key={cause.title}
              className="overflow-hidden rounded-lg border border-gray-100"
            >
              <img
                src={cause.image}
                alt=""
                aria-hidden="true"
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-serif text-lg font-bold text-gray-900">
                  <a href="#causes" className="transition-colors hover:text-gold-dark">
                    {cause.title}
                  </a>
                </h3>
                <div
                  role="progressbar"
                  aria-valuenow={cause.progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${cause.title} progress`}
                  className="mt-4 h-2 w-full rounded-full bg-gray-100"
                >
                  <div
                    className="h-2 rounded-full bg-gold"
                    style={{ width: `${cause.progress}%` }}
                  />
                </div>
                <p className="mt-2 text-xs font-semibold text-gray-700">
                  {cause.progress}% · {cause.raised} <span className="text-gray-400">raised</span>{' '}
                  of {cause.goal} <span className="text-gray-400">goal</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{cause.description}</p>
                <a
                  href="#causes"
                  className="mt-4 inline-block rounded bg-gold px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold-dark"
                >
                  Donate Now!
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Donation intro */}
        <div className="mt-10 rounded-lg bg-gray-900 p-6 sm:p-10">
          <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
            Donation so far <span className="text-gold">$ 0</span>
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-gray-300">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics.
          </p>
          <a
            href="#causes"
            className="mt-6 inline-block rounded bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-200"
          >
            Donate now!
          </a>
        </div>
      </div>
    </section>
  )
}
