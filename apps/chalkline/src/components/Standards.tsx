import { standardsGroups } from '../data'
import type { StandardStatus } from '../data'
import { SCROLL_OFFSET, sectionChip } from '../lib/site'

const CHIP: Record<StandardStatus, string> = {
  Certified: 'bg-primary-100 text-primary-900',
  Supported: 'bg-primary-50 text-primary-800',
  Partial: 'bg-accent-100 text-accent-900',
  Roadmap: 'bg-gray-100 text-gray-600',
}

const LABEL: Record<StandardStatus, string> = {
  Certified: 'Certified',
  Supported: 'Supported',
  Partial: 'Partial',
  Roadmap: 'On the roadmap',
}

/** Fourteen standards in three labelled groups: a fixed mono code, then the name
 * over its description, ending in a status chip whose colour is never a
 * default. */
export function Standards() {
  return (
    <section id="standards" className={`section-band bg-white ${SCROLL_OFFSET}`}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-3xl">
          <p className={sectionChip}>Interoperability</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 lg:text-4xl">
            The list your procurement team is going to ask for
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Every claim below is either certified by the standards body, implemented and tested
            against a reference suite, or honestly marked as partial. We would rather lose a tender
            than be vague in one.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {standardsGroups.map((group) => (
            <div key={group.name} className="grid gap-6 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-4">
                <h3 className="text-lg font-semibold text-gray-900">{group.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{group.blurb}</p>
              </div>

              <ul className="lg:col-span-8">
                {group.rows.map((row) => (
                  <li
                    key={row.code}
                    className="flex flex-wrap items-baseline justify-between gap-3 border-b border-gray-200 py-4"
                  >
                    <span className="w-28 shrink-0 font-mono text-xs tracking-wide text-gray-500 uppercase">
                      {row.code}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-gray-900">{row.name}</span>
                      <span className="mt-0.5 block text-sm text-gray-600">{row.detail}</span>
                    </span>
                    <span
                      className={`shrink-0 rounded-md px-2.5 py-1 font-mono text-xs ${CHIP[row.status]}`}
                    >
                      {LABEL[row.status]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 border-t border-gray-200 pt-6 text-sm text-gray-500">
          If a standard matters to your tender and it is not on this list, ask. We will tell you
          plainly whether it is unbuilt, half-built, or something we have decided not to do.
        </p>
      </div>
    </section>
  )
}
