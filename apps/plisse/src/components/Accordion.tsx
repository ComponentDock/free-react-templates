import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import type { AccordionItem } from '../data'

export interface AccordionProps {
  items: AccordionItem[]
  defaultOpenId?: string
}

/**
 * Single-open accordion — the source passes `data-parent="#accordion_1"`, so
 * opening a row closes whichever row was open. The open row becomes a solid
 * accent bar with white text and an up-chevron; closed rows keep the hairline
 * border and the muted label with a down-chevron. The chevron sits 15px from
 * the row's left edge and the label is padded to 40px, as in the source
 * stylesheet.
 */
export function Accordion({ items, defaultOpenId }: AccordionProps) {
  const [openId, setOpenId] = useState<string | undefined>(defaultOpenId)

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? undefined : id))
  }

  return (
    <div className="flex flex-col gap-[10px]">
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div
            key={item.id}
            data-testid={`${item.id}-item`}
            className={cn('rounded bg-item-bg', isOpen && 'z-[2]')}
          >
            <h3 className="m-0 text-base font-normal">
              <button
                id={`${item.id}-toggle`}
                data-testid={`${item.id}-toggle`}
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${item.id}-panel`}
                onClick={() => toggle(item.id)}
                className={cn(
                  'relative block w-full border py-[15px] pr-[15px] pl-[40px] text-left text-base font-normal leading-normal focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:outline-none',
                  isOpen
                    ? 'border-transparent bg-accent text-white'
                    : 'border-border-row bg-item-bg text-muted',
                )}
              >
                <span
                  aria-hidden="true"
                  data-testid={`${item.id}-icon`}
                  className="pointer-events-none absolute top-1/2 left-[15px] -translate-y-1/2"
                >
                  {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </span>
                {item.question}
              </button>
            </h3>
            {isOpen && (
              <div
                id={`${item.id}-panel`}
                role="region"
                aria-labelledby={`${item.id}-toggle`}
                className="p-5 text-body-text"
              >
                <p className="text-base leading-normal">{item.answer}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
