import { BookOpen, HeartPulse, Recycle, TrendingUp } from 'lucide-react'

const programs = [
  {
    icon: BookOpen,
    title: 'Education for All',
    blurb: 'School supplies, teacher training and literacy programs for underserved classrooms.',
  },
  {
    icon: HeartPulse,
    title: 'Health & Wellness',
    blurb: 'Mobile clinics, vaccinations and maternal care in remote and rural regions.',
  },
  {
    icon: TrendingUp,
    title: 'Economic Empowerment',
    blurb: 'Micro-loans, job skills training and women-led small business support.',
  },
  {
    icon: Recycle,
    title: 'Environmental Action',
    blurb: 'Tree planting, clean energy and climate resilience for vulnerable communities.',
  },
]

export function Programs() {
  return (
    <section id="programs" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            How We Help
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Four focus areas guide every project we fund around the world.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <div
              key={program.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-800"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-400">
                <program.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
                {program.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {program.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
