import { BadgeCheck, Gem, HeartHandshake, MonitorSmartphone } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const features = [
  {
    icon: Gem,
    title: 'Premium Quality',
    blurb:
      'Completely synthesize end-to-end models and emerging niches. Continually visualize long-term high-impact niches.',
  },
  {
    icon: HeartHandshake,
    title: 'Chat with love',
    blurb:
      'Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures.',
  },
  {
    icon: MonitorSmartphone,
    title: '3d Display',
    blurb:
      'Credibly streamline mission-critical value with multifunctional functionalities. Usefulful content for the app store experience.',
  },
  {
    icon: BadgeCheck,
    title: 'Rapidiously Monetize',
    blurb:
      'Rapidiously monetize market-driven web services. Completely synthesize end-to-end models and emerging niches.',
  },
] as const

export function Features() {
  return (
    <section
      id="features"
      aria-label="Features"
      className="bg-white py-16 sm:py-24 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal dark:text-cyan">
            Welcome to app features
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
            App Features
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400">
            Rapidiously monetize market-driven web services. Completely synthesize end-to-end models
            and emerging niches.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-gray-100 bg-white p-8 text-center transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              <feature.icon className="mx-auto h-10 w-10 text-teal" aria-hidden="true" />
              <h3 className="mt-5 font-display text-lg font-semibold text-ink dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {feature.blurb}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <ButtonLink
            href="#app"
            className="rounded-full bg-gradient-to-r from-aqua via-teal to-sky px-8 py-3 text-white hover:opacity-90"
          >
            Learn More
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
