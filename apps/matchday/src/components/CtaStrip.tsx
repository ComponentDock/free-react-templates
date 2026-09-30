import { TemplateButton } from './TemplateButton'

/** Join-club CTA strip: brand-orange band, white hairline borders, navy
 *  uppercase span in the headline, navy button with white fill on hover. */
export function CtaStrip() {
  return (
    <section className="border-y border-white bg-brand py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 lg:flex-row lg:px-8">
        <p className="text-center text-2xl font-bold uppercase leading-tight text-white lg:text-left lg:text-[42px]">
          Would you like to join our{' '}
          <span className="font-semibold uppercase text-navy">football club?</span>
        </p>
        <TemplateButton href="#contact" variant="navy">
          See More Info
        </TemplateButton>
      </div>
    </section>
  )
}
