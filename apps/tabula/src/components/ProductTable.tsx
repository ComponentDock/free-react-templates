import { Fragment, useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { products } from '../data/products'
import { AccordionPanel } from './AccordionPanel'

const headerCells = ['#', 'Product Name', 'Price', 'Quantity', 'Total', ''] as const

/** Collapsible product table — single-open accordion rows on a white card. */
export function ProductTable() {
  // Row 1 open initially — the canonical starting state.
  const [openRowId, setOpenRowId] = useState<string | null>('1')

  const toggleRow = (id: string) => {
    setOpenRowId((prev) => (prev === id ? null : id))
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[1000px] border-collapse text-cell shadow-[0_5px_12px_-12px_var(--color-cardshadow)]">
        <thead>
          <tr>
            {headerCells.map((label) => (
              <th
                key={label === '' ? 'icon' : label}
                scope="col"
                aria-label={label === '' ? 'Details' : undefined}
                className="border-b-2 border-rule bg-white p-[30px] text-left text-[14px] font-bold text-heading"
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            const isOpen = openRowId === product.id
            return (
              <Fragment key={product.id}>
                <tr
                  tabIndex={0}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${product.id}`}
                  onClick={() => toggleRow(product.id)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault()
                      toggleRow(product.id)
                    }
                  }}
                  className={cn(
                    'cursor-pointer border-b-2 border-rule transition-colors duration-300',
                    isOpen ? 'bg-openrow' : 'bg-white hover:bg-openrow',
                  )}
                >
                  <th
                    scope="row"
                    className="border-none p-[30px] text-left text-[14px] font-bold text-cell"
                  >
                    {product.n}
                  </th>
                  <td className="border-none p-[30px] text-[14px]">{product.name}</td>
                  <td className="border-none p-[30px] text-[14px]">{product.price}</td>
                  <td className="border-none p-[30px] text-[14px]">{product.quantity}</td>
                  <td className="border-none p-[30px] text-[14px]">{product.total}</td>
                  <td className="border-none p-[30px] text-[14px]">
                    {isOpen ? (
                      <ChevronUp aria-hidden="true" className="h-3 w-3 text-accent" />
                    ) : (
                      <ChevronDown aria-hidden="true" className="h-3 w-3 text-accent" />
                    )}
                  </td>
                </tr>
                <AccordionPanel product={product} isOpen={isOpen} />
              </Fragment>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
