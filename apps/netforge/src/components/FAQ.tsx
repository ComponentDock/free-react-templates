import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What services does Netforge offer?',
    answer:
      'We offer web development, cloud solutions, cybersecurity, and digital marketing services tailored to your business needs.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary based on scope and complexity. A standard website takes 4-8 weeks, while enterprise solutions may take 3-6 months.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer:
      'Yes, we offer 24/7 technical support and maintenance packages to ensure your systems run smoothly after launch.',
  },
  {
    question: 'What industries do you work with?',
    answer:
      'We serve clients across healthcare, finance, e-commerce, education, and various other industries seeking digital transformation.',
  },
] as const

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="bg-white py-20 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className="rounded-lg border border-gray-200 dark:border-gray-800"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-50 dark:text-white dark:hover:bg-gray-900"
                >
                  {faq.question}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {faq.answer}
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
