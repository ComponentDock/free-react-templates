const causes = [
  {
    title: 'Clean Water Initiative',
    description: 'Providing clean and safe drinking water to communities that lack access.',
    progress: 75,
    image: 'gracious-cause-water',
  },
  {
    title: 'Education for All',
    description: 'Building schools and providing educational resources to children.',
    progress: 60,
    image: 'gracious-cause-education',
  },
  {
    title: 'Healthcare Access',
    description: 'Delivering essential medical supplies and healthcare services.',
    progress: 45,
    image: 'gracious-cause-health',
  },
  {
    title: 'Disaster Relief',
    description: 'Providing emergency aid to communities affected by disasters.',
    progress: 80,
    image: 'gracious-cause-disaster',
  },
  {
    title: 'Food Security',
    description: 'Ensuring families have access to nutritious food and proper nutrition.',
    progress: 55,
    image: 'gracious-cause-food',
  },
  {
    title: 'Shelter Program',
    description: 'Providing safe and dignified housing for homeless families.',
    progress: 40,
    image: 'gracious-cause-shelter',
  },
] as const

export function Causes() {
  return (
    <section id="causes" className="bg-white py-16 transition-colors lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">
            Our Causes
          </span>
          <h2 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">Popular Causes</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {causes.map((cause) => (
            <div
              key={cause.title}
              className="group overflow-hidden rounded bg-white shadow-md transition-all hover:shadow-lg"
            >
              <img
                src={`https://picsum.photos/seed/${cause.image}/400/250`}
                alt={cause.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-ink">{cause.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{cause.description}</p>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs text-meta">
                    <span>Progress</span>
                    <span>{cause.progress}%</span>
                  </div>
                  <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-green transition-all"
                      style={{ width: `${cause.progress}%` }}
                    />
                  </div>
                </div>
                <a
                  href="#donate"
                  className="mt-4 block w-full rounded-none bg-teal py-2.5 text-center text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#5abfd6]"
                >
                  Donate Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
