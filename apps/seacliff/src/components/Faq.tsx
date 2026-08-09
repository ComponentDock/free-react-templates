import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { Reveal } from './Reveal'

interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: 'What are check-in and check-out times?',
    answer:
      'Check-in begins at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out are available on request, subject to availability.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'Free cancellation is available up to 48 hours before arrival. Within 48 hours, the first night is charged.',
  },
  {
    question: 'Do you allow pets?',
    answer:
      'Yes — we welcome pets up to 25 kg. A one-time cleaning fee applies and pet-friendly rooms are limited, so please let us know when booking.',
  },
  {
    question: 'Is airport transfer available?',
    answer:
      'Yes. Our concierge can arrange private transfers from Miami International Airport. Let us know your flight details and we will take care of the rest.',
  },
  {
    question: 'Do you have room service?',
    answer:
      'Absolutely. In-room dining is available 24/7 with a full menu of local and international favorites.',
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-white py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <Reveal>
          <p className="text-center text-sm font-bold uppercase tracking-wider text-accent-600 dark:text-accent-400">
            Good to Know
          </p>
          <h2 className="mt-2 text-center font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const open = openIndex === index
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : index)}
                  aria-expanded={open}
                  aria-controls={`faq-panel-${index}`}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-bold text-gray-900 dark:text-white sm:text-base">
                    {faq.question}
                  </span>
                  <span
                    className={cn(
                      'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-300 text-gray-700 dark:border-gray-700 dark:text-gray-200',
                      open && 'border-accent-500 bg-accent-500 text-white',
                    )}
                    aria-hidden="true"
                  >
                    {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div id={`faq-panel-${index}`} className={cn('px-5', open ? 'pb-5' : 'hidden')}>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
