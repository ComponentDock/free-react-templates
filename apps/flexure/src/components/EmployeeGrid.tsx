import { cn } from '@free-react-templates/ui'
import { employees } from '../data/employees'

interface ColumnSpec {
  label: string
  /** Desktop-only geometry (widths/padding from the source sheet). */
  desktopClass: string
}

const columns: ColumnSpec[] = [
  { label: 'Full Name', desktopClass: 'w-[360px] pl-10' },
  { label: 'Age', desktopClass: 'w-[160px]' },
  { label: 'Job Title', desktopClass: 'w-[250px]' },
  { label: 'Location', desktopClass: 'w-[190px]' },
]

/** Shared stacked-mode cell classes (≤768px): label-block reflow. */
const stackedCell = [
  'max-[768px]:block',
  'max-[768px]:border-0',
  'max-[768px]:pl-[30px]',
  'max-[768px]:py-4',
  'max-[768px]:text-[18px]',
  'max-[768px]:text-stacked-ink',
  'max-[768px]:w-full',
  'max-[768px]:before:content-[attr(data-title)]',
  'max-[768px]:before:block',
  'max-[768px]:before:font-bold',
  'max-[768px]:before:text-xs',
  'max-[768px]:before:text-label-ink',
  'max-[768px]:before:leading-[1.2]',
  'max-[768px]:before:uppercase',
  'max-[768px]:before:mb-[13px]',
  'max-[768px]:before:min-w-[98px]',
].join(' ')

/** CSS-canonical hover: applies to EVERY row, including the header band. */
const rowHover = 'cursor-pointer hover:bg-hover-tint'

export function EmployeeGrid() {
  return (
    <table className="w-full max-[768px]:block">
      <thead>
        <tr
          className={cn(
            'bg-header-band max-[768px]:block max-[768px]:h-0 max-[768px]:p-0',
            rowHover,
          )}
        >
          {columns.map((column) => (
            <th
              key={column.label}
              scope="col"
              className={cn(
                'border-b border-row-line font-poppins text-[18px] font-normal leading-[1.2] text-left text-white py-[19px] max-[768px]:hidden',
                column.desktopClass,
              )}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="max-[768px]:block">
        {employees.map((employee, index) => {
          const values = [employee.fullName, employee.age, employee.jobTitle, employee.location]
          return (
            <tr
              key={`${employee.fullName}-${index}`}
              className={cn(
                'border-b border-row-line bg-white max-[768px]:block max-[768px]:border-row-line max-[768px]:border-b max-[768px]:pt-[30px] max-[768px]:pr-[15px] max-[768px]:pb-[18px] max-[768px]:pl-0',
                rowHover,
              )}
            >
              {columns.map((column, columnIndex) => (
                <td
                  key={column.label}
                  data-title={column.label}
                  className={cn(
                    'border-b border-row-line font-poppins text-[15px] leading-[1.2] text-cell-ink py-5',
                    column.desktopClass,
                    stackedCell,
                  )}
                >
                  {values[columnIndex]}
                </td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
