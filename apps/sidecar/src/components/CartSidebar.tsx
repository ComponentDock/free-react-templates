import { X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export interface CartItem {
  id: string
  name: string
  price: number
  image: string
}

interface CartSidebarProps {
  isOpen: boolean
  items: CartItem[]
  onClose: () => void
  onRemove: (id: string) => void
}

export function CartSidebar({ isOpen, items, onClose, onRemove }: CartSidebarProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0)

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/50"
        onClick={onClose}
        data-testid="cart-overlay"
      />

      {/* Sidebar panel */}
      <aside
        className="fixed right-0 top-0 z-50 flex h-full w-[340px] flex-col bg-sidebar-bg shadow-xl"
        data-testid="cart-sidebar"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <button
            onClick={onClose}
            className="text-text-primary hover:text-brand transition-colors"
            aria-label="Close shopping bag"
          >
            <X className="h-5 w-5" />
          </button>
          <h2 className="text-sm font-bold uppercase tracking-wider text-text-primary">Your Bag</h2>
          <div className="w-5" /> {/* spacer for centering */}
        </div>

        {/* Product list */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.map((item) => (
            <div
              key={item.id}
              className={cn(
                'flex items-start gap-4 py-4',
                item.id !== items[items.length - 1]?.id && 'border-b border-border',
              )}
              data-testid="cart-item"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-[80px] w-[80px] object-cover flex-shrink-0"
              />
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-medium text-text-primary">{item.name}</h3>
                <p className="mt-1 text-sm font-semibold text-text-primary">
                  ${item.price.toFixed(2)}
                </p>
                <button
                  onClick={() => onRemove(item.id)}
                  className="mt-2 text-xs text-brand underline hover:text-brand-hover transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-border px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs text-text-secondary">Subtotal</span>
            <span className="text-base font-bold text-text-primary">${subtotal.toFixed(2)}</span>
          </div>
          <button className="w-full rounded bg-text-primary py-3 text-sm font-semibold text-white hover:bg-text-primary/90 transition-colors">
            Checkout
          </button>
        </div>
      </aside>
    </>
  )
}
