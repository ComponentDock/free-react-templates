import { directory } from '../data/directory'

const headerLabels = ['#', 'First Name', 'Last Name', 'Email Address']

/** Shared body-cell classes: 14px ink text, 20/30 padding, 3px page-colored divider. */
const bodyCell = 'border-b-[3px] border-page px-[30px] py-5 text-[14px] text-body-ink'

export function DirectoryTable() {
  return (
    <div className="overflow-x-scroll">
      <table className="w-full min-w-[1000px] bg-white">
        <thead className="bg-header-blue">
          <tr>
            {headerLabels.map((label) => (
              <th
                key={label}
                scope="col"
                className="border-none px-[30px] py-5 text-center text-[14px] font-bold text-white"
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {directory.map((entry) => (
            <tr key={entry.id}>
              <th
                scope="row"
                className={`border-b-[3px] border-page px-[30px] py-5 text-center text-[14px] font-bold`}
              >
                {entry.id}
              </th>
              <td className={`${bodyCell} text-left`}>{entry.firstName}</td>
              <td className={`${bodyCell} text-left`}>{entry.lastName}</td>
              <td className={`${bodyCell} text-left`}>{entry.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
