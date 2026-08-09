import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { Reveal } from './Reveal'

const faqs = [
  {
    question: 'Are your movers licensed and insured?',
    answer:
      'Yes. Movere is fully licensed and insured in all 50 states, and every crew member is background-checked and trained. Your belongings are covered from pickup to delivery.',
  },
  {
    question: 'How far in advance should I book my move?',
    answer:
      'We recommend booking 1-2 weeks ahead for the widest selection of dates, but we also offer same-day and next-day local moves when crews are available. Call us to check current availability.',
  },
  {
    question: 'Do you offer packing and unpacking services?',
    answer:
      'Absolutely. Our crews provide full packing and unpacking with premium materials — boxes, bubble wrap, furniture covers, and custom crating for fragile or valuable items.',
  },
  {
    question: 'Can you move specialty items like pianos and safes?',
    answer:
      'Yes. We have specialized equipment and training for pianos, safes, pool tables, artwork, and antiques. These items receive custom crating and white-glove handling.',
  },
  {
    question: 'Do you provide storage solutions?',
    answer:
      'We offer both short-term and long-term storage in climate-controlled, security-monitored facilities, with flexible access hours and direct delivery from your move.',
  },
] as const

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8 lg:py-28">
        <Reveal>
          <p className="text-center text-sm font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            FAQ
          </p>
          <h2 className="mt-2 text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base text-gray-600 dark:text-gray-400">
            Answers to the questions we hear most from customers.
          </p>
        </Reveal>
        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const open = openIndex === index
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : index)}
                  aria-expanded={open}
                  aria-controls={`faq-panel-${index}`}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-bold text-gray-900 dark:text-white sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 shrink-0 text-primary-600 transition-transform dark:text-primary-400',
                      open && 'rotate-180',
                    )}
                    aria-hidden="true"
                  />
                </button>
                <div id={`faq-panel-${index}`} className={cn('px-5', open ? 'pb-5' : 'hidden')}>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
