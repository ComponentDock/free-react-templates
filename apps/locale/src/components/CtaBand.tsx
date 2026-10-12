import { ButtonLink, cn } from '@free-react-templates/ui'
import { CTA, LISTINGS_ID } from '../lib/site'
import { containerClass, ctaSweepClass, sectionClass } from '../lib/styles'

/**
 * The find-more band: a hairline box holding the count line and the design's pill whose navy sweep
 * floods in from the left on hover (the label rides above the sweep layer).
 */
export function CtaBand() {
  return (
    <section className={cn(sectionClass, 'py-16')}>
      <div className={containerClass}>
        <div
          data-testid="cta-band"
          className="flex flex-col items-start justify-between gap-6 rounded-[5px] border border-edge px-10 py-9 md:flex-row md:items-center"
        >
          <div>
            <h2 className="text-2xl font-semibold text-navy">{CTA.heading}</h2>
            <p className="mt-1 text-lg font-light text-muted">{CTA.text}</p>
          </div>
          <ButtonLink
            href={`#${LISTINGS_ID}`}
            className="group relative h-auto overflow-hidden rounded-full px-9 py-4 font-display text-base"
          >
            <span aria-hidden="true" className={ctaSweepClass} />
            <span className="relative z-10">{CTA.action}</span>
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
