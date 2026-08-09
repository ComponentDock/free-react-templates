import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface FaqItem {
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    question: 'Can I try Deskly before committing?',
    answer:
      'Yes — every membership includes a free day pass so you can work from the space, test the WiFi, and meet the community before you sign up.',
  },
  {
    question: 'Do you have meeting rooms available?',
    answer:
      'Absolutely. Meeting rooms for 4–20 people can be booked by the hour through the member app, and most plans include monthly room credits.',
  },
  {
    question: 'Is the space really open 24/7?',
    answer:
      'Yes. Dedicated desk and private office members get round-the-clock badge access, including weekends and holidays.',
  },
  {
    question: 'Can I receive mail and packages?',
    answer:
      'Dedicated desk and office members get a business address with mail and package handling at our front desk.',
  },
  {
    question: 'What is the cancellation policy?',
    answer:
      'Plans are month-to-month with no contracts. Cancel anytime before your next billing date — annual plans can be paused once per year.',
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Everything you need to know before you book a tour.
          </p>
        </div>
        <div className="mt-12 space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-800"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/70"
                >
                  <span className="font-display text-base font-semibold text-gray-900 dark:text-white">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200',
                      isOpen && 'rotate-180',
                    )}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={cn(
                    'grid transition-all duration-200',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    {isOpen && (
                      <p className="border-t border-gray-100 px-6 py-4 text-sm leading-relaxed text-gray-600 dark:border-gray-800 dark:text-gray-300">
                        {item.answer}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <p className="mt-10 text-center text-sm text-gray-600 dark:text-gray-400">
          Still have questions?{' '}
          <a
            href="#contact"
            className="font-semibold text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400"
          >
            Contact our team
          </a>
        </p>
      </div>
    </section>
  )
}
