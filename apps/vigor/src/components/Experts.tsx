import { EXPERTS } from '../data'
import { SectionHeading } from './SectionHeading'

/**
 * Experts — "Ask the experts" strip over a background photo with a dark
 * overlay: a white centered heading and four trainer cards, each with a
 * portrait photo, name, and role tag.
 */
export function Experts() {
  return (
    <section
      id="experts"
      className="relative mt-25 bg-cover bg-center py-25"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/vigor-experts-bg/1600/700)' }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-black/50" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading kicker="Vigor" title="Ask the experts" light />
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {EXPERTS.map((expert) => (
            <div key={expert.name} className="text-center">
              <img
                src={expert.image}
                alt={expert.name}
                className="mx-auto w-full max-w-[260px] rounded-[10px] object-cover"
              />
              <h3 className="mt-5 text-xl font-semibold text-white">{expert.name}</h3>
              <h6 className="mt-2 text-sm font-semibold uppercase tracking-wide text-brand-light">
                {expert.role}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
