import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { Reveal } from './Reveal'

interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: 'How much does a solar system cost?',
    answer:
      'Most homeowners pay between $15,000 and $25,000 before incentives. After the 30% federal tax credit and local rebates, the average net cost drops to around $10,000–$18,000.',
  },
  {
    question: 'How long does installation take?',
    answer:
      'Most residential installations are completed in one to three days. The full process from consultation to activation typically takes three to six weeks, including permits and inspections.',
  },
  {
    question: 'Will solar panels work on cloudy days?',
    answer:
      'Yes. Panels still generate 10–25% of their rated output on overcast days, and battery storage lets you bank energy from sunny periods to cover cloudy stretches.',
  },
  {
    question: 'What happens during a power outage?',
    answer:
      'With battery storage, your system keeps critical loads running during an outage. Without a battery, grid-tied systems shut off automatically for safety.',
  },
  {
    question: 'Do solar panels require maintenance?',
    answer:
      'Very little. Panels are largely self-cleaning in most climates; an annual inspection and occasional cleaning keep your system producing at peak efficiency.',
  },
] as const

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section id="faq" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
              FAQ
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Frequently Asked Questions
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const open = openIndex === index
            return (
              <Reveal key={faq.question} delay={index * 40}>
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
                  <h3>
                    <button
                      type="button"
                      onClick={() => toggle(index)}
                      aria-expanded={open}
                      aria-controls={`faq-panel-${index}`}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-gray-900 transition-colors hover:text-primary-600 dark:text-white dark:hover:text-primary-400"
                    >
                      {faq.question}
                      <ChevronDown
                        className={cn(
                          'h-5 w-5 shrink-0 text-primary-600 transition-transform dark:text-primary-400',
                          open && 'rotate-180',
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    className={cn(
                      'px-6 pb-5 text-sm leading-relaxed text-gray-600 dark:text-gray-400',
                      open ? 'block' : 'hidden',
                    )}
                  >
                    {faq.answer}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
