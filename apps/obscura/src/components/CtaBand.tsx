import { ctaBand, readMoreLabel } from '../data'
import { SiteButton } from './SiteButton'

/* Full-width photo CTA band (the reference's .banner-section): white
   uppercase heading with a thin white underline on the left, outline button
   aligned right on desktop. */
export function CtaBand() {
  return (
    <section className="relative overflow-hidden py-[111px]">
      <img src={ctaBand.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative mx-auto flex max-w-[1240px] flex-col items-center gap-10 px-6 lg:flex-row lg:justify-between">
        <h2 className="border-b border-white pb-2.5 text-center text-3xl font-medium uppercase tracking-[2px] text-white lg:text-left">
          {ctaBand.heading}
        </h2>
        <SiteButton href="#contact">{readMoreLabel}</SiteButton>
      </div>
    </section>
  )
}
