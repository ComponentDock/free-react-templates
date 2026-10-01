import { cn } from '@free-react-templates/ui'
import type { ProductRow } from '../data/products'

interface AccordionPanelProps {
  product: ProductRow
  isOpen: boolean
}

/** Full-width detail panel row — #f3f3f3 band, height-animated via grid rows. */
export function AccordionPanel({ product, isOpen }: AccordionPanelProps) {
  return (
    <tr aria-hidden={isOpen ? undefined : true}>
      <td colSpan={6} id={`panel-${product.id}`} className="border-none bg-panel p-0">
        <div
          className={cn(
            'grid transition-[grid-template-rows] duration-[350ms] ease-out motion-reduce:transition-none',
            isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
          )}
        >
          <div className="min-h-0 overflow-hidden">
            <p className="p-[30px] text-[14px]">{product.detail}</p>
          </div>
        </div>
      </td>
    </tr>
  )
}
