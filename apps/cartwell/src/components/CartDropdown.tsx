import { useState, useRef, useEffect, useCallback } from 'react'
import { ShoppingCart } from 'lucide-react'
import { CartItem, type CartItemData } from './CartItem'

const initialItems: CartItemData[] = [
  { id: 1, name: 'Wireless Headphones', price: 49.99, quantity: 1, imageSeed: 'cartwell-1' },
  { id: 2, name: 'Smart Watch', price: 89.5, quantity: 1, imageSeed: 'cartwell-2' },
  { id: 3, name: 'Leather Wallet', price: 29.95, quantity: 2, imageSeed: 'cartwell-3' },
]

export function CartDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [items, setItems] = useState<CartItemData[]>(initialItems)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const menuId = 'cart-menu'

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const toggle = useCallback(() => setIsOpen((prev) => !prev), [])
  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }

    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        close()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isOpen, close])

  const handleQuantityChange = useCallback((id: number, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item,
      ),
    )
  }, [])

  const handleRemove = useCallback((id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const handleContinueShopping = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      close()
    },
    [close],
  )

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggle}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
        className="flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-medium text-white shadow-md transition-colors hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
      >
        <ShoppingCart className="h-5 w-5" />
        <span>Cart ({totalItems})</span>
      </button>

      {isOpen && (
        <div
          id={menuId}
          role="menu"
          className="absolute right-0 z-50 mt-3 w-[350px] overflow-hidden rounded-xl border border-border bg-bg-card shadow-[0_10px_34px_-20px_rgba(0,0,0,.41)]"
        >
          {/* Caret triangle */}
          <div
            className="absolute -top-[0.6em] right-6"
            style={{
              width: 0,
              height: 0,
              borderLeft: '0.6em solid transparent',
              borderRight: '0.6em solid transparent',
              borderBottom: '0.7em solid white',
            }}
            aria-hidden="true"
          />

          {/* Cart items */}
          <div className="max-h-[300px] overflow-y-auto">
            {items.length === 0 ? (
              <div className="px-4 py-8 text-center text-sm text-text-muted">
                Your cart is empty
              </div>
            ) : (
              items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onQuantityChange={handleQuantityChange}
                  onRemove={handleRemove}
                />
              ))
            )}
          </div>

          {/* Cart footer */}
          {items.length > 0 && (
            <div className="border-t border-border px-4 py-3">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-text-body">Total</span>
                <span className="text-sm font-bold text-text-body">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  role="menuitem"
                  onClick={handleContinueShopping}
                  className="text-center text-xs font-medium text-brand underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-1"
                >
                  Continue Shopping
                </a>
                <button
                  type="button"
                  role="menuitem"
                  className="w-full rounded-lg bg-brand py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
