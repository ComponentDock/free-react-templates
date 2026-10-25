import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { faqs } from '../data'
import { SCROLL_OFFSET, sectionChip } from '../lib/site'

/** Six independent toggles — the source does not close one row when another
 * opens, so neither does this. */
export function Faq() {
  const [open, setOpen] = useState<ReadonlyArray<number>>([])

  const toggle = (index: number) => {
    setOpen((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index],
    )
  }

  return (
    <section id="faq" className={`section-band bg-gray-50 ${SCROLL_OFFSET}`}>
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <p className={sectionChip}>Questions</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 lg:text-4xl">
            What institutions ask before signing
          </h2>
          <p className="mt-4 text-gray-600">
            The awkward ones included. If yours is not here, ask it on the contact page and we will
            answer in writing.
          </p>
        </div>

        <ul className="mt-10 divide-y divide-gray-200 border-y border-gray-200">
          {faqs.map((faq, index) => {
            const isOpen = open.includes(index)

            return (
              <li key={faq.question}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium text-gray-900"
                  >
                    <span>{faq.question}</span>
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600"
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {isOpen ? (
                    <p className="pr-12 pb-6 text-sm leading-relaxed text-gray-600">{faq.answer}</p>
                  ) : null}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
