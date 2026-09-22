import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'What time is check-in and check-out?',
    answer:
      'Check-in is available from 3:00 PM onwards. Check-out is at 12:00 PM (noon). Early check-in and late check-out can be arranged subject to availability — please contact our concierge.',
  },
  {
    question: 'Does AzurePeak offer airport transfers?',
    answer:
      'Yes, we provide complimentary airport transfers for guests staying 3 nights or more. For shorter stays, private transfer services can be arranged at an additional cost.',
  },
  {
    question: 'Is the resort pet-friendly?',
    answer:
      'We welcome well-behaved dogs in our designated Pet-Friendly Rooms. A pet fee applies, and advance notice is appreciated so we can prepare your room accordingly.',
  },
  {
    question: 'What dining options are available?',
    answer:
      'AzurePeak features three on-site dining venues: The Azure (fine dining), Coral Bar (cocktails & light bites), and Sunrise Cafe (breakfast). Room service is available 24 hours.',
  },
  {
    question: 'Can I cancel or modify my reservation?',
    answer:
      'Free cancellation is available up to 48 hours before your scheduled check-in. Modifications can be made through our website or by contacting our reservations team directly.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
            Need Help?
          </p>
          <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 shrink-0 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 shrink-0 text-gray-500" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-4">
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </p>
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
