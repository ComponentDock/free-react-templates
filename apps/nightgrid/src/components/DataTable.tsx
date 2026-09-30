export interface TableRow {
  order: string
  name: string
  occupation: string
  occupationNote: string
  contact: string
  education: string
}

const baseRows: TableRow[] = [
  {
    order: '1392',
    name: 'James Yates',
    occupation: 'Web Designer',
    occupationNote: 'Far far away, behind the word mountains',
    contact: '+63 983 0962 971',
    education: 'NY University',
  },
  {
    order: '4616',
    name: 'Matthew Wasil',
    occupation: 'Graphic Designer',
    occupationNote: 'Far far away, behind the word mountains',
    contact: '+02 020 3994 929',
    education: 'London College',
  },
  {
    order: '9841',
    name: 'Sampson Murphy',
    occupation: 'Mobile Dev',
    occupationNote: 'Far far away, behind the word mountains',
    contact: '+01 352 1125 0192',
    education: 'Senior High',
  },
  {
    order: '9548',
    name: 'Gaspar Semenov',
    occupation: 'Illustrator',
    occupationNote: 'Far far away, behind the word mountains',
    contact: '+92 020 3994 929',
    education: 'College',
  },
]

/* The source fills the table with 7 rows by duplicating its 4 unique
   records (rows 5-7 repeat rows 2-4) — keep the same rhythm. */
export const tableRows: TableRow[] = [...baseRows, ...baseRows.slice(1)]

const columns = ['Order', 'Name', 'Occupation', 'Contact', 'Education'] as const

/* Header labels: 11px uppercase letter-spaced WHITE, borderless, sitting
   directly on the dark page; 30px bottom padding, bottom-aligned. */
const headerClass =
  'border-none px-3 pt-3 pb-[30px] align-bottom text-left text-[11px] font-bold uppercase tracking-[0.2rem] text-heading'

/* Body cells: faint gray at weight 300, no borders, 20px vertical +
   0.75rem horizontal padding. On row hover/focus the cell text turns
   WHITE (the occupation blurb keeps its own faint color — it has a
   more direct rule, exactly like the source stylesheet). */
const cellClass =
  'border-none px-3 py-5 align-top font-light text-muted transition-colors duration-300 ease group-hover:text-heading group-focus-within:text-heading'

/* Default links are faint WHITE (not blue); on row hover/focus they
   turn YELLOW — the signature treatment of this snippet. */
const linkClass =
  'text-faint no-underline transition-colors duration-300 ease group-hover:text-highlight group-focus-within:text-highlight'

export function DataTable() {
  return (
    <div className="w-full overflow-x-auto">
      <table className="mb-4 w-full min-w-[900px] border-collapse text-left">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col} scope="col" className={headerClass}>
                {col}
              </th>
            ))}
            {/* The source leaves the sixth (Details) header cell empty. */}
            <th scope="col" className={headerClass} />
          </tr>
        </thead>
        <tbody>
          {tableRows.map((row, index) => (
            <tr
              key={`${row.order}-${index}`}
              className={`group transition-colors duration-300 ease${index % 2 === 0 ? ' bg-black/5' : ''}`}
            >
              <td className={cellClass}>{row.order}</td>
              <td className={cellClass}>
                <a href="#" className={linkClass}>
                  {row.name}
                </a>
              </td>
              <td className={cellClass}>
                {row.occupation}
                <small className="block text-[0.8em] font-light text-faint">
                  {row.occupationNote}
                </small>
              </td>
              <td className={cellClass}>{row.contact}</td>
              <td className={cellClass}>{row.education}</td>
              <td className={cellClass}>
                <a
                  href="#"
                  className={`${linkClass} text-[11px] font-black uppercase tracking-[0.2rem]`}
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
