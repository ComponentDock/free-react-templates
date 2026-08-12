import { ButtonLink } from '@free-react-templates/ui'
import { CTA_TEXT, CTA_TITLE } from '../data'

/**
 * CTA banner — dark full-width strip (source `section.cta_area`, bg #000 +
 * cover image): "International Truck Freight" heading, supporting paragraph,
 * and a violet "view all" button.
 */
export function CtaBanner() {
  return (
    <section
      className="relative overflow-hidden bg-black py-28 text-center"
      aria-label="Call to action"
    >
      <img
        src="https://picsum.photos/seed/cargoly-cta/1920/700"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="relative z-10 mx-auto max-w-3xl px-4">
        <h2 className="font-display text-4xl font-bold text-white">{CTA_TITLE}</h2>
        <p className="mt-4 text-lg text-white/70">{CTA_TEXT}</p>
        <ButtonLink
          href="#"
          className="mt-8 rounded-[4px] bg-brand px-12 py-4 text-sm font-extrabold uppercase text-white hover:bg-brand-dark"
        >
          view all
        </ButtonLink>
      </div>
    </section>
  )
}
