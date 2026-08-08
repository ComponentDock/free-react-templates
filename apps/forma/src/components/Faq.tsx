import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How does the design consultation work?',
    answer:
      'Every project starts with a complimentary consultation. We visit your space, discuss your goals and lifestyle, and prepare a clear proposal with scope, timeline, and budget before any work begins.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Timelines depend on scope: single-room refreshes typically take 4–6 weeks, while full residential renovations run 4–8 months. Your proposal always includes a detailed schedule with milestones.',
  },
  {
    question: 'Can you work within my budget?',
    answer:
      'Yes. We are transparent about pricing from the first proposal and offer phased approaches — you can start with a design package and implement later. Our procurement team also sources trade pricing on your behalf.',
  },
  {
    question: 'Do you offer packages for different project sizes?',
    answer:
      'We offer three tiers: Signature (single rooms and styling), Studio (whole-home design with procurement), and Full-Service (renovation management from permits to installation). Each includes dedicated designer support.',
  },
  {
    question: 'Can you work with clients remotely?',
    answer:
      'Absolutely. Around 40% of our clients are out of town. We run virtual consultations, share 3D walkthroughs, and coordinate installation through vetted local partners.',
  },
] as const

export function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            FAQ
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Answers to the questions we hear most often from new clients.
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
