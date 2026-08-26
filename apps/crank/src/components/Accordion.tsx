import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import type { AccordionItem } from '../data'
import { cn } from '@free-react-templates/ui'

export interface AccordionProps {
  items: AccordionItem[]
  defaultOpenId?: string
}

/**
 * FAQ accordion — multiple items can be open simultaneously.
 * Each header is a full-width button with a plus/minus icon indicator.
 * Active state uses green accent (#72c02c) on the text.
 */
export function Accordion({ items, defaultOpenId }: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(
    () => new Set(defaultOpenId ? [defaultOpenId] : []),
  )

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
          <div key={item.id} className="bg-accordion-bg transition-all">
            <button
              id={`${item.id}-toggle`}
              type="button"
              aria-expanded={isOpen}
              aria-controls={`${item.id}-panel`}
              aria-label={item.question}
              onClick={() => toggle(item.id)}
              className={cn(
                'flex w-full items-center px-10 py-[15px] text-left font-sans text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50',
                isOpen ? 'text-accent' : 'text-muted',
              )}
            >
              <span aria-hidden="true" className="mr-3 flex-shrink-0">
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
              {item.question}
            </button>
            {isOpen && (
              <div
                id={`${item.id}-panel`}
                role="region"
                aria-labelledby={`${item.id}-toggle`}
                className="px-5 pb-5 pt-0"
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
