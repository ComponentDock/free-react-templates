import { GraduationCap, HeartPulse, Leaf } from 'lucide-react'

const causes = [
  {
    icon: GraduationCap,
    title: 'Education',
    blurb:
      'Building schools, training teachers and providing scholarships so every child can learn.',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    blurb: 'Bringing clinics, clean water and preventive care to communities that need it most.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    blurb: 'Supporting farmers and local enterprises with practices that protect the planet.',
  },
]

export function Mission() {
  return (
    <section id="mission" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
          Building a Better World Together
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600 dark:text-gray-300">
          Our mission is simple: give people the tools to lift themselves and their communities out
          of poverty.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {causes.map((cause) => (
            <div
              key={cause.title}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                <cause.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-white">
                {cause.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{cause.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
