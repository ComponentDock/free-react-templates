import { cn } from '@free-react-templates/ui'
import type { PriceRow as PriceRowData } from '../panels'

export interface PriceRowProps {
  row: PriceRowData
}

/**
 * One price-list row: service name (60%, black) · duration (30%, muted) ·
 * price (10%, green accent). Matches the reference li rule (16px, weight 400,
 * 15px bottom margin); below md the fixed widths drop and rows wrap with a
 * 15px gutter.
 */
export function PriceRow({ row }: PriceRowProps) {
  return (
    <li className={cn('mb-[15px] flex flex-wrap text-[16px] font-normal')}>
      <span className="mr-[15px] text-black md:mr-0 md:w-[60%]">{row.name}</span>
      <span className="mr-[15px] text-[#6c757d] md:mr-0 md:w-[30%]">{row.duration}</span>
      <span className="text-price md:w-[10%]">{row.price}</span>
    </li>
  )
}
