import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { CustomCheckbox } from './CustomCheckbox'

export interface TableRow {
  order: string
  sales: string
  description: string
  phone: string
  /** Seed numbers for the overlapping circular crew avatars (5 / 3 / 2). */
  avatars: number[]
}

export const tableRows: TableRow[] = [
  {
    order: '1392',
    sales: 'Sales Pitch - 2019',
    description: 'Far far away, behind the word mountains',
    phone: '+63 983 0962 971',
    avatars: [1, 2, 3, 4, 5],
  },
  {
    order: '4616',
    sales: 'Social Media Planner',
    description: 'Far far away, behind the word mountains',
    phone: '+02 020 3994 929',
    avatars: [5, 4, 2],
  },
  {
    order: '9841',
    sales: 'Website Agreement',
    description: 'Far far away, behind the word mountains',
    phone: '+01 352 1125 0192',
    avatars: [3, 2],
  },
  // The source duplicates its three unique rows to fill six — rows 4–6
  // repeat rows 1–3 (same KIND of demo data).
  {
    order: '1392',
    sales: 'Sales Pitch - 2019',
    description: 'Far far away, behind the word mountains',
    phone: '+63 983 0962 971',
    avatars: [1, 2, 3, 4, 5],
  },
  {
    order: '4616',
    sales: 'Social Media Planner',
    description: 'Far far away, behind the word mountains',
    phone: '+02 020 3994 929',
    avatars: [5, 4, 2],
  },
  {
    order: '9841',
    sales: 'Website Agreement',
    description: 'Far far away, behind the word mountains',
    phone: '+01 352 1125 0192',
    avatars: [3, 2],
  },
]

// FIVE header labels vs SIX body cells — the source's unlabeled avatar
// column. Reproduce 1:1: the avatar cell has no header.
const headers = ['Order', 'Sales', 'Description', 'Support']
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
  // the header box back from the rows. A checked row IS the source's
  // subtle `active` highlight (light-gray tint + #bfbfbf hairlines).
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

  // Body cells keep the 1px #dee2e6 top separator; active (checked) rows
  // tint to rgba(0,0,0,0.03) with #bfbfbf hairlines top AND bottom.
  // Hover applies the same treatment via group-hover (pure CSS).
  function cellClasses(active: boolean) {
    return cn(
      'px-3 py-5 align-top font-light transition-colors',
      active ? 'border-t border-b border-hairline bg-row-active' : 'border-t border-separator',
      'group-hover:border-hairline group-hover:bg-row-active group-hover:border-b',
    )
  }

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[900px] border-collapse text-left">
        <thead>
          <tr>
            <th scope="col" className="px-3 py-3">
              <CustomCheckbox checked={selectAll} onChange={toggleAll} label="Select all rows" />
            </th>
            {headers.map((col) => (
              <th key={col} scope="col" className="px-3 py-3 text-header">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableRows.map((row, index) => (
            <tr key={row.order + String(index)} className="group">
              <th
                scope="row"
                className={cn(
                  'px-3 py-5 text-left align-top font-light text-muted',
                  cellClasses(checkedRows.has(index)),
                )}
              >
                <CustomCheckbox
                  checked={checkedRows.has(index)}
                  onChange={() => toggleRow(index)}
                  label={`Select row ${row.order} ${row.sales}`}
                />
              </th>
              <td className={cn('text-muted', cellClasses(checkedRows.has(index)))}>{row.order}</td>
              <td className={cn('text-muted', cellClasses(checkedRows.has(index)))}>{row.sales}</td>
              <td className={cn('text-muted', cellClasses(checkedRows.has(index)))}>
                {row.description}
                <small className="mt-1 block text-[0.8em] font-light text-blurb">{blurb}</small>
              </td>
              <td className={cn('text-muted', cellClasses(checkedRows.has(index)))}>{row.phone}</td>
              <td className={cn('text-muted', cellClasses(checkedRows.has(index)))}>
                <ul className="m-0 list-none p-0">
                  {row.avatars.map((n) => (
                    <li key={n} className="-ml-[15px] inline-block list-none p-0">
                      <a
                        href="#"
                        aria-label={`Crew member ${n}`}
                        className="inline-block w-9 no-underline"
                      >
                        <img
                          src={`https://picsum.photos/seed/cellcrew-${n}/72/72`}
                          alt=""
                          className="w-9 max-w-full rounded-full"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
