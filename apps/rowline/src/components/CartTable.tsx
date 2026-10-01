import { useState } from 'react'
import { initialItems, type CartItem } from '../data/products'
import { CartRow } from './CartRow'

const headerCells = [
  { label: '', scoped: false },
  { label: '', scoped: false },
  { label: 'Product', scoped: true },
  { label: 'Price', scoped: true },
  { label: 'Quantity', scoped: true },
  { label: 'total', scoped: true },
  { label: '', scoped: false },
]

export function CartTable() {
  const [items, setItems] = useState<CartItem[]>(initialItems)

  const toggleItem = (id: string) =>
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)),
    )

  const setQuantity = (id: string, quantity: number) =>
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))

  const removeItem = (id: string) => setItems((prev) => prev.filter((item) => item.id !== id))

  return (
    <div className="overflow-x-auto">
      <table className="mb-4 w-full min-w-[1000px] border-collapse bg-white text-ink shadow-[0_5px_12px_-12px_rgba(0,0,0,0.29)]">
        <thead>
          <tr className="bg-sage">
            {headerCells.map((cell, index) => (
              <th
                key={index}
                scope={cell.scoped ? 'col' : undefined}
                className="border-none p-[30px] text-left text-[13px] font-medium text-white align-bottom"
              >
                {cell.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.length === 0 ? (
            <tr>
              <td
                colSpan={7}
                className="border-none bg-white p-[30px] text-center text-[14px] text-ink"
              >
                No items to show.
              </td>
            </tr>
          ) : (
            items.map((item) => (
              <CartRow
                key={item.id}
                item={item}
                onToggle={toggleItem}
                onQuantity={setQuantity}
                onRemove={removeItem}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
