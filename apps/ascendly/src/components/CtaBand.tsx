import { CTA_HEADLINE } from '../data'
import { CtaLink } from './CtaLink'

/* CTA band — the original `bg-tertiary` (#fff6da) full-width band with the
   centered headline and the underline-bar "View Our Services" link. */
export function CtaBand() {
  return (
    <section className="bg-cream py-28 dark:bg-ink">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl leading-snug font-black text-ink dark:text-white">
          {CTA_HEADLINE}
        </h2>
        <div className="mt-8">
          <CtaLink />
        </div>
      </div>
    </section>
  )
}
