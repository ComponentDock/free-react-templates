import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { about } from '../data'

/* About (source: section.about-area1.about-area2 — photo left, caption
   right with "About Us" eyebrow, heading, paragraph and pink pill CTA). */
export function About() {
  return (
    <section id="about" className="py-[120px]">
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-[15px] lg:grid-cols-2">
        <div className="overflow-hidden rounded-[4px]">
          <img
            src="https://picsum.photos/id/1/600/500"
            alt="A professional working on a laptop"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <span className="mb-[18px] block text-[13px] font-medium uppercase tracking-[0.1em] text-brand">
            {about.kicker}
          </span>
          <h2 className="font-heading text-[36px] font-bold leading-snug text-navy lg:text-[40px]">
            {about.heading}
          </h2>
          <p className="mt-5 text-base leading-[1.8] text-copy">{about.paragraph}</p>
          <ButtonLink
            href="#services"
            className="group mt-9 inline-flex rounded-full bg-gradient-to-b from-brand to-brand-dark px-9 py-[11px] text-lg font-medium text-white transition-all hover:from-brand-dark hover:to-brand"
          >
            {about.ctaLabel}
            <ArrowRight
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
