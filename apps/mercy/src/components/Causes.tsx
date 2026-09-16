import { ButtonLink } from '@free-react-templates/ui'

const causes = [
  {
    title: 'Clean Water Initiative',
    description:
      'Providing clean and safe drinking water to communities that lack access to this basic necessity.',
    progress: 75,
    image: 'mercy-cause-water',
  },
  {
    title: 'Education for All',
    description:
      'Building schools and providing educational resources to children in underserved regions.',
    progress: 60,
    image: 'mercy-cause-education',
  },
  {
    title: 'Healthcare Access',
    description: 'Delivering essential medical supplies and healthcare services to remote areas.',
    progress: 45,
    image: 'mercy-cause-health',
  },
  {
    title: 'Disaster Relief',
    description:
      'Providing emergency aid and support to communities affected by natural disasters.',
    progress: 80,
    image: 'mercy-cause-disaster',
  },
] as const

export function Causes() {
  return (
    <section id="causes" className="bg-white py-16 transition-colors dark:bg-gray-950 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Our Causes
          </span>
          <h2 className="mt-3 text-2xl font-bold text-ink dark:text-white sm:text-3xl">
            Popular Causes
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {causes.map((cause) => (
            <div
              key={cause.title}
              className="group overflow-hidden rounded bg-white shadow-md transition-all hover:shadow-lg dark:bg-gray-800"
            >
              <img
                src={`https://picsum.photos/seed/${cause.image}/400/250`}
                alt={cause.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-ink dark:text-white">{cause.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{cause.description}</p>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs text-mist">
                    <span>Progress</span>
                    <span>{cause.progress}%</span>
                  </div>
                  <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className="h-full rounded-full bg-brand transition-all"
                      style={{ width: `${cause.progress}%` }}
                    />
                  </div>
                </div>
                <ButtonLink
                  href="#donate"
                  className="mt-4 w-full rounded bg-brand py-2.5 text-center text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
                >
                  Donate Now
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
