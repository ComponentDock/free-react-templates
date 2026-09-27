import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const faqItems = [
  {
    question: 'How do I search for properties?',
    answer:
      'Use the search bar on our homepage to filter by location, property type, price range, and number of bedrooms or bathrooms. Results update instantly.',
  },
  {
    question: 'Can I schedule a property viewing?',
    answer:
      'Yes! Simply click on any property listing and use the contact form to request a viewing. Our agents will get back to you within 24 hours.',
  },
  {
    question: 'What fees are involved in buying a property?',
    answer:
      'Typical fees include agent commissions, closing costs, and potential inspection fees. Our team will provide a detailed breakdown during your consultation.',
  },
  {
    question: 'Do you offer property management services?',
    answer:
      'Yes, we provide full property management for landlords including tenant screening, rent collection, maintenance coordination, and financial reporting.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-mist py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-semibold text-ink dark:text-gray-100">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-center text-gray-500 dark:text-gray-400">
          Answers to common questions about our services
        </p>

        <div className="mt-10 space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={item.question}
                className="rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between px-5 py-4 text-left font-medium text-ink dark:text-gray-100"
                >
                  {item.question}
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 shrink-0 text-gray-400 transition-transform',
                      isOpen && 'rotate-180',
                    )}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    {item.answer}
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
