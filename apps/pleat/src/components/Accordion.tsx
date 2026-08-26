import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { AccordionItem } from '../data'
import { cn } from '@free-react-templates/ui'

export interface AccordionProps {
  items: AccordionItem[]
  defaultOpenId?: string
}

/**
 * FAQ accordion — multiple items can be open simultaneously.
 * Each header is a full-width button with a rotating chevron indicator.
 * Active state uses green accent (#72c02c) on the left border and text.
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
    <div className="flex flex-col gap-[10px]">
      {items.map((item) => {
        const isOpen = openIds.has(item.id)
        return (
          <div
            key={item.id}
            className={cn(
              'rounded bg-accordion-bg transition-all',
              isOpen ? 'border border-accent' : 'border border-border-row',
            )}
          >
            <button
              id={`${item.id}-toggle`}
              type="button"
              aria-expanded={isOpen}
              aria-controls={`${item.id}-panel`}
              aria-label={item.question}
              onClick={() => toggle(item.id)}
              className={cn(
                'flex w-full items-center px-[40px] py-[15px] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50',
                isOpen ? 'text-accent' : 'text-muted',
              )}
            >
              <ChevronDown
                aria-hidden="true"
                className={cn(
                  'mr-3 h-4 w-4 flex-shrink-0 transition-transform duration-200',
                  isOpen ? 'rotate-180 text-accent' : 'text-muted',
                )}
              />
              <h3 className="text-sm font-normal">{item.question}</h3>
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
