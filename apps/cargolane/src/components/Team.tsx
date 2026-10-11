import { TEAM } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function Team() {
  return (
    <section id="team" className="border-b border-black/10 bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title="Our Team" align="center" tone="primary" blurb={null} />
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {TEAM.map((person) => (
            <article key={person.name} className="text-center">
              <img
                src={person.image}
                alt={person.name}
                className="mx-auto aspect-square w-full max-w-[300px] object-cover"
              />
              <h3 className="mt-4 text-[18px] text-black">{person.name}</h3>
              <p className="mt-1 text-sm uppercase tracking-[0.1em] text-primary">{person.role}</p>
              <p className="mt-2">{person.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
