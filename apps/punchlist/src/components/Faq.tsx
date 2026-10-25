import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { FAQS, FAQ_COPY } from '../content'
import { BandHeading, Container } from './ui'

/**
 * Five real disclosures: one open at a time, `aria-expanded` and
 * `aria-controls` on the trigger, the closed panel absent from the tree.
 * Escape closes the open row. The reference had none of this.
 */
export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    if (openIndex === null) {
      return undefined
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenIndex(null)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [openIndex])

  return (
    <section id="faq" className="section bg-white dark:bg-gray-950">
      <Container>
        <div className="mx-auto max-w-3xl">
          <BandHeading
            pill={FAQ_COPY.pill}
            heading={FAQ_COPY.heading}
            lede={FAQ_COPY.lede}
            centered
          />

          <div className="mt-14 divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
            {FAQS.map((faq, index) => {
              const open = openIndex === index
              return (
                <div key={faq.question}>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={`faq-answer-${index}`}
                      onClick={() => setOpenIndex(open ? null : index)}
                      className="flex w-full items-center justify-between gap-4 py-6 text-left"
                    >
                      <span className="text-lg font-semibold leading-6 text-gray-900 dark:text-white">
                        {faq.question}
                      </span>
                      <span
                        aria-hidden="true"
                        className={cn(
                          'flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xl font-normal leading-none text-gray-700 transition-transform duration-300 dark:bg-gray-800 dark:text-gray-200',
                          open && 'rotate-45',
                        )}
                      >
                        +
                      </span>
                    </button>
                  </h3>
                  {open ? (
                    <div
                      id={`faq-answer-${index}`}
                      className="pb-6 pr-12 text-base leading-7 text-gray-600 dark:text-gray-300"
                    >
                      {faq.answer}
                    </div>
                  ) : null}
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
