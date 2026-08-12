import { BadgeCheck, BarChart3, GraduationCap } from 'lucide-react'

const OUTCOMES = [
  {
    title: 'Certified learning',
    caption: 'Receive verifiable certificates for every course you complete.',
    icon: GraduationCap,
  },
  {
    title: 'Track your progress',
    caption: 'Follow your learning journey with clear milestones and insights.',
    icon: BarChart3,
  },
  {
    title: 'Recognized results',
    caption: 'Skills and certificates recognized by companies around the world.',
    icon: BadgeCheck,
  },
] as const

/* "Learner outcomes" recreated from the source's about-area3: a flipped
   split section — image on the left, heading + three bullet rows on the
   right (opposite of the "Learn new skills" section). */

export function LearnerOutcomes() {
  return (
    <section className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="order-2 lg:order-1">
          <img
            src="https://picsum.photos/seed/edify-outcomes/640/480"
            alt="Learner outcomes dashboard"
            className="w-full rounded-2xl object-cover"
            loading="lazy"
          />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="font-display text-3xl font-semibold leading-tight text-indigo dark:text-white">
            Learner outcomes on courses you will take
          </h2>
          <ul className="mt-8 space-y-6">
            {OUTCOMES.map((outcome) => (
              <li key={outcome.title} className="flex items-start gap-4">
                <outcome.icon className="mt-1 h-6 w-6 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-xl font-semibold text-indigo dark:text-white">
                    {outcome.title}
                  </h3>
                  <p className="mt-1 text-base text-muted">{outcome.caption}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
