import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import type { AccordionItem } from '../data'
import { cn } from '@free-react-templates/ui'

export interface AccordionProps {
  items: AccordionItem[]
}

/**
 * FAQ accordion — multiple items can be open simultaneously.
 * Each header is a full-width button with a colored toggle (green = collapsed,
 * blue = expanded) and a plus/minus icon swap.
 */
export function Accordion({ items }: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set())

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <div className="flex flex-col gap-2">
      {items.map((item) => {
        const isOpen = openIds.has(item.id)
        return (
          <div key={item.id} className="bg-accordion-bg">
            <div className="flex items-center justify-between border-b border-border-row px-6 py-4">
              <h3 className="text-base font-medium text-text-header">{item.question}</h3>
              <button
                id={`${item.id}-toggle`}
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${item.id}-panel`}
                aria-label={item.question}
                onClick={() => toggle(item.id)}
                className={cn(
                  'flex h-10 w-10 flex-shrink-0 items-center justify-center rounded text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50',
                  isOpen ? 'bg-toggle-expanded' : 'bg-toggle-collapsed',
                )}
                data-icon={isOpen ? 'minus' : 'plus'}
              >
                {isOpen ? (
                  <Minus aria-hidden="true" className="h-5 w-5" />
                ) : (
                  <Plus aria-hidden="true" className="h-5 w-5" />
                )}
              </button>
            </div>
            {isOpen && (
              <div
                id={`${item.id}-panel`}
                role="region"
                aria-labelledby={`${item.id}-toggle`}
                className="border-b border-border-row px-6 py-6"
              >
                <p className="text-sm leading-relaxed text-text-body">{item.answer}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
