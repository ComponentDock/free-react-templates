import { Dumbbell, HeartPulse, Flame, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface GymClass {
  title: string
  copy: string
  icon: LucideIcon
  image: string
}

const classes: GymClass[] = [
  {
    title: 'Body Building',
    copy: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    icon: Dumbbell,
    image: 'https://picsum.photos/seed/pump-class-1/400/300',
  },
  {
    title: 'Aerobic Classes',
    copy: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    icon: HeartPulse,
    image: 'https://picsum.photos/seed/pump-class-2/400/300',
  },
  {
    title: 'Weight Lifting',
    copy: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    icon: Flame,
    image: 'https://picsum.photos/seed/pump-class-3/400/300',
  },
  {
    title: 'Yoga Classes',
    copy: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    icon: Sparkles,
    image: 'https://picsum.photos/seed/pump-class-4/400/300',
  },
] as const

export function Classes() {
  return (
    <section id="schedule" className="bg-white py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-brand">
            Gym Classes
          </p>
          <h2 className="font-display text-4xl font-black uppercase text-ink dark:text-white">
            Workout Classes
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {classes.map((gymClass) => (
            <article
              key={gymClass.title}
              className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-lg dark:bg-gray-800"
            >
              <div className="relative">
                <img
                  src={gymClass.image}
                  alt={gymClass.title}
                  className="h-48 w-full object-cover"
                />
                <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded bg-gradient-to-br from-brand to-brand-orange text-white">
                  <gymClass.icon className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold uppercase text-ink dark:text-white">
                  {gymClass.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-400">
                  {gymClass.copy}
                </p>
                <a
                  href="#schedule"
                  className="mt-4 inline-block text-sm font-bold uppercase tracking-wide text-brand transition-colors hover:text-brand-orange"
                >
                  Learn More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
