import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Is Appy really free to use?',
    answer:
      'Yes, Appy is completely free to use — download it today and start building without paying a cent.',
  },
  {
    question: 'Can I customize the design?',
    answer:
      'Absolutely — every section, color, and layout block is built to be easily editable, so the page can match your brand.',
  },
  {
    question: 'Does Appy support my app platform?',
    answer:
      'Appy works for iOS, Android, and the web, with responsive layouts that look great on every device.',
  },
] as const

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-paper py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[1.5px] text-muted">FAQ</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => {
            const open = openIndex === index
            return (
              <div
                key={faq.question}
                className="rounded-xl border-l-4 border-primary-600 bg-white shadow-sm dark:bg-gray-900"
              >
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <h3 className="font-display text-lg font-semibold text-ink dark:text-white">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary-600 transition-transform ${
                      open ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {open && (
                  <p
                    id={`faq-answer-${index}`}
                    className="border-t border-gray-100 px-6 py-5 leading-relaxed text-muted dark:border-gray-800 dark:text-gray-400"
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
