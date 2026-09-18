import { ButtonLink } from '@free-react-templates/ui'

export function ContactCta() {
  return (
    <section aria-label="Contact call to action" className="bg-navy-deep py-16 sm:py-20">
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-5xl font-bold uppercase tracking-wide text-white/5 sm:text-7xl select-none">
          Let's chat
        </span>
        <h2 className="relative font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
          Let's talk with us
        </h2>
        <p className="relative mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/70">
          Heaven fruitful doesn't over lesser days appear creeping seasons so behold bearing days
          open. Heaven fruitful third.
        </p>
        <div className="relative mt-8">
          <ButtonLink
            href="#contact"
            className="inline-flex rounded bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-navy transition-colors hover:bg-gray-100"
          >
            Contact Us
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
