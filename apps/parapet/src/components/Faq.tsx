import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How long does a typical construction project take?',
    answer:
      'Project timelines vary based on scope and complexity. A typical residential project takes 3-6 months, while commercial projects can range from 6-18 months. We provide detailed timelines during the initial consultation and keep you updated throughout every phase.',
  },
  {
    question: 'Do you handle permits and approvals?',
    answer:
      'Yes, we manage the entire permit process including building permits, zoning approvals, and inspections. Our team has established relationships with local authorities to help streamline the approval process.',
  },
  {
    question: 'What types of projects do you build?',
    answer:
      'We build custom homes, commercial buildings, and industrial facilities, and we handle renovations and remodeling of all sizes. Our team also offers interior design and green building services for environmentally conscious clients.',
  },
  {
    question: 'How do you price a construction project?',
    answer:
      'Every project receives a detailed, itemized estimate after the initial consultation and planning phase. Our pricing is transparent with no hidden fees, and we provide regular progress reports so you always know where your budget stands.',
  },
  {
    question: 'Do you offer warranties on your work?',
    answer:
      'Yes, all of our work is backed by a comprehensive warranty covering both materials and workmanship. We stand behind every project we deliver and are always available for post-completion support.',
  },
] as const

export function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Find answers to common questions about our construction services and project process.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = open === index
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-800"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-gray-900 dark:text-white"
                  >
                    {faq.question}
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 text-primary-600 transition-transform dark:text-primary-400 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {isOpen && (
                  <p className="border-t border-gray-100 px-6 py-5 text-gray-600 dark:border-gray-700 dark:text-gray-300">
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
