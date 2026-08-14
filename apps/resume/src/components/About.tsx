import { ArrowRight } from 'lucide-react'
import { about } from '../data'

/** Two-column about section: passion heading + two paragraphs left, query
 *  blurb with an underlined email link and arrow right. */
export function About() {
  return (
    <section id="about" aria-label="About" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <h2 className="font-serif text-3xl font-bold leading-snug text-ink lg:text-[30px]">
            {about.heading}
          </h2>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-5 text-base leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>
        <div>
          <h3 className="font-serif text-3xl font-bold leading-snug text-ink lg:text-[30px]">
            {about.queryHeading}
          </h3>
          <p className="mt-5 text-base leading-relaxed text-muted">{about.queryText}</p>
          <a
            href={`mailto:${about.email}`}
            className="mt-6 inline-flex items-center gap-2 font-serif text-3xl font-bold text-ink underline decoration-brand/40 decoration-2 underline-offset-8 transition-colors hover:text-brand"
          >
            {about.emailLabel}
            <ArrowRight className="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
