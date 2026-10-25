import { Check, Minus } from 'lucide-react'
import { capabilityGroups, roleColumns, roles } from '../data'
import type { Cell } from '../data'
import { SCROLL_OFFSET, sectionChip } from '../lib/site'

function CapabilityCell({ cell }: { cell: Cell }) {
  if (cell.kind === 'full') {
    return (
      <td className="px-3 py-3 text-center">
        <Check aria-hidden="true" className="mx-auto h-4 w-4 text-primary-600" />
        <span className="sr-only">Full access</span>
      </td>
    )
  }

  if (cell.kind === 'scoped') {
    return (
      <td className="px-3 py-3 text-center font-mono text-xs text-gray-500">
        {cell.label}
        <span className="sr-only">, scoped access</span>
      </td>
    )
  }

  return (
    <td className="px-3 py-3 text-center text-gray-300">
      <Minus aria-hidden="true" className="mx-auto h-4 w-4" />
      <span className="sr-only">No access</span>
    </td>
  )
}

/** Four role cards, then the capability matrix the committee actually reads:
 * teal checks for a full grant, an inline label for a scoped one, an em dash for
 * a denial, and a legend underneath that defines all three. */
export function Roles() {
  return (
    <section id="roles" className={`section-band bg-white ${SCROLL_OFFSET}`}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-3xl">
          <p className={sectionChip}>Roles</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 lg:text-4xl">
            Four roles, and a permission model you can explain to a committee
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Most learning-platform trouble is really permission trouble — the wrong person can edit
            a published grade, or the right person cannot see their own cohort. Chalkline ships four
            roles out of the box, and every one of them is a starting point you can fork.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role) => (
            <li key={role.title} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <p className="font-mono text-xs font-medium tracking-wider text-accent-600 uppercase">
                {role.meta}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-gray-900">{role.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{role.blurb}</p>
            </li>
          ))}
        </ul>

        <div className="relative mt-12 overflow-x-auto">
          <table className="w-full min-w-[46rem] border-collapse text-left">
            <caption className="sr-only">What each role can do in Chalkline</caption>
            <thead>
              <tr className="border-b border-gray-300">
                <th scope="col" className="py-3 pr-4 font-mono text-xs tracking-wider text-gray-500 uppercase">
                  Capability
                </th>
                {roleColumns.map((column) => (
                  <th
                    key={column}
                    scope="col"
                    className="px-3 py-3 text-center font-mono text-xs tracking-wider text-gray-500 uppercase"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            {capabilityGroups.map((group) => (
              <tbody key={group.name}>
                <tr>
                  <th
                    scope="colgroup"
                    colSpan={5}
                    className="pt-6 pb-2 text-left font-mono text-xs tracking-wider text-gray-500 uppercase"
                  >
                    {group.name}
                  </th>
                </tr>
                {group.rows.map((row) => (
                  <tr key={row.capability} className="border-b border-gray-200">
                    <th scope="row" className="py-3 pr-4 text-sm font-normal text-gray-900">
                      {row.capability}
                    </th>
                    {row.cells.map((cell, index) => (
                      <CapabilityCell key={`${row.capability}-${roleColumns[index]}`} cell={cell} />
                    ))}
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </div>

        <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-600">
          <li className="flex items-center gap-2">
            <Check aria-hidden="true" className="h-4 w-4 text-primary-600" />
            Full access
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden="true" className="font-mono text-xs text-gray-500">
              label
            </span>
            Scoped — the label states the limit
          </li>
          <li className="flex items-center gap-2">
            <Minus aria-hidden="true" className="h-4 w-4 text-gray-300" />
            No access
          </li>
        </ul>

        <p className="mt-6 border-t border-gray-200 pt-6 text-sm text-gray-500">
          Roles are definitions in a config file, not hard-coded classes. Institutions that need a
          fifth role — external examiner, placement mentor, quality reviewer — write one and version
          it alongside everything else.
        </p>
      </div>
    </section>
  )
}
