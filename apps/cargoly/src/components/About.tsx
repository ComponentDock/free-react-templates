import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { ABOUT_EYEBROW, ABOUT_PARAGRAPHS, ABOUT_TITLE } from '../data'

/**
 * About — two-column section (source `section.about_part`): left cargo image
 * with an overlapping lavender accent panel, right eyebrow label + "Cargoly
 * Best" heading + two paragraphs + violet "learn more" button. Pulled up with
 * a negative margin so it overlaps the hero's lower area like the original.
 */
export function About() {
  return (
    <section className="relative z-10 -mt-44 bg-white pb-20 pt-24 lg:pt-32" aria-label="About">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-6">
        <div className="relative">
          <div
            className="absolute -left-4 -top-4 h-28 w-28 border-4 border-lavender"
            aria-hidden="true"
          />
          <img
            src="https://picsum.photos/seed/cargoly-about/600/450"
            alt="Cargoly warehouse operations"
            className="relative h-[420px] w-full object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">{ABOUT_EYEBROW}</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink">{ABOUT_TITLE}</h2>
          {ABOUT_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph} className="mt-5 leading-relaxed text-body">
              {paragraph}
            </p>
          ))}
          <ButtonLink
            href="#"
            className="mt-8 rounded-[4px] bg-brand px-10 py-4 text-sm font-extrabold uppercase text-white hover:bg-brand-dark"
          >
            learn more
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
