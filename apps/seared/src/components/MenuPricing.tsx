import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const menuItems = [
  {
    name: 'Warm Spinach Dip & Chips',
    desc: 'Creamy spinach dip served with seasoned tortilla chips.',
    price: '$14.50',
  },
  {
    name: 'Key West Machos',
    desc: 'Loaded nachos with shrimp, jalapenos, cheese, and salsa.',
    price: '$16.00',
  },
  {
    name: 'Crispy Onion Rings',
    desc: 'Golden beer-battered onion rings with chipotle aioli.',
    price: '$11.50',
  },
  {
    name: 'Lobster & Shrimp Quesadilla',
    desc: 'Flour tortilla filled with lobster, shrimp, cheese, and peppers.',
    price: '$19.00',
  },
  {
    name: 'Grilled Chicken Caesar',
    desc: 'Char-grilled chicken over romaine with parmesan and croutons.',
    price: '$15.50',
  },
  {
    name: 'Pan-Seared Tuna',
    desc: 'Sesame-crusted tuna with wasabi cream and pickled ginger.',
    price: '$22.00',
  },
]

export function MenuPricing() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <h2
          className="mb-12 text-center text-3xl font-bold text-ink sm:text-4xl"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Menu List with Price
        </h2>

        <div className="space-y-3">
          {menuItems.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.name} className="rounded-lg border border-border">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left transition hover:bg-light-bg"
                  aria-expanded={isOpen}
                >
                  <div>
                    <h4 className="text-base font-bold text-ink">{item.name}</h4>
                    {!isOpen && <p className="mt-1 text-sm text-body">{item.desc}</p>}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-bold text-brand">{item.price}</span>
                    {isOpen ? (
                      <ChevronUp size={18} className="text-body" />
                    ) : (
                      <ChevronDown size={18} className="text-body" />
                    )}
                  </div>
                </button>
                {isOpen && (
                  <div className="border-t border-border px-6 pb-4 pt-3">
                    <p className="text-sm text-body">{item.desc}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
