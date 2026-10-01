import { cn } from '@free-react-templates/ui'
import { formatCurrency, type CartItem } from '../data/products'
import { Checkbox } from './Checkbox'
import { ProductCell } from './ProductCell'
import { QuantityCell } from './QuantityCell'
import { RemoveButton } from './RemoveButton'

interface CartRowProps {
  item: CartItem
  onToggle: (id: string) => void
  onQuantity: (id: string, quantity: number) => void
  onRemove: (id: string) => void
}

/** Shared body-cell classes: 14px ink text, 30px padding, no borders, white. */
const bodyCell = 'border-none bg-white p-[30px] text-[14px] align-middle text-ink'

export function CartRow({ item, onToggle, onQuantity, onRemove }: CartRowProps) {
  const total = formatCurrency(item.unitPrice * item.quantity)
  return (
    <tr className="mb-[10px] border-b-4 border-page last:border-b-0">
      <td className={bodyCell}>
        <Checkbox
          checked={item.checked}
          onChange={() => onToggle(item.id)}
          label={`Select ${item.name}`}
        />
      </td>
      <td className={bodyCell}>
        <div
          aria-hidden="true"
          className="h-[80px] w-[100px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://picsum.photos/seed/${item.thumbSeed}/200/160)`,
          }}
        />
      </td>
      <td className={cn(bodyCell, 'text-left')}>
        <ProductCell name={item.name} blurb={item.blurb} />
      </td>
      <td className={cn(bodyCell, 'text-left')}>{formatCurrency(item.unitPrice)}</td>
      <td className={cn(bodyCell, 'w-[10%]')}>
        <QuantityCell
          value={item.quantity}
          onChange={(quantity) => onQuantity(item.id, quantity)}
        />
      </td>
      <td className={cn(bodyCell, 'text-left')}>{total}</td>
      <td className={cn(bodyCell, 'text-right')}>
        <RemoveButton onRemove={() => onRemove(item.id)} />
      </td>
    </tr>
  )
}
