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
  /** Initial iOS-switch state for the Name cell (mixed on/off like the source). */
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
  // repeat rows 2–4 (same KIND of demo data, mixed switch states).
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
  // Select-all state is INDEPENDENT of row state: the source never syncs
  // the header box back from the rows, so a checked row must not auto-check
  // the header control.
  const [selectAll, setSelectAll] = useState(false)
  const [checkedRows, setCheckedRows] = useState<Set<number>>(() => new Set())
  const [switchOn, setSwitchOn] = useState<Set<number>>(() => {
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

  function toggleRow(index: number) {
    setCheckedRows((prev) => toggleSetMember(prev, index))
  }

  function toggleSwitch(index: number) {
    setSwitchOn((prev) => toggleSetMember(prev, index))
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
            {/* Empty seventh header cell — the Details column has no label. */}
            <th scope="col" className="px-3 pb-[30px] align-bottom text-header" />
          </tr>
        </thead>
        <tbody>
          {tableRows.map((row, index) => (
            <tr key={index} className={cn(index % 2 === 0 && 'bg-stripe')}>
              <td className="px-3 py-5 align-top font-light text-muted">
                <CustomCheckbox
                  checked={checkedRows.has(index)}
                  onChange={() => toggleRow(index)}
                  label={`Select row ${row.order} ${row.name}`}
                />
              </td>
              <td className="px-3 py-5 align-top font-light text-muted">{row.order}</td>
              <td className="px-3 py-5 pl-0 align-top font-light text-muted">
                <div className="flex items-center">
                  <IOSSwitch
                    checked={switchOn.has(index)}
                    onChange={() => toggleSwitch(index)}
                    label={`Toggle ${row.name}`}
                  />
                  <a
                    href="#"
                    className="no-underline text-accent transition-colors hover:text-link-hover"
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
                <a
                  href="#"
                  className="no-underline text-accent transition-colors hover:text-link-hover"
                >
                  Details
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
