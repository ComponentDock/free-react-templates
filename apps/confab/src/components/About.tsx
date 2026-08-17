import { ABOUT } from '../data'
import { SectionTitle } from './SectionTitle'

/* About — heading, bold tagline and two paragraphs on a light surface. */
export function About() {
  return (
    <section aria-label="About" className="bg-fog py-[120px]">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle heading={ABOUT.heading} className="mb-8" />
        <p className="mb-6 text-center font-display text-2xl font-medium text-night sm:text-3xl">
          {ABOUT.tagline}
        </p>
        {ABOUT.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="mb-4 text-center leading-[1.8] text-mist">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}
