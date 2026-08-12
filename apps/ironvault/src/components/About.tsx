import { ButtonLink } from '@free-react-templates/ui'
import { ABOUT } from '../data'
import { SectionHeading } from './SectionHeading'

/**
 * About — split section: trainer photo left, "about me" heading with two
 * bio paragraphs, a handwritten-style signature line and an outline
 * "more about me" button right.
 */
export function About() {
  return (
    <section id="about" className="pb-16 md:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <img src={ABOUT.image} alt="Ironvault trainer photo" className="w-full object-cover" />
        </div>
        <div>
          <SectionHeading title={ABOUT.heading} />
          {ABOUT.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-base font-light text-body">
              {paragraph}
            </p>
          ))}
          <p className="mt-6 font-display text-3xl text-ink/70">{ABOUT.signature}</p>
          <div className="mt-8">
            <ButtonLink
              href="#contact"
              variant="outline"
              className="rounded-none border-line px-10 py-4 text-sm font-medium uppercase tracking-[1.5px] hover:border-brand hover:bg-brand hover:text-white"
            >
              {ABOUT.cta}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
