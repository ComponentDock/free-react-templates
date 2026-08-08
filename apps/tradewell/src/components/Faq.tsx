import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const faqs = [
  {
    question: 'Is Tradewell really free?',
    answer:
      'Yes. Trading stocks, ETFs, and crypto is completely commission-free on Tradewell. Our Basic plan has no fees and no minimums — we earn from optional Pro and Premium subscriptions, not from your trades.',
  },
  {
    question: 'How is my money protected?',
    answer:
      'Securities in your account are protected up to $500,000 by SIPC, and uninvested cash is swept to FDIC-insured partner banks with up to $2 million in coverage. Your data is protected with 256-bit encryption.',
  },
  {
    question: 'Can I transfer my existing portfolio?',
    answer:
      'Yes. Use our in-app transfer tool to move your stocks, ETFs, and cash from another broker. We cover transfer fees and your assets are usually available within 5–7 business days.',
  },
  {
    question: 'What are fractional shares?',
    answer:
      'Fractional shares let you buy a portion of a stock rather than a whole share. With Tradewell you can start with as little as $1, making it easy to diversify even with a small budget.',
  },
  {
    question: 'Do you offer retirement accounts?',
    answer:
      'Yes. Open an IRA (Traditional or Roth) in minutes and invest for retirement with the same commission-free trading. Contributions are tax-deductible or grow tax-free depending on the account type.',
  },
  {
    question: 'How fast are deposits and withdrawals?',
    answer:
      'Deposits are available instantly for trading up to $1,000 per day, and fully settled in 1–2 business days. Withdrawals to your linked bank account typically arrive within 1–3 business days.',
  },
  {
    question: 'Is crypto trading available?',
    answer:
      'Yes. Trade Bitcoin, Ethereum, and 40+ other cryptocurrencies alongside your stocks and ETFs in the same account, with real-time pricing and secure cold-storage custody.',
  },
  {
    question: 'Do you have an API for automated trading?',
    answer:
      'Yes. Premium subscribers get access to our developer API with real-time market data, order execution, and webhooks — perfect for building your own trading tools and algorithms.',
  },
] as const

export function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Everything you need to know about investing with Tradewell.
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
