import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { PANELS } from '../panels'

export function Accordion() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="custom-accordion" id="accordion_1">
      {PANELS.map((panel, index) => {
        const isOpen = openIndex === index
        return (
          <div key={panel.id} className="accordion-item">
            <h2 className="mb-0">
              <button
                id={`${panel.id}-toggle`}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panel.id}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className={cn(
                  'btn-link w-full text-left p-0 relative',
                  isOpen ? 'text-header-active' : 'text-header-inactive',
                )}
              >
                {panel.title}
                <span
                  className={cn(
                    'absolute right-0 top-1/2 -translate-y-1/2 p-[1px_5px] rounded-[4px] text-[18px]',
                    isOpen
                      ? 'bg-header-active text-white'
                      : 'bg-icon-bg-inactive text-header-inactive',
                  )}
                  aria-hidden="true"
                >
                  {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </span>
              </button>
            </h2>
            {isOpen && (
              <div
                id={panel.id}
                role="region"
                aria-labelledby={`${panel.id}-toggle`}
                className="collapse-body bg-body-bg p-5"
              >
                <div className="accordion-body text-body-text">{panel.content}</div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
