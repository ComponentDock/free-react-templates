import { SEASONAL } from '../content'
import { Reveal } from './Reveal'

/**
 * The page's only warm surface: an ember-ruled box inside the white ground.
 * The accent is deliberately confined here and to the flame in the logo.
 */
export function SeasonalBand() {
  return (
    <section id="seasonal" className="bg-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="rounded-2xl border-l-4 border-heat-400 bg-heat-50 p-6 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:p-8">
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-heat-700">
                {SEASONAL.eyebrow}
              </p>
              <h2 className="mt-2 text-xl font-medium tracking-tight text-ink-800 lg:text-2xl">
                {SEASONAL.heading}
              </h2>
              <p className="mt-3 max-w-2xl font-light text-ink-600">{SEASONAL.body}</p>
              <p className="mt-2 text-sm text-ink-400">{SEASONAL.footnote}</p>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-flex shrink-0 items-center justify-center rounded-lg bg-heat-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-heat-700 lg:mt-0"
            >
              {SEASONAL.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
