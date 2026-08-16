import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { sizes, type Product } from '../data'

interface QuickViewModalProps {
  product: Product
  onAddToCart: (product: Product) => void
  onClose: () => void
}

/** Product quick-view modal: image, name, price, description, a size
 *  select (S/M/L/XL) and an "Add to cart" pill. Closes on Escape or
 *  overlay click. */
export function QuickViewModal({ product, onAddToCart, onClose }: QuickViewModalProps) {
  const [size, setSize] = useState<string>(sizes[0]!)

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
      aria-label={`Quick view ${product.name}`}
      onClick={onClose}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/40 p-4"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="grid w-full max-w-[900px] grid-cols-1 overflow-hidden bg-white shadow-xl md:grid-cols-2"
      >
        <img src={product.image} alt={product.name} className="aspect-[4/5] w-full object-cover" />
        <div className="relative flex flex-col justify-center p-8">
          <button
            type="button"
            aria-label="Close quick view"
            onClick={onClose}
            className="absolute right-4 top-4 p-1 text-muted transition-colors hover:text-ink-soft"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
          <h3 className="text-[20px] font-medium text-ink-soft">{product.name}</h3>
          <p className="mt-2 text-[18px] font-medium text-ink-soft">${product.price.toFixed(2)}</p>
          <p className="mt-4 text-[14px] leading-relaxed text-muted">{product.description}</p>

          <label htmlFor="quick-view-size" className="mt-6 block">
            <span className="text-[15px] font-medium uppercase tracking-wide text-ink-soft">
              Size
            </span>
            <select
              id="quick-view-size"
              value={size}
              onChange={(event) => setSize(event.target.value)}
              className="mt-2 block h-[46px] w-full border border-[#e6e6e6] bg-white px-3 text-[14px] text-ink-soft focus:border-brand focus:outline-none"
            >
              {sizes.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="btn-pill-brand mt-6"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
