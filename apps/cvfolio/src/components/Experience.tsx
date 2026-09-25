const jobs = [
  {
    title: 'Senior Key Account Manager',
    company: 'TechCorp Inc.',
    date: '2020 — Present',
    description:
      'Leading a team of account managers and driving strategic partnerships with enterprise clients.',
    bullets: [
      'Managed a portfolio of 50+ enterprise clients',
      'Increased revenue by 35% year-over-year',
      'Led cross-functional teams on product launches',
      'Negotiated contracts worth over $5M annually',
    ],
  },
  {
    title: 'Key Account Manager',
    company: 'Digital Solutions Ltd.',
    date: '2016 — 2020',
    description: 'Managed key client relationships and delivered tailored digital solutions.',
    bullets: [
      'Grew client portfolio from 20 to 40 accounts',
      'Achieved 95% client retention rate',
      'Coordinated with design and engineering teams',
      'Presented quarterly business reviews to C-suite',
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="bg-experience-bg py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">
            PREVIOUS JOBS
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white">Work Experience</h2>
          <div className="mx-auto h-[10px] w-[50px] rounded-[5px] bg-white" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {jobs.map((job) => (
            <div key={job.title} className="rounded-lg bg-white/10 p-8 backdrop-blur-sm">
              <h3 className="mb-1 text-xl font-bold text-white">{job.title}</h3>
              <p className="mb-2 text-sm font-medium text-brand">{job.company}</p>
              <p className="mb-4 text-xs text-muted">{job.date}</p>
              <p className="mb-4 text-sm text-gray-300">{job.description}</p>
              <ul className="space-y-2">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm text-gray-300">
                    <span
                      className="mt-1 inline-block h-[16px] w-[16px] shrink-0 rounded-[10px] bg-brand shadow-[0_0_8px_rgba(255,168,4,0.5)]"
                      aria-hidden="true"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
