import { Fragment, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { CustomCheckbox } from './CustomCheckbox'

export interface TableRow {
  order: string
  name: string
  occupation: string
  contact: string
  education: string
}

export const tableRows: TableRow[] = [
  {
    order: '1392',
    name: 'James Yates',
    occupation: 'Web Designer',
    contact: '+63 983 0962 971',
    education: 'NY University',
  },
  {
    order: '4616',
    name: 'Matthew Wasil',
    occupation: 'Graphic Designer',
    contact: '+02 020 3994 929',
    education: 'London College',
  },
  {
    order: '9841',
    name: 'Sampson Murphy',
    occupation: 'Mobile Dev',
    contact: '+01 352 1125 0192',
    education: 'Senior High',
  },
  {
    order: '9548',
    name: 'Gaspar Semenov',
    occupation: 'Illustrator',
    contact: '+92 020 3994 929',
    education: 'College',
  },
  // The source duplicates its four unique rows to fill seven — rows 5–7
  // repeat rows 2–4 (same KIND of demo data).
  {
    order: '4616',
    name: 'Matthew Wasil',
    occupation: 'Graphic Designer',
    contact: '+02 020 3994 929',
    education: 'London College',
  },
  {
    order: '9841',
    name: 'Sampson Murphy',
    occupation: 'Mobile Dev',
    contact: '+01 352 1125 0192',
    education: 'Senior High',
  },
  {
    order: '9548',
    name: 'Gaspar Semenov',
    occupation: 'Illustrator',
    contact: '+92 020 3994 929',
    education: 'College',
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
  // the header control. A checked row IS the source's `active` highlight
  // (this stylesheet styles it — checked rows lighten with white text).
  const [selectAll, setSelectAll] = useState(false)
  const [checkedRows, setCheckedRows] = useState<Set<number>>(() => new Set())

  function toggleAll() {
    const next = !selectAll
    setSelectAll(next)
    setCheckedRows(next ? new Set(tableRows.map((_, index) => index)) : new Set())
  }

  function toggleRow(index: number) {
    setCheckedRows((prev) => toggleSetMember(prev, index))
  }

  // Cell classes for a data row: normal = dark card + faint text; active
  // (checked) = lighter card + white text. Hover applies the same
  // treatment via group-hover (pure CSS, like the original).
  function cellClasses(active: boolean) {
    return cn(
      'px-3 py-5 align-top font-light transition-colors',
      active ? 'bg-row-active text-white' : 'bg-row text-muted',
      'group-hover:bg-row-active group-hover:text-white',
    )
  }

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[900px] border-collapse text-left">
        <thead>
          <tr>
            <th scope="col" className="px-3 pb-6 align-bottom">
              <CustomCheckbox checked={selectAll} onChange={toggleAll} label="Select all rows" />
            </th>
            {columns.map((col) => (
              <th key={col} scope="col" className="px-3 pb-6 align-bottom text-header">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableRows.map((row, index) => (
            <Fragment key={row.order + String(index)}>
              <tr className="group transition-shadow group-hover:shadow-[0_2px_10px_-5px_rgba(0,0,0,0.1)]">
                <th
                  scope="row"
                  className={cn(
                    'px-3 py-5 text-left align-top font-light',
                    cellClasses(checkedRows.has(index)),
                  )}
                >
                  <CustomCheckbox
                    checked={checkedRows.has(index)}
                    onChange={() => toggleRow(index)}
                    label={`Select row ${row.order} ${row.name}`}
                  />
                </th>
                <td className={cellClasses(checkedRows.has(index))}>{row.order}</td>
                <td className={cellClasses(checkedRows.has(index))}>
                  <a
                    href="#"
                    className={cn(
                      'no-underline transition-colors',
                      checkedRows.has(index) ? 'text-link-active' : 'text-link',
                      'group-hover:text-link-active',
                    )}
                  >
                    {row.name}
                  </a>
                </td>
                <td className={cellClasses(checkedRows.has(index))}>
                  {row.occupation}
                  <small className="mt-1 block text-[0.8em] font-light text-blurb group-hover:text-blurb">
                    {blurb}
                  </small>
                </td>
                <td className={cellClasses(checkedRows.has(index))}>{row.contact}</td>
                <td className={cellClasses(checkedRows.has(index))}>{row.education}</td>
              </tr>
              {index < tableRows.length - 1 && (
                <tr aria-hidden="true">
                  <td colSpan={columns.length + 1} className="h-[3px] bg-transparent p-0" />
                </tr>
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}
