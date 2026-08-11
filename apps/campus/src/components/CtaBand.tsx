import { ctaHeading, ctaLabel, seeMoreLabel } from '../data'
import { ButtonLink } from '@free-react-templates/ui'

export function CtaBand() {
  return (
    <section
      aria-label={ctaLabel}
      className="bg-gradient-to-r from-brand to-brand-2 px-4 py-[70px] text-center sm:px-8"
    >
      <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-snug text-white md:text-[34px]">
        {ctaHeading}
      </h2>
      <ButtonLink
        href="#"
        className="mt-8 rounded-none border-2 border-white px-10 text-sm font-semibold uppercase text-white transition-colors hover:bg-white hover:text-brand"
      >
        {seeMoreLabel}
      </ButtonLink>
    </section>
  )
}
