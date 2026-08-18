import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQ_ITEMS } from '../data'
import { cn } from '@free-react-templates/ui'

/** FAQ — heading in a left column, Bootstrap-flush-style accordion on the
    right. One item open at a time (first by default); the open item is
    teal-deep text on the teal tint background. */
export function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="bg-white" aria-label="Frequently asked questions">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-28 lg:grid-cols-12">
        <div className="hidden lg:col-span-3 lg:block" aria-hidden="true" />
        <div className="lg:col-span-8">
          <h2 className="font-display text-2xl font-bold uppercase text-brand">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 border-y border-black/10">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <div key={item.question} className={cn(i > 0 && 'border-t border-black/10')}>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      className={cn(
                        'flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium text-ink transition-colors',
                        isOpen ? 'bg-brand-tint text-brand-deep' : 'hover:bg-black/5',
                      )}
                    >
                      {item.question}
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 shrink-0 transition-transform',
                          isOpen && 'rotate-180',
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  {isOpen && (
                    <div
                      id={`faq-panel-${i}`}
                      className="px-5 pb-5 text-sm leading-relaxed text-black/60"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
