import { Award, Headset, Star, ThumbsUp, Users, Wrench } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Expert Technicians',
    blurb:
      'Computer users and programmers have become so accustomed to using Windows, even for the changing.',
  },
  {
    icon: Wrench,
    title: 'Professional Service',
    blurb:
      'Finding the perfect learning tool for Flash is a daunting task to any novice web developer. One can find help.',
  },
  {
    icon: Headset,
    title: 'Great Support',
    blurb:
      'While most people enjoy casino ambling, sports betting, lottery and bingo playing for the fun and excitement.',
  },
  {
    icon: Star,
    title: 'Technical Skills',
    blurb:
      '“The moment you think of buying a Web Hosting Plan, you know one thing – So many choices, which one to choose.',
  },
  {
    icon: ThumbsUp,
    title: 'Highly Recomended',
    blurb:
      'Many conventional colleges and universities are now offering online DVD repair courses, which are the exact same.',
  },
  {
    icon: Award,
    title: 'Positive Reviews',
    blurb:
      'So you have your new digital camera and clicking away to glory anything and everything in sight. Now you want.',
  },
] as const

export function Features() {
  return (
    <section id="about" className="bg-paper py-16 dark:bg-gray-900 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[3px] text-brand">Why choose us</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Some Features that Made us Unique
          </h2>
          <p className="mt-4 leading-relaxed text-ink/60 dark:text-white/60">
            Who are in extremely love with eco friendly system.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-lg bg-white p-6 dark:bg-gray-950">
              <feature.icon className="h-9 w-9 text-brand" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-bold text-ink dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60 dark:text-white/60">
                {feature.blurb}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
