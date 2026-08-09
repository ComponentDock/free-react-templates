import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface FaqItem {
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    question: 'How does the AI financial advisor work?',
    answer:
      'Finley analyzes your accounts, spending patterns, and financial goals to build a personalized plan. It monitors your finances around the clock and adjusts recommendations as your situation changes.',
  },
  {
    question: 'Is my financial data secure?',
    answer:
      'Yes. Your data is encrypted with 256-bit bank-level encryption, never sold to third parties, and protected by strict access controls and continuous monitoring.',
  },
  {
    question: "What's the difference between Finley and a robo-advisor?",
    answer:
      'Robo-advisors mostly automate index investing. Finley combines AI analysis with personalized guidance across all your finances — from budgeting to tax strategy to major life goals.',
  },
  {
    question: 'Can I talk to a human advisor?',
    answer:
      'Absolutely. Premium plans include unlimited access to our team of human advisors for complex questions and personalized guidance.',
  },
  {
    question: 'What happens to my existing investments?',
    answer:
      'Nothing changes. You keep full control of your accounts. Finley analyzes your current holdings and recommends optimizations — you approve every action before it happens.',
  },
  {
    question: 'Can I cancel my free trial anytime?',
    answer:
      'Yes. There are no contracts or cancellation fees. You can cancel your trial or subscription in one click, anytime.',
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Everything you need to know before you get started.
          </p>
        </div>
        <div className="mt-12 space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-4 bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-800/70"
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
            Contact support
          </a>
        </p>
      </div>
    </section>
  )
}
