import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { FAQS } from '../data'

/* FAQ recreated from the source's frequently_area: six accordion rows with
   a dashed divider, one open at a time (the source's questions were
   identical placeholder boilerplate — paraphrased into distinct
   gaming/community questions of the same kind). */

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <div className="relative mb-20 text-center">
          <h2
            aria-hidden="true"
            className="font-display text-7xl font-bold leading-[60px] text-brand opacity-10"
          >
            Frequently Asked Questions
          </h2>
          <h2 className="font-display -mt-10 text-4xl font-bold text-ink dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>
        <div>
          {FAQS.map((item, index) => {
            const open = openIndex === index
            return (
              <div
                key={item.question}
                className={cn(
                  'border-b border-dashed border-gray-300 dark:border-gray-700',
                  index === FAQS.length - 1 && 'border-none',
                )}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                >
                  <h3 className="font-display text-lg font-semibold text-purple-ink dark:text-brand-2">
                    {item.question}
                  </h3>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 shrink-0 text-purple-ink transition-transform duration-300 dark:text-brand-2',
                      open && 'rotate-180',
                    )}
                    aria-hidden="true"
                  />
                </button>
                {open ? (
                  <p
                    id={`faq-panel-${index}`}
                    className="pb-6 pr-8 leading-relaxed text-gray-600 dark:text-gray-300"
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
