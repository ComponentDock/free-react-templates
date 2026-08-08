import { Award } from 'lucide-react'

const awards = [
  { title: 'Best Residential Design', year: '2025', org: 'Miami Design Guild' },
  { title: 'Hospitality Design Award', year: '2025', org: 'Interior Innovation Council' },
  { title: 'Innovation in Commercial Design', year: '2024', org: 'Design Excellence Forum' },
  {
    title: 'Emerging Studio of the Year',
    year: '2024',
    org: 'American Society of Interior Designers',
  },
  { title: 'Sustainable Design Leader', year: '2023', org: 'Green Building Alliance' },
  { title: 'Top 50 Interior Designers', year: '2023', org: 'Design Times Magazine' },
] as const

export function Awards() {
  return (
    <section id="awards" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Recognition
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
            Awards & Accolades
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Honors our studio has earned for design excellence and craft.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((award) => (
            <article
              key={award.title}
              className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900"
            >
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-400">
                <Award className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{award.title}</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {award.org} · {award.year}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
