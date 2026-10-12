import { ButtonLink } from '@free-react-templates/ui'

/**
 * The quiet help band: a heading with a short line of copy on the left and a
 * filled plus an outline CTA on the right, over the soft `#F8FCFF` surface.
 */
export function HelpCta() {
  return (
    <section id="help" aria-label="Need help" className="bg-surface-soft">
      <div className="mx-auto max-w-[1140px] px-5 py-20 sm:px-[30px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-heading text-[31px] font-bold text-ink md:text-[35px]">
              Need a hand getting started?
            </h2>
            <p className="mt-3 text-lg text-copy">
              Tell us what you are launching and we will size the plan with you — no sales script.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <ButtonLink
              href="#contact"
              className="rounded-full px-11 py-3.5 text-sm font-semibold sm:mr-5"
            >
              Contact Us
            </ButtonLink>
            <ButtonLink
              href="#faq"
              variant="outline"
              className="rounded-full border-coral px-12 py-3.5 text-coral transition-colors hover:bg-coral hover:text-white"
            >
              Live Chat
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
