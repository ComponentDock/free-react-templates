import { Briefcase, GraduationCap, Users } from 'lucide-react'

const audiences = [
  {
    title: 'A Volunteer',
    icon: Users,
    blurb:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    title: 'A Volunteer',
    icon: Briefcase,
    blurb:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    title: 'A Volunteer',
    icon: GraduationCap,
    blurb:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.',
  },
] as const

export function WhoCanUse() {
  return (
    <section aria-label="Who can use" className="bg-mist py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-ink dark:text-gray-100">
            Who can use Driven?
          </h2>
          <p className="mt-5 leading-relaxed text-smoke dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="rounded-md bg-white p-8 text-center shadow-sm dark:bg-gray-900"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-400 dark:bg-primary-900/40">
                <audience.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold text-ink dark:text-gray-100">
                {audience.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-smoke dark:text-gray-400">
                {audience.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
