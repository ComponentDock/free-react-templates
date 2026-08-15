import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { faqItems } from '../data'

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" aria-label="FAQ" className="bg-white px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-medium text-heading md:text-[46px]">Frequently Ask</h2>
        </div>
        <div className="space-y-4">
          {faqItems.map((item, i) => {
            const open = openIndex === i
            return (
              <div key={item.question} className="rounded-lg border border-faq-border bg-white">
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-lg font-normal text-heading"
                  >
                    {item.question}
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 shrink-0 text-rainbow-3 transition-transform',
                        open && 'rotate-180',
                      )}
                    />
                  </button>
                </h3>
                {open && (
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-label={item.question}
                    className="px-6 pb-5 pl-[76px] text-base leading-7 text-body"
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
