import { cn } from '@free-react-templates/ui'
import type { ServiceRow as ServiceRowData } from '../panels'

export interface ServiceRowProps {
  row: ServiceRowData
}

/**
 * One service row: number span (faint, weight 300) + service name (weight 600)
 * + count pill (right-aligned). Matches the reference li rule with
 * border-bottom separator and padding 15px 30px.
 */
export function ServiceRow({ row }: ServiceRowProps) {
  return (
    <li className="flex items-center justify-between border-b border-separator px-[30px] py-[15px]">
      <p className="m-0 text-[14px] font-semibold text-row-text">
        <span className="mr-[10px] font-light text-row-number">{row.number}</span>
        {row.name}
      </p>
      <span
        className={cn(
          'inline-block rounded-[40px] border border-pill-border px-3 py-0 text-[16px] text-black',
        )}
      >
        {row.count}
      </span>
    </li>
  )
}
