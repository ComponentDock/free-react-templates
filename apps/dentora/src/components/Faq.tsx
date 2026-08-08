import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Do you accept dental insurance?',
    answer:
      'We accept most major dental insurance plans and will handle all claim submissions on your behalf. Our front desk team can verify your coverage before your appointment so there are no surprises.',
  },
  {
    question: 'What should I expect during my first visit?',
    answer:
      "Your first visit includes a comprehensive oral examination, digital X-rays, and a professional cleaning. We'll discuss your dental history, address any concerns, and create a personalized treatment plan tailored to your needs.",
  },
  {
    question: 'Do you offer emergency dental services?',
    answer:
      "Yes, we reserve time slots each day for dental emergencies. If you're experiencing severe pain, a broken tooth, or any other urgent dental issue, call us immediately and we'll get you in as soon as possible.",
  },
  {
    question: 'Is teeth whitening safe?',
    answer:
      'Professional teeth whitening performed under dental supervision is very safe. We offer both in-office and take-home whitening options using clinically tested products that protect your enamel while brightening your smile.',
  },
  {
    question: 'At what age should children first visit the dentist?',
    answer:
      'We recommend bringing your child for their first dental visit by age one or within six months of their first tooth appearing. Early visits help establish healthy habits and make future appointments stress-free.',
  },
] as const

export function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Find answers to common questions about our dental services and patient care.
          </p>
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
                      className={`h-5 w-5 flex-shrink-0 text-primary-600 transition-transform dark:text-primary-400 ${
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
