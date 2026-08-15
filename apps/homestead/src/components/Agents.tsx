import { agents } from '../data'
import { SectionHeading } from './SectionHeading'

/** Four agent photo cards with name and listing info. */
export function Agents() {
  return (
    <section id="agent" className="bg-white pb-24">
      <div className="mx-auto max-w-[1250px] px-4">
        <SectionHeading label="Agents" title="Our Agents" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {agents.map((agent) => (
            <article key={agent.name} className="text-center">
              <img
                src={agent.photo}
                alt={agent.name}
                className="mb-4 h-[300px] w-full rounded-lg object-cover"
              />
              <h3 className="mb-1 text-lg font-semibold text-ink">{agent.name}</h3>
              <p className="text-body">{agent.info}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
