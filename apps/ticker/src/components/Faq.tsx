import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const faqs = [
  {
    question: 'Do I need any prior trading experience?',
    answer:
      'No. Our curriculum starts from absolute zero — account setup, order types, and market basics — before moving into strategy. Most of our students had never placed a trade before joining.',
  },
  {
    question: 'Are the trading results and profits verified?',
    answer:
      'Yes. Mentor track records and student results are verified against broker statements and exchange data. We publish win rates, average R-multiples, and drawdown stats from real, audited accounts.',
  },
  {
    question: 'How much capital do I need to start trading?',
    answer:
      'You can practice risk-free on demo accounts and our paper-trading room with $0. Live trading can start with as little as $100, though we recommend a funded plan that matches your risk tolerance.',
  },
  {
    question: 'Do you guarantee profits or specific returns?',
    answer:
      'No — and be wary of anyone who does. Trading involves risk, and losses are part of the process. What we guarantee is education, transparency, and a proven risk-management system.',
  },
  {
    question: 'What markets and assets do you cover?',
    answer:
      'Crypto, US and international stocks, forex, options, futures, and prediction markets. Each market has its own dedicated track inside the curriculum.',
  },
  {
    question: 'Do I get access to live trading sessions?',
    answer:
      'Yes. Trader and Elite members get daily live trading rooms where mentors trade in real time, explain their decisions, and answer questions.',
  },
  {
    question: 'What happens if I want a refund?',
    answer:
      'Every paid plan comes with a 30-day money-back guarantee. If the course is not for you, email support and we will refund you in full — no questions asked.',
  },
  {
    question: 'Can I access the courses on mobile?',
    answer:
      'Yes. Every course streams on the mobile web app with offline downloads, so you can study during your commute or between sessions.',
  },
] as const

export function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-gray-50 py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-primary-500/10 px-4 py-1.5 text-sm font-medium text-primary-600 dark:text-primary-400">
            FAQ
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
            Common{' '}
            <span className="bg-gradient-to-br from-primary-500 to-primary-700 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Everything you need to know about our trading courses and membership.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = open === index
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-gray-200 bg-white transition-all dark:border-gray-800 dark:bg-gray-900/50"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left font-semibold text-gray-900 dark:text-white"
                  >
                    {faq.question}
                    <span
                      className={cn(
                        'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 transition-transform dark:bg-gray-800',
                        isOpen && 'rotate-180',
                      )}
                    >
                      <ChevronDown
                        className="h-4 w-4 text-primary-600 dark:text-primary-400"
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </h3>
                {isOpen && (
                  <p className="border-t border-gray-100 px-6 pb-6 pt-4 text-gray-600 dark:border-gray-800 dark:text-gray-300">
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
