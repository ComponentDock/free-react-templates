import { ButtonLink } from '@free-react-templates/ui'

/**
 * The solid brand-blue call-to-action band: centred white copy over the
 * reference's 120 px rhythm with a white pill button that inverts on hover.
 */
export function CallActionBand() {
  return (
    <section className="bg-brand py-[120px]">
      <div className="mx-auto max-w-[1140px] px-5 text-center">
        <div className="mx-auto lg:w-9/12">
          <h1 className="font-heading text-[36px] font-semibold text-white">
            Looking for a Custom Solution?
          </h1>
          <p className="py-[20px] text-white">
            Tell us what your team runs today and we will sketch an architecture, a migration window
            and a price before you commit to anything.
          </p>
          <ButtonLink
            href="#contact"
            className="inline-flex h-[42px] items-center rounded-[25px] border border-transparent bg-surface px-[30px] text-[12px] font-medium text-ink uppercase transition-colors hover:border-white hover:bg-transparent hover:text-white"
          >
            Request Free Consultation
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
