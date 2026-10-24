import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import type { AccordionItem } from '../data'

export interface AccordionProps {
  items: AccordionItem[]
  defaultOpenId?: string
}

/**
 * Flat accordion list — exclusive disclosure: opening a row closes the others
 * and re-activating the open row closes it. Rows are square and borderless;
 * a 1px hairline separates them, and the open row is the only painted row.
 */
export function Accordion({ items, defaultOpenId }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null)

  const toggle = (id: string) => {
    setOpenId((previous) => (previous === id ? null : id))
  }

  return (
    <div className="flex flex-col">
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div
            key={item.id}
            data-row=""
            className={cn(
              'border-b transition-colors duration-300',
              isOpen ? 'border-transparent' : 'border-separator',
            )}
          >
            <button
              id={`${item.id}-toggle`}
              type="button"
              aria-expanded={isOpen}
              aria-controls={`${item.id}-panel`}
              onClick={() => toggle(item.id)}
              className={cn(
                'flex w-full cursor-pointer items-center justify-between gap-4 py-[15px] text-left transition-colors duration-300',
                'focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:outline-none',
                isOpen ? 'text-accent' : 'text-label',
              )}
            >
              <span className="font-heading text-xl font-normal">{item.question}</span>
              {isOpen ? (
                <ChevronUp aria-hidden="true" className="h-[18px] w-[18px] shrink-0 text-accent" />
              ) : (
                <ChevronDown aria-hidden="true" className="h-[18px] w-[18px] shrink-0 text-label" />
              )}
            </button>
            {isOpen && (
              <div
                id={`${item.id}-panel`}
                role="region"
                aria-labelledby={`${item.id}-toggle`}
                className="pb-5"
              >
                <p className="text-base leading-normal text-body">{item.answer}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
