import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { CustomCheckbox } from './CustomCheckbox'
import { IOSSwitch } from './IOSSwitch'

export interface TableRow {
  order: string
  name: string
  occupation: string
  contact: string
  education: string
  /** Initial strike-out state (switch ON dims the row + paints the red strike bar). */
  initialSwitchOn: boolean
}

export const tableRows: TableRow[] = [
  {
    order: '1392',
    name: 'James Yates',
    occupation: 'Web Designer',
    contact: '+63 983 0962 971',
    education: 'NY University',
    initialSwitchOn: true,
  },
  {
    order: '4616',
    name: 'Matthew Wasil',
    occupation: 'Graphic Designer',
    contact: '+02 020 3994 929',
    education: 'London College',
    initialSwitchOn: true,
  },
  {
    order: '9841',
    name: 'Sampson Murphy',
    occupation: 'Mobile Dev',
    contact: '+01 352 1125 0192',
    education: 'Senior High',
    initialSwitchOn: false,
  },
  {
    order: '9548',
    name: 'Gaspar Semenov',
    occupation: 'Illustrator',
    contact: '+92 020 3994 929',
    education: 'College',
    initialSwitchOn: false,
  },
  // The source duplicates its four unique rows to fill seven — rows 5–7
  // repeat rows 2–4 (same KIND of demo data; the live DOM strikes 1/2/5/6).
  {
    order: '4616',
    name: 'Matthew Wasil',
    occupation: 'Graphic Designer',
    contact: '+02 020 3994 929',
    education: 'London College',
    initialSwitchOn: true,
  },
  {
    order: '9841',
    name: 'Sampson Murphy',
    occupation: 'Mobile Dev',
    contact: '+01 352 1125 0192',
    education: 'Senior High',
    initialSwitchOn: true,
  },
  {
    order: '9548',
    name: 'Gaspar Semenov',
    occupation: 'Illustrator',
    contact: '+92 020 3994 929',
    education: 'College',
    initialSwitchOn: false,
  },
]

const columns = ['Order', 'Name', 'Occupation', 'Contact', 'Education']
const blurb = 'Far far away, behind the word mountains'

function toggleSetMember(prev: Set<number>, index: number): Set<number> {
  const next = new Set(prev)
  if (next.has(index)) {
    next.delete(index)
  } else {
    next.add(index)
  }
  return next
}

export function DataTable() {
  // The checkbox system and the switch/strike system are INDEPENDENT: the
  // source never syncs the header checkbox from row state, and row
  // checkboxes have zero effect on switches or row treatment.
  const [selectAll, setSelectAll] = useState(false)
  const [checkedRows, setCheckedRows] = useState<Set<number>>(() => new Set())
  // Header strike switch is also independent state (source behavior):
  // toggling it writes the same state to every row switch + row treatment.
  const [headerSwitchOn, setHeaderSwitchOn] = useState(false)
  const [struckRows, setStruckRows] = useState<Set<number>>(() => {
    const on = new Set<number>()
    tableRows.forEach((row, index) => {
      if (row.initialSwitchOn) {
        on.add(index)
      }
    })
    return on
  })

  function toggleAll() {
    const next = !selectAll
    setSelectAll(next)
    setCheckedRows(next ? new Set(tableRows.map((_, index) => index)) : new Set())
  }

  function toggleRowCheckbox(index: number) {
    setCheckedRows((prev) => toggleSetMember(prev, index))
  }

  function toggleRowSwitch(index: number) {
    setStruckRows((prev) => toggleSetMember(prev, index))
  }

  function toggleHeaderSwitch() {
    const next = !headerSwitchOn
    setHeaderSwitchOn(next)
    setStruckRows(next ? new Set(tableRows.map((_, index) => index)) : new Set())
  }

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[900px] border-collapse text-left">
        <thead>
          <tr>
            <th scope="col" className="px-3 pb-[30px] align-bottom">
              <CustomCheckbox checked={selectAll} onChange={toggleAll} label="Select all rows" />
            </th>
            {columns.map((col) => (
              <th key={col} scope="col" className="px-3 pb-[30px] align-bottom text-header">
                {col}
              </th>
            ))}
            {/* Seventh header cell: the select-all strike switch (nudged down ~10px). */}
            <th scope="col" className="px-3 pb-[30px] align-bottom text-header">
              <span className="relative top-2.5 inline-block">
                <IOSSwitch
                  checked={headerSwitchOn}
                  onChange={toggleHeaderSwitch}
                  label="Strike all rows"
                />
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map((row, index) => {
            const struck = struckRows.has(index)
            return (
              <tr
                key={index}
                className={cn(index % 2 === 0 && 'bg-stripe', struck && 'opacity-40')}
              >
                <td className="px-3 py-5 align-top font-light text-muted">
                  <CustomCheckbox
                    checked={checkedRows.has(index)}
                    onChange={() => toggleRowCheckbox(index)}
                    label={`Select row ${row.order} ${row.name}`}
                  />
                </td>
                <td className="px-3 py-5 align-top font-light text-muted">{row.order}</td>
                <td className="px-3 py-5 pl-0 align-top font-light text-muted">
                  <div className="flex items-center">
                    <a
                      href="#"
                      className={cn(
                        'relative inline-block no-underline text-accent transition-colors hover:text-link-hover',
                        struck &&
                          "before:absolute before:inset-x-0 before:top-1/2 before:-translate-y-1/2 before:h-0.5 before:bg-strike before:opacity-100 before:content-['']",
                      )}
                    >
                      {row.name}
                    </a>
                  </div>
                </td>
                <td className="px-3 py-5 align-top font-light text-muted">
                  {row.occupation}
                  <small className="block text-[0.8em] font-light text-blurb">{blurb}</small>
                </td>
                <td className="px-3 py-5 align-top font-light text-muted">{row.contact}</td>
                <td className="px-3 py-5 align-top font-light text-muted">{row.education}</td>
                <td className="px-3 py-5 align-top font-light text-muted">
                  <IOSSwitch
                    checked={struck}
                    onChange={() => toggleRowSwitch(index)}
                    label={`Toggle ${row.name}`}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
