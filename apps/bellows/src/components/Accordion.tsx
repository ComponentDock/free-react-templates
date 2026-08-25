import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import type { AccordionPanel } from '../panels'
import { PriceRow } from './PriceRow'

export interface AccordionProps {
  panels: AccordionPanel[]
}

/**
 * Single-open accordion (reference: Bootstrap `data-parent` collapse).
 * Panel 1 open by default; headers are full-width toggle buttons with a
 * Minus/Plus icon swap; bodies render only while open and act as labelled
 * regions for assistive tech.
 */
export function Accordion({ panels }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div>
      {panels.map((panel, index) => {
        const isOpen = openIndex === index
        return (
          <div key={panel.id}>
            <div
              className={
                index < panels.length - 1 ? 'border-b border-separator px-6 py-4' : 'px-6 py-4'
              }
            >
              <button
                id={`${panel.id}-toggle`}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panel.id}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between bg-transparent p-0 text-[20px] font-normal capitalize tracking-normal text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
              >
                {panel.title}
                {isOpen ? (
                  <Minus aria-hidden="true" data-icon="minus" className="h-6 w-6" />
                ) : (
                  <Plus aria-hidden="true" data-icon="plus" className="h-6 w-6" />
                )}
              </button>
            </div>
            {isOpen && (
              <div
                id={panel.id}
                role="region"
                aria-labelledby={`${panel.id}-toggle`}
                className="bg-[rgba(0,0,0,0.02)] px-6 py-0 md:py-12"
              >
                <ul className="list-none p-0">
                  {panel.rows.map((row) => (
                    <PriceRow key={row.name} row={row} />
                  ))}
                </ul>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
