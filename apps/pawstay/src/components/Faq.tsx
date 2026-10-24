import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How to train your pet dog?',
    answer:
      'Start with short, positive sessions and reward good behavior. Consistency and patience matter far more than length.',
  },
  {
    question: 'How to manage your pets?',
    answer:
      'Keep a steady routine for meals, walks, and rest. A calm, predictable schedule helps pets feel secure and happy.',
  },
  {
    question: 'What is the best grooming for your pets?',
    answer:
      'Regular brushing, gentle baths with pet-safe products, and nail trims keep coats healthy and pets comfortable.',
  },
  {
    question: 'What are those requirements for sitting pets?',
    answer:
      'We ask for up-to-date vaccinations, feeding instructions, and emergency contact details before every sitting.',
  },
] as const

export function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-paper py-14 dark:bg-gray-900 md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold text-night dark:text-white">
          Frequently Asks Questions
        </h2>
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = open === index
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800"
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-bold text-night transition-colors hover:text-brand dark:text-white dark:hover:text-brand"
                  >
                    {faq.question}
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-brand transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {isOpen && (
                  <p
                    id={`faq-panel-${index}`}
                    className="border-t border-gray-100 px-6 py-5 text-sm font-light leading-relaxed text-gray-500 dark:border-gray-700 dark:text-gray-400"
                  >
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
