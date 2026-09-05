import { Minus, Plus, X } from 'lucide-react'

export interface CartItemData {
  id: number
  name: string
  price: number
  quantity: number
  imageSeed: string
}

interface CartItemProps {
  item: CartItemData
  onQuantityChange: (id: number, delta: number) => void
  onRemove: (id: number) => void
}

export function CartItem({ item, onQuantityChange, onRemove }: CartItemProps) {
  const subtotal = item.price * item.quantity

  return (
    <div role="menuitem" className="flex items-center gap-3 border-b border-border px-4 py-3">
      <img
        src={`https://picsum.photos/seed/${item.imageSeed}/120/120`}
        alt={item.name}
        className="h-[60px] w-[60px] rounded-lg object-cover"
        loading="lazy"
      />
      <div className="flex-1 min-w-0">
        <h4 className="truncate text-sm font-medium text-text-body">{item.name}</h4>
        <p className="text-xs text-text-muted">${item.price.toFixed(2)}</p>
        <div className="mt-1 flex items-center gap-2">
          <button
            type="button"
            onClick={() => onQuantityChange(item.id, -1)}
            aria-label={`Decrease quantity of ${item.name}`}
            className="flex h-6 w-6 items-center justify-center rounded border border-border text-text-muted transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-1"
          >
            <Minus className="h-3 w-3" />
          </button>
          <span className="min-w-[1.5rem] text-center text-sm font-medium text-text-body">
            {item.quantity}
          </span>
          <button
            type="button"
            onClick={() => onQuantityChange(item.id, 1)}
            aria-label={`Increase quantity of ${item.name}`}
            className="flex h-6 w-6 items-center justify-center rounded border border-border text-text-muted transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-1"
          >
            <Plus className="h-3 w-3" />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-end gap-1">
        <button
          type="button"
          onClick={() => onRemove(item.id)}
          aria-label={`Remove ${item.name} from cart`}
          className="flex h-6 w-6 items-center justify-center rounded-full text-text-muted transition-colors hover:bg-red-50 hover:text-brand focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-1"
        >
          <X className="h-3.5 w-3.5" />
        </button>
        <span className="text-xs font-medium text-text-body">${subtotal.toFixed(2)}</span>
      </div>
    </div>
  )
}
