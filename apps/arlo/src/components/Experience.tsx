const roles = [
  {
    title: 'Senior Developer',
    company: 'TechCorp',
    period: '2022 — Present',
    blurb: 'Leading the platform team, architecting micro-frontends, and mentoring engineers.',
  },
  {
    title: 'Full-stack Developer',
    company: 'Innovate Labs',
    period: '2019 — 2022',
    blurb: 'Shipped customer-facing products end to end across web and mobile.',
  },
  {
    title: 'Frontend Developer',
    company: 'Pixelworks',
    period: '2017 — 2019',
    blurb: 'Built pixel-perfect interfaces and design systems for agency clients.',
  },
  {
    title: 'Junior Developer',
    company: 'Startup Hub',
    period: '2015 — 2017',
    blurb: 'Learned the craft shipping early-stage features with a small team.',
  },
]

export function Experience() {
  return (
    <section id="experience" className="bg-gray-50 py-20 dark:bg-gray-900 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Career Journey
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            A timeline of my professional growth and the companies I have contributed to.
          </p>
        </div>

        <ol className="mt-14 space-y-8 border-l-2 border-gray-200 pl-8 dark:border-gray-800">
          {roles.map((role) => (
            <li key={role.title} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-primary-500 bg-white dark:bg-gray-950"
              />
              <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
                {role.period} · {role.company}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                {role.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {role.blurb}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
