import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { faqs } from '../data'

/** "Frequently Asked Questions" — four-item accordion; one panel open at a
 *  time. */
export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-white px-4 pb-20 pt-0">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-medium text-brand-purple lg:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => {
            const open = openIndex === index
            return (
              <div key={faq.question} className="rounded-lg border border-[#f1eef1] bg-white">
                <h3>
                  <button
                    type="button"
                    id={`faq-button-${index}`}
                    onClick={() => setOpenIndex(open ? null : index)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${index}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-medium text-brand-purple">{faq.question}</span>
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 shrink-0 text-muted transition-transform',
                        open && 'rotate-180',
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  className={cn('px-6', open ? 'block pb-5' : 'hidden')}
                >
                  <p className="text-sm leading-relaxed text-muted">{faq.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
