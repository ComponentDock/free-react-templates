import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const faqs = [
  {
    question: 'What types of insurance coverage do you offer?',
    answer:
      'We offer auto, home, life, health, business, and umbrella insurance — plus bundled packages that combine multiple policies for a discount.',
  },
  {
    question: 'How do I file a claim?',
    answer:
      'File online, in the app, or by phone. Most claims are acknowledged within minutes and approved within one business day.',
  },
  {
    question: 'Can I bundle multiple policies for a discount?',
    answer:
      'Yes. Bundling two or more policies can save you up to 25% — our advisors will find the combination that fits your life.',
  },
  {
    question: 'What happens if I need to cancel my policy?',
    answer:
      'You can cancel anytime with no hidden fees. We will refund any unused premium on a prorated basis.',
  },
  {
    question: 'How are my insurance premiums calculated?',
    answer:
      'Premiums are based on coverage type, limits, deductibles, age, and risk factors. Use our savings calculator for a quick estimate.',
  },
  {
    question: 'Do you offer coverage for new drivers or first-time homebuyers?',
    answer:
      'Absolutely. We specialize in first-time policies and will walk you through every requirement step by step.',
  },
] as const

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Common Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Everything you need to know before getting covered.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((item, index) => {
            const open = openIndex === index
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : index)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 bg-gray-50 px-5 py-4 text-left text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
                  >
                    {item.question}
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 shrink-0 text-gray-400 transition-transform',
                        open && 'rotate-180',
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {open ? (
                  <p className="border-t border-gray-200 px-5 py-4 text-sm leading-relaxed text-gray-600 dark:border-gray-800 dark:text-gray-400">
                    {item.answer}
                  </p>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
