import { Award, BookMarked, Play, Rocket, Target } from 'lucide-react'

const FEATURES = [
  {
    title: 'Courses for every step',
    caption: 'Structured learning paths for beginners, professionals, and everyone in between.',
    icon: BookMarked,
  },
  {
    title: 'Learn from the best',
    caption: 'Video lessons and live sessions from instructors who work in the industry.',
    icon: Award,
  },
  {
    title: 'Achieve your goals',
    caption: 'Earn certificates that showcase your new skills to employers and clients.',
    icon: Target,
  },
] as const

/* "Learn new skills" split section recreated from the source's
   about-area1: a rounded gradient icon, heading, three bullet rows on the
   left, and an image with a circular orange play button on the right. */

export function LearnNewSkills() {
  return (
    <section id="about" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="flex h-20 w-20 items-center justify-center rounded-[50px] bg-gradient-to-r from-[#eae2fe] to-[#ec7dfe]">
            <Rocket className="h-9 w-9 text-indigo" aria-hidden="true" />
          </div>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-indigo dark:text-white">
            Learn new skills online with top educators
          </h2>
          <ul className="mt-8 space-y-6">
            {FEATURES.map((feature) => (
              <li key={feature.title} className="flex items-start gap-4">
                <feature.icon className="mt-1 h-6 w-6 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-xl font-semibold text-indigo dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-base text-muted">{feature.caption}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <img
            src="https://picsum.photos/seed/edify-educator/640/480"
            alt="Educator teaching a class online"
            className="w-full rounded-2xl object-cover"
          />
          <a
            href="#about"
            aria-label="Watch how learning works"
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-colors hover:bg-brand-deep"
          >
            <Play className="ml-0.5 h-7 w-7 fill-current" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
