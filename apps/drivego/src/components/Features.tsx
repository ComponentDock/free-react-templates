import { Home, Settings, Clock, ShieldCheck, Video, Key } from 'lucide-react'

const features = [
  {
    title: 'Lorem ipsum dolor',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    icon: Home,
  },
  {
    title: 'Lorem ipsum dolor',
    blurb:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    icon: Settings,
  },
  {
    title: 'Lorem ipsum dolor',
    blurb:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    icon: Clock,
  },
  {
    title: 'Lorem ipsum dolor',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    icon: ShieldCheck,
  },
  {
    title: 'Lorem ipsum dolor',
    blurb:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    icon: Video,
  },
  {
    title: 'Lorem ipsum dolor',
    blurb:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    icon: Key,
  },
] as const

export function Features() {
  return (
    <section className="bg-white py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-black text-ink dark:text-white">
          Features
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white">
                <feature.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-ink dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{feature.blurb}</p>
              <a
                href="#about"
                className="mt-3 inline-block text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
              >
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
