import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const faqs = [
  {
    question: 'Are my donations tax-deductible?',
    answer:
      'Yes. Uplift is a registered 501(c)(3) nonprofit, and every donation you make is tax-deductible to the extent allowed by law. You will receive a receipt by email.',
  },
  {
    question: 'How are my funds allocated?',
    answer:
      '85% of every donation goes directly to our programs on the ground. The remaining 15% covers fundraising and administration, and we publish an annual report with full details.',
  },
  {
    question: 'Can I volunteer remotely?',
    answer:
      'Absolutely. We have virtual volunteering opportunities in mentoring, translation, design and fundraising that you can join from anywhere in the world.',
  },
  {
    question: 'Can I set up a recurring donation?',
    answer:
      'Yes. You can choose to give monthly, quarterly or annually — and you can pause or change your recurring gift at any time.',
  },
  {
    question: 'Do you work internationally?',
    answer:
      'We partner with local organizations in 15 countries across Latin America, Africa and Southeast Asia, always led by community members themselves.',
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600 dark:text-gray-300">
          Everything you need to know about giving and getting involved.
        </p>
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const open = openIndex === index
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : index)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${index}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-bold text-gray-900 transition-colors hover:text-primary-600 dark:text-white dark:hover:text-primary-400"
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
                  aria-label={faq.question}
                  className={cn('px-6 pb-5', open ? 'block' : 'hidden')}
                >
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
