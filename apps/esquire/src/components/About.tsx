import { Scale } from 'lucide-react'
import {
  ABOUT_LEFT_COPY,
  ABOUT_LEFT_IMAGE,
  ABOUT_LEFT_TITLE,
  ABOUT_RIGHT_COPY,
  ABOUT_RIGHT_IMAGE,
  ABOUT_RIGHT_TITLE,
  ABOUT_STAT,
  CASE_COUNTERS,
} from '../data'

/**
 * About — cream #FFFDF8 two-column section (source `.about_area`): left
 * column with a photo, the serif 36px "Finest And Strongest..." heading, an
 * ipsum paragraph and a signature line; right column with a photo whose
 * hover overlay reveals the gold "93% Success Case" stat, the "About Esquire
 * Law" heading, an ipsum paragraph and two bronze-gold #CEA159 counters
 * (879 Total Cases / 787 Case Won). A faint balance-scale watermark floats
 * behind the block.
 */
export function About() {
  return (
    <section id="about" className="relative bg-warm py-24 lg:py-[120px]">
      <Scale
        className="pointer-events-none absolute top-8 left-8 hidden h-64 w-64 text-ink opacity-[0.04] lg:block"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-7xl gap-16 px-4 lg:grid-cols-2 lg:px-8">
        <div className="text-center">
          <img
            src={ABOUT_LEFT_IMAGE}
            alt="Law firm office"
            className="mx-auto aspect-square w-full max-w-[520px] object-cover"
          />
          <h3 className="mx-auto mt-7 mb-3 max-w-md font-heading text-3xl leading-[48px] font-normal text-ink lg:text-[36px]">
            {ABOUT_LEFT_TITLE}
          </h3>
          <p className="mx-auto max-w-md text-base leading-relaxed text-section-sub">
            {ABOUT_LEFT_COPY}
          </p>
          <p className="mt-6 font-script text-3xl text-ink italic">Esquire &amp; Partners</p>
        </div>

        <div className="text-center">
          <div className="group relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden">
            <img
              src={ABOUT_RIGHT_IMAGE}
              alt="Attorney at work"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[rgba(31,31,31,0.9)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="font-body text-[70px] leading-[70px] font-medium text-paper">
                {ABOUT_STAT.value}
              </p>
              <span className="text-base text-paper">{ABOUT_STAT.label}</span>
            </div>
          </div>
          <h3 className="mt-7 mb-3 font-heading text-3xl leading-10 font-normal text-ink lg:text-[32px]">
            {ABOUT_RIGHT_TITLE}
          </h3>
          <p className="mx-auto max-w-md text-base leading-relaxed text-section-sub">
            {ABOUT_RIGHT_COPY}
          </p>
          <div className="mt-6 flex items-start justify-center gap-12 lg:gap-14">
            {CASE_COUNTERS.map((counter) => (
              <div key={counter.label}>
                <p className="font-body text-4xl font-medium text-gold-deep">{counter.value}</p>
                <p className="mt-1 text-sm text-placeholder">{counter.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
