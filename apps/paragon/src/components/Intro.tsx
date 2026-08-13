import {
  EXPERIENCE_LABEL,
  EXPERIENCE_TITLE,
  EXPERIENCE_YEARS,
  INTRO_HEADING,
  INTRO_LEAD,
  INTRO_LINK,
} from '../data'
import { MoreLink } from './MoreLink'

/* div.site-section — two-column intro. Left: uppercase 20px bold mission
   heading + paragraph + "More About Us" arrow link. Right:
   .year-experience-99301 — 4px solid #207561 border, white bg, offset
   green-tinted corner block (top/left -31px, rgba(32,117,97,.1)),
   "The Best In Interior Design" + "YEARS OF EXPERIENCE" label + huge "75"
   with a translucent green circle behind. */
export function Intro() {
  return (
    <section id="about" aria-label="About" className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 md:grid-cols-[3fr_2fr]">
        <div>
          <h2 className="text-[20px] leading-snug font-bold text-ink uppercase">{INTRO_HEADING}</h2>
          <p className="mt-5 mb-8 max-w-xl leading-relaxed text-ink/70">{INTRO_LEAD}</p>
          <MoreLink href="#services">{INTRO_LINK}</MoreLink>
        </div>

        <div className="relative mt-8 md:mt-0">
          {/* Offset green-tinted corner block (the source's :before). */}
          <div className="absolute -top-8 -left-8 h-full w-full bg-brand/10" aria-hidden="true" />
          <div className="relative border-4 border-brand bg-white p-8 md:p-10">
            <h3 className="text-[20px] leading-snug font-bold text-ink uppercase">
              {EXPERIENCE_TITLE}
            </h3>
            <p className="mt-3 text-[14px] font-bold tracking-wide text-mist uppercase">
              {EXPERIENCE_LABEL}
            </p>
            <div className="relative mt-4 inline-block">
              <span
                className="absolute top-1/2 left-1/2 h-[70px] w-[70px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/50"
                aria-hidden="true"
              />
              <span className="relative font-sans text-5xl font-bold text-ink">
                {EXPERIENCE_YEARS}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
