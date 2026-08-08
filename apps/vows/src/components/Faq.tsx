import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const faqs = [
  {
    question: 'How far in advance should we book?',
    answer:
      'We recommend booking 12–18 months ahead for peak season (May–October). For intimate celebrations, we can work with as little as three months\u2019 notice.',
  },
  {
    question: 'What is your pricing structure?',
    answer:
      'Our packages range from partial planning to full-service coordination, each tailored to your vision. After a consultation, we prepare a detailed proposal with no surprises.',
  },
  {
    question: 'Do you travel for destination weddings?',
    answer:
      'Yes — we plan weddings across the country and internationally. Travel fees depend on location and duration, and we handle every detail on site.',
  },
  {
    question: 'How involved will we be in the planning?',
    answer:
      'As involved as you\u2019d like. Some couples want to be hands-on for every decision; others prefer to be completely hands-off. We adapt to your preferences.',
  },
  {
    question: 'What happens if it rains on our outdoor wedding?',
    answer:
      'Every outdoor celebration includes a rain contingency plan — backup indoor options, tenting, and vendor coordination — so your day proceeds seamlessly.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">
            FAQ
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Everything you need to know before your big day.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = open === index
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-gray-200 bg-white transition-all dark:border-gray-800 dark:bg-gray-900/50"
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
                        'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600 transition-transform dark:bg-primary-900/30 dark:text-primary-400',
                        isOpen && 'rotate-180',
                      )}
                    >
                      <ChevronDown className="h-4 w-4" aria-hidden="true" />
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
