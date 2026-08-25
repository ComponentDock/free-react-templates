import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { Cloud, FolderOpen, Mail } from 'lucide-react'
import type { AccordionPanel } from '../panels'
import { ServiceRow } from './ServiceRow'

export interface AccordionProps {
  panels: AccordionPanel[]
}

const ICONS: Record<string, typeof FolderOpen> = {
  'my-files': FolderOpen,
  mail: Mail,
  cloud: Cloud,
}

/**
 * Single-open accordion (reference: Bootstrap `data-parent` collapse).
 * Panel 1 open by default; headers are full-width toggle buttons with a
 * 40px circular icon + title on the left and a count pill on the right.
 * NO chevron (the reference comments it out). Active styling is driven by
 * aria-expanded: golden gradient + white circle / black glyph + gold pill.
 */
export function Accordion({ panels }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div>
      {panels.map((panel, index) => {
        const isOpen = openIndex === index
        const Icon = ICONS[panel.id] ?? FolderOpen

        return (
          <div key={panel.id}>
            {/* Header button */}
            <div className="border-b border-separator p-0">
              <button
                id={`${panel.id}-toggle`}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panel.id}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className={cn(
                  'flex w-full items-center justify-between border-none bg-transparent py-3 pl-4 pr-4 text-[18px] font-normal tracking-normal text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20',
                  isOpen && 'bg-gradient-to-b from-brand-gold-light to-brand-gold',
                )}
              >
                {/* Left: icon circle + title */}
                <div className="flex items-center">
                  <div
                    className={cn(
                      'flex h-10 w-10 shrink-0 items-center justify-center rounded-full',
                      isOpen ? 'bg-white text-black' : 'bg-brand-gold text-white',
                    )}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="ml-3 text-[16px] font-normal">{panel.title}</h3>
                </div>

                {/* Right: count pill */}
                <span
                  className={cn(
                    'rounded-[40px] border px-[15px] py-[5px] text-[16px]',
                    isOpen
                      ? 'border-pill-active-border bg-pill-active-bg text-white'
                      : 'border-pill-border bg-transparent text-black',
                  )}
                >
                  {panel.badge}
                </span>
              </button>
            </div>

            {/* Panel body — rendered only when open */}
            {isOpen && (
              <div
                id={panel.id}
                role="region"
                aria-labelledby={`${panel.id}-toggle`}
                className="bg-panel-body p-0"
              >
                <ul className="list-none p-0">
                  {panel.rows.map((row) => (
                    <ServiceRow key={row.number} row={row} />
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
