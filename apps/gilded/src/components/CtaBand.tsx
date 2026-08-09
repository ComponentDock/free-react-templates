import { ButtonLink } from '@free-react-templates/ui'

export function CtaBand() {
  return (
    <section aria-label="Book now" className="bg-paper py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          Make Gilded Your Number One Choice
        </h2>
        <p className="mt-4 leading-relaxed text-mist dark:text-gray-400">
          Walk in for a cut, a color, or a complete transformation — our stylists are ready to
          welcome you to the house of hair salon & spa.
        </p>
        <ButtonLink
          href="#contact"
          className="mt-8 inline-flex rounded-full bg-brand px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-dark"
        >
          Book Now
        </ButtonLink>
      </div>
    </section>
  )
}
