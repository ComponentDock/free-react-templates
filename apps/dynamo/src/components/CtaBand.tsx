import { ButtonLink } from '@free-react-templates/ui'
import { ctaHeading } from '../data'

export function CtaBand() {
  return (
    <section data-section="cta" className="bg-primary-600 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 lg:flex-row lg:justify-between">
        <h2 className="text-center text-[37px] font-light leading-tight text-white lg:text-left">
          {ctaHeading}
        </h2>
        <ButtonLink
          href="#contact"
          className="min-w-[186px] rounded-none bg-navy-900 px-[47px] py-6 text-sm font-semibold uppercase tracking-wide text-white hover:bg-navy-800"
        >
          contact us
        </ButtonLink>
      </div>
    </section>
  )
}
