import { FileText } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

const agents = [
  {
    name: 'Ben Ford',
    properties: 43,
    image: 'https://picsum.photos/seed/keyhold-13/480/600',
    alt: 'Portrait of agent Ben Ford',
  },
  {
    name: 'John Cooper',
    properties: 28,
    image: 'https://picsum.photos/seed/keyhold-14/480/600',
    alt: 'Portrait of agent John Cooper',
  },
  {
    name: 'Janice Clinton',
    properties: 30,
    image: 'https://picsum.photos/seed/keyhold-15/480/600',
    alt: 'Portrait of agent Janice Clinton',
  },
  {
    name: 'Eunice Henceford',
    properties: 25,
    image: 'https://picsum.photos/seed/keyhold-16/480/600',
    alt: 'Portrait of agent Eunice Henceford',
  },
] as const

/**
 * Agents — "Our Agents" grid (source `.ftco-agent`): four photo cards with
 * a name link and a property-count line (filing icon + "N Properties").
 */
export function Agents() {
  return (
    <section id="agents" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading subheading="Agents" title="Our Agents" />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {agents.map((agent) => (
            <article key={agent.name} className="group text-center">
              <div className="overflow-hidden rounded-[3px]">
                <img
                  src={agent.image}
                  alt={agent.alt}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <a
                href="#agents"
                className="mt-4 inline-block text-lg font-semibold text-ink transition-colors hover:text-brand"
              >
                {agent.name}
              </a>
              <p className="mt-1 flex items-center justify-center gap-1.5 text-sm text-soft">
                <FileText className="h-4 w-4 text-brand" aria-hidden="true" />
                {agent.properties} Properties
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
