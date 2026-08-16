import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { faqs } from '../data'

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          {faqs.kicker}
        </span>
        <h2 className="mt-2 text-3xl font-medium leading-snug text-ink md:text-4xl">
          {faqs.heading}
        </h2>
        <p className="mt-4 leading-relaxed text-gray-600">{faqs.paragraph}</p>
        <div className="mt-10 space-y-4 text-left">
          {faqs.items.map((item, index) => {
            const open = openIndex === index
            return (
              <div key={item.question} className="overflow-hidden rounded border border-gray-200">
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-medium text-charcoal transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={cn('h-5 w-5 shrink-0 transition-transform', open && 'rotate-180')}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  className={cn(
                    'grid transition-all duration-300',
                    open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 leading-relaxed text-gray-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
