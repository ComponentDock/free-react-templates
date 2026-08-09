import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const faqs = [
  {
    question: 'How quickly can Aegis be deployed?',
    answer:
      'Most organizations are fully protected in as little as 24 hours. Our lightweight agent deploys across endpoints and cloud workloads without disrupting operations.',
  },
  {
    question: 'Does Aegis replace our existing SIEM?',
    answer:
      'No — Aegis complements your current stack. It integrates with Splunk, Elastic, and other SIEMs to enrich alerts with AI-driven context.',
  },
  {
    question: 'What is your false positive rate?',
    answer:
      'Our AI engine maintains a 0.001% false positive rate, so your analysts focus on real threats instead of alert fatigue.',
  },
  {
    question: 'Do you offer 24/7 managed detection and response?',
    answer:
      'Yes. Our SOC operates 24/7/365, triaging alerts, containing threats, and coordinating response alongside your team.',
  },
  {
    question: 'How does Aegis protect against zero-day attacks?',
    answer:
      'Aegis uses behavioral AI models that detect anomalous activity patterns rather than relying on known signatures, so novel attacks are caught early.',
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
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Common questions about our cybersecurity platform and security services.
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
