import { Check } from 'lucide-react'
import { ABOUT_CHECKS, ABOUT_IMAGE } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
        <div className="md:order-1">
          <SectionHeading title="About Us" align="left" tone="primary" blurb={null} />
          <p className="mt-6">
            Cargolane is a full-service logistics partner built around one idea: freight should be
            predictable. We plan every lane carefully, price it transparently, and keep you informed
            from pickup to final handoff.
          </p>
          <p className="mt-4">
            Our network spans ocean, air, and road carriers on six continents, coordinated by a team
            that treats your cargo like its own. Whether you ship weekly pallets or seasonal
            containers, the same standards apply.
          </p>
          <ul className="mt-6 space-y-3">
            {ABOUT_CHECKS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-check" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-first md:order-2">
          <img src={ABOUT_IMAGE.image} alt={ABOUT_IMAGE.alt} className="w-full object-cover" />
        </div>
      </div>
    </section>
  )
}
