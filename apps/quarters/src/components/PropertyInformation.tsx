import { ButtonLink } from '@free-react-templates/ui'
import {
  PROPERTY_BLURB,
  PROPERTY_CTA,
  PROPERTY_DETAILS,
  PROPERTY_HEADING,
  PROPERTY_IMAGE,
} from '../data'

/* .featured-property-half — white split panel (photo left, spec list right)
   that overlaps the hero bottom by 100px (margin-top:-100px) with a soft
   shadow. Values in black, labels #777, 10px list spacing. */
export function PropertyInformation() {
  return (
    <section
      id="about"
      aria-label="Property information"
      className="relative z-10 -mt-[100px] bg-white shadow-[0_0_20px_-5px_rgba(0,0,0,0.1)] md:flex"
    >
      <img
        src={PROPERTY_IMAGE}
        alt=""
        className="h-[280px] w-full object-cover md:h-auto md:w-1/2"
      />
      <div className="w-full px-6 py-10 md:w-1/2 md:p-[50px] lg:p-[100px]">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-[0.2em] text-black lg:text-[2rem]">
          {PROPERTY_HEADING}
        </h2>
        <p className="mb-5 mt-4 leading-relaxed text-ink">{PROPERTY_BLURB}</p>
        <ul className="mb-5 space-y-[10px] text-muted">
          {PROPERTY_DETAILS.map((row) => (
            <li key={row.label}>
              {row.label}: <strong className="font-bold text-black">{row.value}</strong>
            </li>
          ))}
        </ul>
        <ButtonLink
          href="#apartments"
          className="h-auto rounded-none bg-brand px-4 py-3 text-base font-normal uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
        >
          {PROPERTY_CTA}
        </ButtonLink>
      </div>
    </section>
  )
}
