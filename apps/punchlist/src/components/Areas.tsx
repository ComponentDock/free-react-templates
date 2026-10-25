import { AREAS, AREAS_COPY } from '../content'
import { BandHeading, Container } from './ui'

/**
 * The page's one dark band: six coverage areas as translucent cards with a
 * response chip, a mono postcode register and the travel note where there is
 * one. The disclaimer below is deliberate — the site says what it is not.
 */
export function Areas() {
  return (
    <section id="areas" className="section bg-accent-900">
      <Container>
        <div className="mx-auto max-w-6xl">
          <BandHeading
            pill={AREAS_COPY.pill}
            tone="solid"
            heading={AREAS_COPY.heading}
            lede={AREAS_COPY.lede}
            onDark
          />

          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AREAS.map((area) => (
              <li
                key={area.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors hover:border-primary-400/60 hover:bg-white/10"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-bold leading-6 text-white">{area.name}</h3>
                  <span className="shrink-0 rounded-full bg-primary-500/20 px-2.5 py-1 text-xs font-semibold leading-4 text-primary-300">
                    {area.response}
                  </span>
                </div>
                <p className="mt-2 font-mono text-xs leading-5 text-accent-300">{area.postcodes}</p>
                {area.note ? (
                  <p className="mt-3 border-t border-white/10 pt-2 text-xs leading-5 text-accent-300">
                    {area.note}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-3xl text-sm leading-6 text-accent-300">{AREAS_COPY.note}</p>
        </div>
      </Container>
    </section>
  )
}
