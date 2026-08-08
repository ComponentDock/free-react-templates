import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { Reveal } from './Reveal'

const faqs = [
  {
    question: 'How does the free trial work?',
    answer: 'You can try every paid tier free for 14 days — no credit card required.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'All data is encrypted in transit and at rest, and we never train on your private data.',
  },
  {
    question: 'What are the API rate limits?',
    answer:
      'The free tier allows 10 requests per minute; paid tiers scale automatically with your plan.',
  },
  {
    question: 'Can I train custom models?',
    answer: 'Yes — Pro and Enterprise plans include custom fine-tuning on your own datasets.',
  },
  {
    question: 'Do you offer enterprise solutions?',
    answer: 'Our Enterprise plan adds SSO, audit logs, dedicated support and custom contracts.',
  },
] as const

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const open = openIndex === index
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex((current) => (current === index ? null : index))}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${index}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-gray-900 dark:text-white"
                  >
                    {faq.question}
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 shrink-0 text-primary-600 transition-transform',
                        open && 'rotate-180',
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {open && (
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    className="px-6 pb-5 text-gray-600 dark:text-gray-400"
                  >
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
