import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { faqItems } from '../data'

/**
 * FAQ accordion (reference: Bootstrap accordion-flush). Single-open with the
 * first item expanded; the active button adopts the teal-on-tint treatment.
 * Panels render conditionally so closed content is truly absent.
 */
export function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" aria-label="Frequently asked questions" className="py-[7rem]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="hidden lg:col-span-3 lg:block" aria-hidden="true" />
          <div className="lg:col-span-8">
            <h2 className="mb-8 font-heading text-2xl font-bold uppercase tracking-wide text-brand">
              Frequently Asked Questions
            </h2>
            <div className="border-t border-black/10">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index
                return (
                  <div key={item.question} className="border-b border-black/10">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className={cn(
                        'flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[18px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20',
                        isOpen ? 'bg-brand-tint text-brand-deep' : 'bg-transparent text-ink',
                      )}
                    >
                      {item.question}
                      <ChevronDown
                        className={cn(
                          'h-5 w-5 shrink-0 transition-transform',
                          isOpen && 'rotate-180',
                        )}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen && (
                      <div
                        id={`faq-panel-${index}`}
                        role="region"
                        aria-label={`Answer for ${item.question}`}
                        className="bg-brand-tint px-5 pb-5"
                      >
                        <p className="text-sm leading-relaxed text-black/70">{item.answer}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
