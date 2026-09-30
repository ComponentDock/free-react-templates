import { Button, cn } from '@free-react-templates/ui'
import { domains } from '../data/domains'

const headerLabels = ['TLD', 'Duration', 'Registration', 'Renewal', 'Transfer', 'Register']

/** Body-cell base: 14px ink on white, 30px padding, page-colored 2px bottom border. */
const bodyCell = 'border-b-2 border-page bg-white p-[30px] text-[14px] align-middle'

/** TLD scope cell: the shaded lavender column with its own bottom border. */
const scopeCell =
  'border-b-2 border-scope-border bg-scope p-[30px] text-[14px] align-middle font-bold'

/** Odd-position data cells (Registration, Transfer) shade at >=768px. */
const shaded = 'min-[768px]:bg-shade min-[768px]:border-shade-border'

/** The last row carries no bottom separator on any cell. */
const lastRowCell = 'border-b-0'

/** Primary Sign Up CTA styled to the source button tokens (via shared Button). */
const signUpButton = cn(
  'h-auto cursor-pointer rounded-[2px] border-2 border-primary bg-primary px-3 py-1.5',
  'text-[13px] font-medium text-white',
  'transition-[background-color,border-color,box-shadow] duration-150 ease-in-out',
  'hover:border-primary-hover hover:bg-primary-hover hover:shadow-[0_12px_20px_-6px_rgba(0,0,0,0.21)]',
  'focus-visible:ring-primary/40',
)

export function DomkitTable() {
  return (
    <div className="overflow-x-scroll">
      <table className="w-full min-w-[1000px] bg-white text-center shadow-[0_5px_12px_-12px_rgba(0,0,0,0.29)]">
        <thead className="bg-primary">
          <tr>
            {headerLabels.map((label) => (
              <th
                key={label}
                scope="col"
                className="border-none p-[30px] text-[14px] font-bold text-white"
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {domains.map((domain, index) => {
            const isLast = index === domains.length - 1
            return (
              <tr key={domain.tld}>
                <th scope="row" className={cn(scopeCell, isLast && lastRowCell)}>
                  {domain.tld}
                </th>
                <td className={cn(bodyCell, isLast && lastRowCell)}>{domain.duration}</td>
                <td className={cn(bodyCell, shaded, isLast && lastRowCell)}>
                  {domain.registration}
                </td>
                <td className={cn(bodyCell, isLast && lastRowCell)}>{domain.renewal}</td>
                <td className={cn(bodyCell, shaded, isLast && lastRowCell)}>{domain.transfer}</td>
                <td className={cn(bodyCell, isLast && lastRowCell)}>
                  <Button className={signUpButton}>Sign Up</Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
