import { ArrowRight, Compass, FlaskConical, Lightbulb } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const rows = [
  {
    title: 'Real template creation',
    image: 'https://picsum.photos/seed/blueprint-mobile-1/420/560',
    alt: 'Template builder on a phone screen',
    features: [
      {
        blurb:
          'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
        icon: Lightbulb,
      },
      {
        blurb:
          'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name.',
        icon: Compass,
      },
      {
        blurb:
          'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
        icon: FlaskConical,
      },
    ],
  },
  {
    title: 'Finish template creation',
    image: 'https://picsum.photos/seed/blueprint-mobile-2/420/560',
    alt: 'Finished template preview on a phone screen',
    features: [
      {
        blurb:
          'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
        icon: Lightbulb,
      },
      {
        blurb:
          'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name.',
        icon: Compass,
      },
      {
        blurb:
          'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
        icon: FlaskConical,
      },
    ],
  },
] as const

export function Steps() {
  return (
    <section id="services" aria-label="Steps" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl space-y-24 px-4 sm:px-6">
        {rows.map((row, index) => (
          <div
            key={row.title}
            className={`grid items-center gap-12 lg:grid-cols-2 ${
              index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
            }`}
          >
            <img
              src={row.image}
              alt={row.alt}
              className="h-auto w-full max-w-sm justify-self-center rounded-xl shadow-xl"
              loading="lazy"
            />
            <div>
              <h2 className="font-display text-3xl font-semibold text-ink dark:text-gray-100">
                {row.title}
              </h2>
              <ul className="mt-8 space-y-6">
                {row.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-400 dark:bg-primary-900/40 dark:text-primary-300">
                      <feature.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <p className="text-sm leading-relaxed text-smoke dark:text-gray-400">
                      {feature.blurb}
                    </p>
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#works-band"
                className="mt-9 inline-flex items-center gap-2 rounded-full border border-primary-400 px-8 py-3 font-semibold text-primary-400 transition-colors hover:bg-primary-400 hover:text-white"
              >
                Start collaborating
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
