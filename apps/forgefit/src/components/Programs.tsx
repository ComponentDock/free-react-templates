import { Dumbbell, Flame, Flower2, Shield, Target, UserRound } from 'lucide-react'

const programs = [
  {
    icon: Dumbbell,
    title: 'Strength Training',
    blurb:
      'Build muscle and increase power with structured progressive overload programs and expert guidance.',
  },
  {
    icon: Flame,
    title: 'HIIT',
    blurb:
      'High-intensity interval training for maximum calorie burn. Short, intense sessions that deliver real results.',
  },
  {
    icon: Flower2,
    title: 'Yoga & Flexibility',
    blurb:
      'Find mind-body balance with guided yoga sessions. Improve flexibility, reduce stress, and aid recovery.',
  },
  {
    icon: Shield,
    title: 'Boxing & MMA',
    blurb:
      'Learn striking fundamentals and self-defense techniques. Build confidence while getting an incredible workout.',
  },
  {
    icon: Target,
    title: 'CrossFit',
    blurb:
      'Functional fitness at high intensity. Challenge yourself with varied workouts that build all-round athleticism.',
  },
  {
    icon: UserRound,
    title: 'Personal Training',
    blurb:
      'One-on-one customized coaching tailored to your goals. Get a workout plan and nutrition guidance built for you.',
  },
]

export function Programs() {
  return (
    <section id="programs" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-center text-sm font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
          Programs
        </p>
        <h2 className="font-display mt-3 text-center text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
          Training Programs for Every Goal
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600 dark:text-gray-300">
          Whether you want to build muscle, lose weight, or improve flexibility, we have a program
          designed for you.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map(({ icon: Icon, title, blurb }) => (
            <article
              key={title}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="font-display mt-6 text-xl font-bold text-gray-900 dark:text-white">
                {title}
              </h3>
              <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-300">{blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
