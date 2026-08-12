import { X } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import { cartItems, cartSummary } from '../data'

interface CartDrawerProps {
  open: boolean
  onClose: () => void
}

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  if (!open) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />
      <div
        role="dialog"
        aria-label="Cart"
        className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-xl dark:bg-gray-900"
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <h2 className="font-display text-xl font-bold uppercase tracking-wide text-ink dark:text-white">
            Shopping Cart
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            className="text-muted transition-colors hover:text-accent dark:text-gray-300"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <ul className="flex-1 divide-y divide-line overflow-y-auto px-6">
          {cartItems.map((item, index) => (
            <li key={`${item.name}-${index}`} className="flex gap-4 py-5">
              <img
                src={item.image}
                alt=""
                className="h-24 w-20 shrink-0 object-cover"
                loading="lazy"
              />
              <div className="flex flex-col justify-center">
                <h3 className="font-display text-sm font-medium text-ink dark:text-white">
                  {item.name}
                </h3>
                <p className="mt-1 text-xs text-muted dark:text-gray-300">
                  Size: {item.size} · Color: {item.color}
                </p>
                <p className="mt-1 font-display text-sm font-bold text-accent">{item.price}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="border-t border-line px-6 py-6">
          <div className="space-y-2 font-display text-sm">
            <p className="flex justify-between text-ink dark:text-white">
              <span>Subtotal:</span>
              <span>{cartSummary.subtotal}</span>
            </p>
            <p className="flex justify-between text-muted dark:text-gray-300">
              <span>Delivery:</span>
              <span>{cartSummary.delivery}</span>
            </p>
            <p className="flex justify-between text-muted dark:text-gray-300">
              <span>Discount:</span>
              <span>{cartSummary.discount}</span>
            </p>
            <p className="flex justify-between border-t border-line pt-2 text-base font-bold text-ink dark:text-white">
              <span>Total:</span>
              <span>{cartSummary.total}</span>
            </p>
          </div>
          <Button
            type="button"
            className="mt-6 h-[50px] w-full rounded-none bg-brand px-10 text-xs font-medium uppercase tracking-[1.5px] hover:bg-accent"
          >
            Check Out
          </Button>
        </div>
      </div>
    </div>
  )
}
