import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Do I need an appointment?',
    answer:
      "Walk-ins are always welcome, but we recommend booking online to guarantee your preferred time and barber. During busy periods like weekends, appointments ensure you won't have to wait.",
  },
  {
    question: 'How long does a typical haircut take?',
    answer:
      'A classic haircut takes about 30 minutes, while more detailed services like fades with beard work can take 45-60 minutes. We never rush — your barber will take the time needed to get it perfect.',
  },
  {
    question: "What if I'm not sure what style I want?",
    answer:
      "No problem at all. Our barbers are experts at recommending styles based on your face shape, hair type, and lifestyle. Just tell us what you're looking for and we'll guide you to the right cut.",
  },
  {
    question: "Do you cut children's hair?",
    answer:
      'Absolutely! We welcome young gentlemen ages 3 and up. Our barbers are patient and experienced with kids, and we even have a special chair and lollipops to make it fun.',
  },
  {
    question: 'What products do you use?',
    answer:
      "We use premium men's grooming products from brands like Baxter of California, Reuzel, and Suavecito. All products used during your service are also available for purchase at the shop.",
  },
] as const

export function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Got questions? We've got answers.</p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = open === index
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-800"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-gray-900 dark:text-white"
                  >
                    {faq.question}
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 text-accent-600 transition-transform dark:text-accent-400 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {isOpen && (
                  <p className="border-t border-gray-100 px-6 py-5 text-gray-600 dark:border-gray-700 dark:text-gray-300">
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
