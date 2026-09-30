export interface TableRow {
  order: string
  name: string
  occupation: string
  occupationNote: string
  contact: string
  education: string
}

export const tableRows: TableRow[] = [
  {
    order: '4173',
    name: 'Ava Lindqvist',
    occupation: 'Web Designer',
    occupationNote: 'Far away from the busy harbor, behind the pine ridge',
    contact: '+46 70 123 45 67',
    education: 'Nordic Design Academy',
  },
  {
    order: '5628',
    name: 'Diego Ferrer',
    occupation: 'Graphic Designer',
    occupationNote: 'Somewhere past the old market, behind the clocktower',
    contact: '+34 91 234 56 78',
    education: 'Madrid Visual Institute',
  },
  {
    order: '7904',
    name: 'Mei Tanaka',
    occupation: 'Mobile Developer',
    occupationNote: 'High above the harbor lights, behind the cedar gate',
    contact: '+81 90 1234 5678',
    education: 'Tokyo Tech College',
  },
  {
    order: '8256',
    name: 'Oliver Brandt',
    occupation: 'Illustrator',
    occupationNote: 'Deep in the archive stacks, behind the last shelf',
    contact: '+49 30 1234 567',
    education: 'Berlin School of Arts',
  },
]

const columns = ['Order', 'Name', 'Occupation', 'Contact', 'Education']

const cellClass = 'px-3 py-5 align-top font-light text-muted'

export function DataTable() {
  return (
    <div className="w-full overflow-x-auto">
      <table className="mb-4 w-full min-w-[900px] border-collapse text-left">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col}
                scope="col"
                className="px-3 py-3 text-left align-bottom font-bold text-ink"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableRows.map((row) => (
            <tr
              key={row.order}
              tabIndex={0}
              className="transition-colors duration-300 ease-out hover:bg-white focus:bg-white"
            >
              <td className={cellClass}>{row.order}</td>
              <td className={cellClass}>{row.name}</td>
              <td className={cellClass}>
                {row.occupation}
                <small className="block text-[0.8em] font-light text-subtext">
                  {row.occupationNote}
                </small>
              </td>
              <td className={cellClass}>{row.contact}</td>
              <td className={cellClass}>{row.education}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
