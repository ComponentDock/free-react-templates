import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { faqItems } from '../data'

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-charcoal/70">
            Answers to the questions we hear most often from new patients.
          </p>
        </div>
        <div className="mt-12 space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={item.question}
                className="rounded-xl border border-gray-200 bg-white shadow-sm"
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-charcoal transition-colors hover:text-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint"
                  >
                    {item.question}
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 shrink-0 text-mint transition-transform',
                        isOpen && 'rotate-180',
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={`faq-panel-${index}`}
                    className="px-6 pb-5 text-sm leading-relaxed text-charcoal/80"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
