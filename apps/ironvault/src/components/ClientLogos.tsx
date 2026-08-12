import { CLIENTS } from '../data'
import { SectionHeading } from './SectionHeading'

/**
 * ClientLogos — centered section title plus a row of five partner wordmarks
 * (recreated as styled text; the source logo images are not copied).
 */
export function ClientLogos() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading title="Some Latest Gym With me" center />
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
          {CLIENTS.map((name) => (
            <li key={name}>
              <span className="text-xl font-bold uppercase tracking-widest text-ink/40">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
