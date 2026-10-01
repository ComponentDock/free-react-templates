import { people } from '../data/people'

const columns = ['#', 'First Name', 'Last Name', 'Email'] as const

/** Dark borderless people-table — row separation via page-color gaps. */
export function PeopleTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[1000px] border-collapse bg-panel text-ink">
        <thead>
          <tr>
            {columns.map((label) => (
              <th
                key={label}
                scope="col"
                className="border-b-4 border-gap px-[30px] py-5 text-left text-sm font-bold text-ink"
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="group">
          {people.map((person) => (
            <tr key={person.id} className="group-hover:bg-rowhover">
              <th
                scope="row"
                className="border-b-[3px] border-gap px-[30px] py-5 text-left text-sm font-bold text-ink"
              >
                {person.id}
              </th>
              <td className="border-b-[3px] border-gap px-[30px] py-5 text-sm text-ink">
                {person.firstName}
              </td>
              <td className="border-b-[3px] border-gap px-[30px] py-5 text-sm text-ink">
                {person.lastName}
              </td>
              <td className="border-b-[3px] border-gap px-[30px] py-5 text-sm text-ink">
                {person.email}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
