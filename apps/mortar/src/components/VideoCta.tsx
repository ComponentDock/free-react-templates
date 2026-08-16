import { Check, Play } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { videoCta } from '../data'

export function VideoCta() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="flex justify-center">
          <button
            type="button"
            aria-label={videoCta.playLabel}
            className="flex h-20 w-20 items-center justify-center rounded-full bg-brand text-charcoal transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <Play className="h-8 w-8 fill-current" aria-hidden="true" />
          </button>
        </div>
        <div>
          <h2 className="text-3xl font-medium leading-snug text-ink md:text-4xl">
            {videoCta.heading}
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">{videoCta.paragraph}</p>
          <ul className="mt-6 space-y-3">
            {videoCta.bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-3 text-charcoal">
                <Check className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <ButtonLink
            href="#about"
            className="mt-8 rounded-[4px] bg-brand px-8 py-4 text-base font-medium text-charcoal hover:border hover:border-brand hover:bg-transparent hover:text-brand"
          >
            {videoCta.ctaLabel}
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
