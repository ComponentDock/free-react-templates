import { ButtonLink } from '@free-react-templates/ui'
import { cta } from '../data'

/* Teal call-to-action band: heading left, pill link right. */
export function CallToAction() {
  return (
    <section id="products" className="bg-brand py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 lg:flex-row lg:justify-between">
        <h3 className="m-0 text-center font-display text-2xl font-bold text-white lg:text-left">
          {cta.heading}
        </h3>
        <ButtonLink
          href="#contact"
          variant="outline"
          className="rounded-full border-white/70 px-8 py-3 text-xs uppercase tracking-[0.1rem] text-white hover:bg-white/10 hover:text-white"
        >
          {cta.label}
        </ButtonLink>
      </div>
    </section>
  )
}
