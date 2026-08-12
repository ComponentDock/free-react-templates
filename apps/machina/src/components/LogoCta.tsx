import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { BRAND_NAME, LOGO_CTA_BUTTON_LABEL } from '../data'

/**
 * LogoCta — second CTA bar (source `section.wantToWork-area` #2): logo mark
 * on the left and a double button group on the right — a solid red "Learn
 * More" plus an outline "Learn More" with red text.
 */
export function LogoCta() {
  return (
    <section className="bg-foam py-14" aria-label="Call to action">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 md:flex-row lg:px-6">
        <a href="#home" aria-label={BRAND_NAME} className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center bg-brand font-display text-xl font-black text-white">
            M
          </span>
          <span className="font-display text-2xl font-bold text-ink">{BRAND_NAME}</span>
        </a>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <ButtonLink
            href="#contact"
            variant="primary"
            className="h-auto rounded-none px-14 py-4 text-sm font-bold uppercase"
          >
            {LOGO_CTA_BUTTON_LABEL}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink
            href="#contact"
            variant="outline"
            className="h-auto rounded-none border-brand/40 px-14 py-4 text-sm font-bold uppercase text-brand hover:bg-brand hover:border-brand hover:text-white"
          >
            {LOGO_CTA_BUTTON_LABEL}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
