import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { faqBadge, faqHeading, faqLead, faqs } from '../data'

/**
 * Five hairline-divided rows with **exclusive** expansion: opening one closes
 * the other, which is what the reference's script does. The glyph is one `+`
 * rotated 45° rather than a plus/minus swap, so the control never jumps size.
 */
export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section id="faq" className="section-band scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700">
            {faqBadge}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {faqHeading}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{faqLead}</p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl divide-y divide-gray-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div key={faq.question} className="py-6">
                <button
                  id={`faq-toggle-${index}`}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <span
                    aria-hidden="true"
                    data-open={isOpen}
                    className={cn(
                      'ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-ink-600 transition-transform duration-300',
                      isOpen && 'rotate-45',
                    )}
                  >
                    <Plus aria-hidden="true" className="h-4 w-4" />
                  </span>
                </button>
                {isOpen ? (
                  <div id={`faq-panel-${index}`} role="region" aria-labelledby={`faq-toggle-${index}`}>
                    <p className="pt-4 text-gray-600">{faq.answer}</p>
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
