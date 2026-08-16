import { useEffect } from 'react'
import { X } from 'lucide-react'
import type { Product } from '../data'

export interface CartItem {
  product: Product
  quantity: number
}

interface CartDrawerProps {
  items: CartItem[]
  total: number
  onClose: () => void
}

/** Cart dropdown: item rows (thumbnail, name, qty, price), the order
 *  total, and View Cart / Check Out buttons. Closes on Escape or overlay. */
export function CartDrawer({ items, total, onClose }: CartDrawerProps) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Shopping cart"
      onClick={onClose}
      className="fixed inset-0 z-[1000] flex justify-end bg-black/40"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="flex h-full w-full max-w-[420px] flex-col overflow-y-auto bg-white p-6"
      >
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <h3 className="text-[18px] font-medium text-ink-soft">Your Cart</h3>
          <button
            type="button"
            aria-label="Close cart"
            onClick={onClose}
            className="p-1 text-muted transition-colors hover:text-ink-soft"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {items.length === 0 ? (
          <p className="py-10 text-center text-[14px] text-muted">Your cart is empty.</p>
        ) : (
          <ul className="flex-1 divide-y divide-gray-100">
            {items.map(({ product, quantity }) => (
              <li key={product.id} className="flex items-center gap-4 py-4">
                <img src={product.image} alt="" className="h-16 w-16 shrink-0 object-cover" />
                <div className="flex-1">
                  <p className="text-[14px] text-ink-soft">{product.name}</p>
                  <p className="mt-1 text-[13px] text-muted">
                    {quantity} × ${product.price.toFixed(2)}
                  </p>
                </div>
                <p className="text-[14px] font-medium text-ink-soft">
                  ${(product.price * quantity).toFixed(2)}
                </p>
              </li>
            ))}
          </ul>
        )}

        <div className="border-t border-gray-100 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-[14px] uppercase tracking-wide text-muted">Total</span>
            <span className="text-[18px] font-medium text-ink-soft">${total.toFixed(2)}</span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <a href="#" onClick={onClose} className="btn-pill-light">
              View Cart
            </a>
            <a href="#" onClick={onClose} className="btn-pill-brand">
              Check Out
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
