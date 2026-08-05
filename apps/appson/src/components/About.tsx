import { Check } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const features = ['Fully Responsive Design', 'Android Platform', 'Strategy Solutions'] as const

export function About() {
  return (
    <section id="about" className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="flex justify-center">
          <img
            src="https://picsum.photos/seed/appson-about/500/900"
            alt="Appson app screen"
            className="h-96 w-auto rounded-[2.5rem] border border-gray-100 object-cover shadow-xl dark:border-gray-800"
          />
        </div>

        <div>
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Work the way you live
          </h2>
          <p className="mt-6 leading-relaxed text-muted dark:text-gray-400">
            Appson is built for the way you actually work — every screen, flow, and interaction is
            designed to fit naturally into your day.
          </p>
          <p className="mt-4 leading-relaxed text-muted dark:text-gray-400">
            From the first launch to every update after, Appson keeps things simple, fast, and
            reliable so you can focus on what matters.
          </p>

          <ul className="mt-8 space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-ink dark:text-white">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-400">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <ButtonLink href="#download" className="mt-10 rounded-full px-10">
            Download Now
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
