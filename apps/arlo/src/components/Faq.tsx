import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const faqs = [
  {
    question: 'What services do you offer?',
    answer:
      'End-to-end product development: product strategy, UI/UX design, frontend and backend engineering, and performance optimization.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Reach out through the contact form and we will schedule a discovery call to discuss your project, timeline, and goals.',
  },
  {
    question: 'How many projects do you take on at a time?',
    answer:
      'I typically take on 2-3 projects at a time to ensure dedicated attention. Current availability is shared in our first conversation.',
  },
  {
    question: 'Do you work with startups and agencies?',
    answer:
      'Yes — I partner with startups, agencies, and established companies on products ranging from MVPs to large-scale platforms.',
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-gray-50 py-20 dark:bg-gray-900 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-center text-lg text-gray-600 dark:text-gray-400">
          Find answers to common questions about my services, process, and availability.
        </p>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const open = openIndex === index
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-800"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : index)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-medium text-gray-900 dark:text-white">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 shrink-0 text-gray-400 transition-transform',
                      open && 'rotate-180',
                    )}
                    aria-hidden="true"
                  />
                </button>
                {open && (
                  <p className="px-6 pb-5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
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
