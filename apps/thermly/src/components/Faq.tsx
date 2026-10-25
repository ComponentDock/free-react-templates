import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { faqs } from '../data'

/**
 * Five hairline-divided rows with independent expanded state — several can be
 * open at once, unlike the exclusive accordion on the social-network design.
 */
export function Faq() {
  const [openRows, setOpenRows] = useState<number[]>([])

  const toggle = (index: number) => {
    setOpenRows((current) =>
      current.includes(index) ? current.filter((row) => row !== index) : [...current, index],
    )
  }

  return (
    <section id="faq" className="section-band scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700">
            Questions
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
            Before you book
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            The things people ask on the phone, answered here so you do not have to call.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl divide-y divide-gray-200">
          {faqs.map((faq, index) => {
            const isOpen = openRows.includes(index)

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
                  <span className="text-lg font-semibold text-ink-800">{faq.question}</span>
                  <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-ink-600">
                    {isOpen ? (
                      <Minus aria-hidden="true" data-icon="minus" className="h-4 w-4" />
                    ) : (
                      <Plus aria-hidden="true" data-icon="plus" className="h-4 w-4" />
                    )}
                  </span>
                </button>
                {isOpen ? (
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-toggle-${index}`}
                  >
                    <p className="pt-4 text-ink-600">{faq.answer}</p>
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
