import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { faqItems } from '../data'

/** FAQ accordion — five expandable questions, first one open by default. */
export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-normal text-primary-950">Frequently Ask Question</h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqItems.map((item, index) => {
            const open = openIndex === index
            return (
              <div
                key={item.question}
                className={cn(
                  'rounded-md border px-6 transition-colors',
                  open ? 'border-accent-500' : 'border-line',
                )}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : index)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-button-${index}`}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium text-primary-950"
                  >
                    {item.question}
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 shrink-0 text-accent-600 transition-transform',
                        open && 'rotate-180',
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {open ? (
                  <p
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-button-${index}`}
                    className="pb-6 text-sm leading-7 text-mute-500"
                  >
                    {item.answer}
                  </p>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
