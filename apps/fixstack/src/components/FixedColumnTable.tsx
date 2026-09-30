import { cn } from '@free-react-templates/ui'

export interface Employee {
  name: string
  position: string
  startDate: string
  lastActivity: string
  contacts: string
  age: string
  address: string
  cardNo: string
}

export const employees: Employee[] = [
  {
    name: 'Brandon Green',
    position: 'CMO',
    startDate: '16 Nov 2012',
    lastActivity: '16 Nov 2017',
    contacts: 'brandon94@example.com',
    age: '30',
    address: 'New York City, NY',
    cardNo: '424242xxxxxx6262',
  },
  {
    name: 'Kathy Daniels',
    position: 'Marketing',
    startDate: '16 Nov 2015',
    lastActivity: '30 Nov 2017',
    contacts: 'kathy_82@example.com',
    age: '26',
    address: 'New York City, NY',
    cardNo: '424242xxxxxx1616',
  },
  {
    name: 'Elizabeth Alvarado',
    position: 'CFO',
    startDate: '16 Nov 2013',
    lastActivity: '30 Nov 2017',
    contacts: 'elizabeth82@example.com',
    age: '32',
    address: 'New York City, NY',
    cardNo: '424242xxxxxx5326',
  },
  {
    name: 'Michael Coleman',
    position: 'Designer',
    startDate: '16 Nov 2013',
    lastActivity: '30 Nov 2017',
    contacts: 'michael94@example.com',
    age: '22',
    address: 'New York City, NY',
    cardNo: '424242xxxxxx6328',
  },
  {
    name: 'Jason Cox',
    position: 'Developer',
    startDate: '16 Nov 2017',
    lastActivity: '30 Nov 2017',
    contacts: 'jasoncox@example.com',
    age: '25',
    address: 'New York City, NY',
    cardNo: '424242xxxxxx7648',
  },
  {
    name: 'Christian Perkins',
    position: 'Sale',
    startDate: '16 Nov 2016',
    lastActivity: '30 Nov 2017',
    contacts: 'christian_83@example.com',
    age: '28',
    address: 'New York City, NY',
    cardNo: '424242xxxxxx4152',
  },
  {
    name: 'Emily Wheeler',
    position: 'Support',
    startDate: '16 Nov 2013',
    lastActivity: '30 Nov 2017',
    contacts: 'emily90@example.com',
    age: '24',
    address: 'New York City, NY',
    cardNo: '424242xxxxxx6668',
  },
]

export interface ScrollColumn {
  key: Exclude<keyof Employee, 'name'>
  label: string
  widthClass: string
  extraClass?: string
}

export const scrollColumns: ScrollColumn[] = [
  { key: 'position', label: 'Position', widthClass: 'w-[225px]', extraClass: 'pl-[55px]' },
  { key: 'startDate', label: 'Start date', widthClass: 'w-[205px]' },
  { key: 'lastActivity', label: 'Last Activity', widthClass: 'w-[195px]' },
  { key: 'contacts', label: 'Contacts', widthClass: 'w-[235px]' },
  { key: 'age', label: 'Age', widthClass: 'w-[170px]' },
  { key: 'address', label: 'Address', widthClass: 'w-[330px]' },
  { key: 'cardNo', label: 'Card No', widthClass: 'w-[305px]' },
]

const headerClass = 'py-[21px] pr-2.5 text-sm font-bold uppercase leading-[1.4] text-header'
const bodyClass = 'py-4 pr-2.5 text-[15px] font-medium leading-[1.4] text-other-col'
const rowClass = 'border-b border-separator'

export function FixedColumnTable() {
  return (
    <div className="relative w-full bg-card">
      {/* SIGNATURE: the fixed first column stays put while the rest scrolls. */}
      <div className="absolute top-0 left-0 z-[1000] w-[310px] bg-card">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className={rowClass}>
              <th
                scope="col"
                className="w-full py-[21px] pr-2.5 pl-10 text-sm font-bold uppercase leading-[1.4] text-header"
              >
                Employees
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.name} className={rowClass}>
                <td className="w-full py-4 pr-2.5 pl-10 text-[15px] font-medium leading-[1.4] text-first-col">
                  {employee.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Scrollable columns — offset by the fixed column width. */}
      <div className="w-full overflow-x-auto pb-7 pl-[310px]">
        <table className="table-fixed border-collapse text-left">
          <thead>
            <tr className={rowClass}>
              {scrollColumns.map((col) => (
                <th
                  key={col.key}
                  scope="col"
                  className={cn(headerClass, col.widthClass, col.extraClass)}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.name} className={rowClass}>
                {scrollColumns.map((col) => (
                  <td key={col.key} className={cn(bodyClass, col.widthClass, col.extraClass)}>
                    {employee[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
