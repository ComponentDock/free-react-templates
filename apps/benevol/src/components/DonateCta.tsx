import { ButtonLink } from '@free-react-templates/ui'
import { DONATE_HEADLINE, DONATE_LABEL } from '../data'

/**
 * DonateCta — gold-overlay background section with a white headline and
 * a block-level orange "Donate Now" button.
 */
export function DonateCta() {
  return (
    <section
      id="donate-section"
      aria-label="Make a donation"
      className="relative bg-cover bg-fixed bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/benevol-donate-bg/1600/900')" }}
    >
      <div className="absolute inset-0 bg-gold/95" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl uppercase leading-tight tracking-[0.1rem] text-white md:text-5xl">
            {DONATE_HEADLINE}
          </h2>
          <ButtonLink
            href="#contact-section"
            className="mt-8 w-full max-w-xs rounded px-6 py-4 text-base uppercase tracking-wider"
          >
            {DONATE_LABEL}
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
