import { Phone } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { contact } from '../content'

/** Closing band on the deeper clay: one white CTA, one outlined counter call. */
export function ClosingCta() {
  return (
    <section id="contact" className="bg-primary-700 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Need something priced?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-primary-100">
          Send a schedule or a photograph of the fitting and we will quote it the same day.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink
            href="#featured"
            className="bg-white px-8 py-4 text-base font-bold text-primary-700 hover:bg-primary-50"
          >
            Request a quote
          </ButtonLink>
          <ButtonLink
            href={contact.phoneHref}
            variant="outline"
            className="gap-2 border-2 border-white/40 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 dark:border-white/40 dark:text-white dark:hover:bg-white/10"
          >
            <Phone aria-hidden="true" className="h-5 w-5" />
            Call the counter
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
