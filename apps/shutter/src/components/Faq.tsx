import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: 'How do I book a session?',
    answer:
      'Booking is easy! Fill out the contact form or email me directly with your preferred dates. I will get back to you within 48 hours to confirm availability and details.',
  },
  {
    question: 'How long until I receive my photos?',
    answer:
      'Turnaround time is typically 2-3 weeks for a full gallery. Rush delivery within 5 business days is available for an additional fee.',
  },
  {
    question: 'What is your editing style?',
    answer:
      'My editing style is clean, natural, and timeless — true-to-life color with soft, flattering tones that let the moment speak for itself.',
  },
  {
    question: 'Do you travel for shoots?',
    answer:
      'Yes! I love traveling for destination shoots. Travel fees apply outside the New York metro area, and I am happy to provide a custom quote.',
  },
  {
    question: 'Can I order prints?',
    answer:
      'Absolutely! I partner with professional fine art print labs, so you can order gallery-quality prints of your favorite images directly from your gallery.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mt-12 space-y-4">
          {faqs.map((item, index) => {
            const isOpen = open === index
            return (
              <div
                key={item.question}
                className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-medium text-gray-900 dark:text-white">
                      {item.question}
                    </span>
                    <span
                      className={cn(
                        'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-transform duration-300 dark:bg-gray-800 dark:text-gray-300',
                        isOpen && 'rotate-45',
                      )}
                    >
                      <Plus className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="border-t border-gray-100 px-6 py-5 text-gray-600 dark:border-gray-800 dark:text-gray-400"
                  >
                    {item.answer}
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
