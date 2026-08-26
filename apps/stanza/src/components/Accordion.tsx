import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { AccordionItem } from '../data'
import { cn } from '@free-react-templates/ui'

export interface AccordionProps {
  items: AccordionItem[]
}

/**
 * FAQ accordion — multiple items can be open simultaneously.
 * Each header is a full-width button with a rotating chevron indicator.
 * Active state uses blue-600 accent on the left border.
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
    <div className="flex flex-col gap-3">
      {items.map((item) => {
        const isOpen = openIds.has(item.id)
        return (
          <div
            key={item.id}
            className={cn(
              'rounded-xl border bg-accordion-bg shadow-sm transition-all',
              isOpen ? 'border-accent' : 'border-border-row',
            )}
          >
            <button
              id={`${item.id}-toggle`}
              type="button"
              aria-expanded={isOpen}
              aria-controls={`${item.id}-panel`}
              aria-label={item.question}
              onClick={() => toggle(item.id)}
              className="flex w-full items-center justify-between px-6 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
            >
              <h3 className="text-base font-medium text-text-header">{item.question}</h3>
              <ChevronDown
                aria-hidden="true"
                className={cn(
                  'h-5 w-5 flex-shrink-0 text-accent transition-transform duration-200',
                  isOpen && 'rotate-180',
                )}
              />
            </button>
            {isOpen && (
              <div
                id={`${item.id}-panel`}
                role="region"
                aria-labelledby={`${item.id}-toggle`}
                className="border-t border-border-row px-6 py-5"
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
