import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Can I accept both Paypal and Stripe?',
    answer:
      'Yes, our platform supports multiple payment gateways including PayPal, Stripe, and bank transfers for your convenience.',
  },
  {
    question: 'What available is refund period?',
    answer:
      'We offer a 30-day money-back guarantee on all our plans. If you are not satisfied, contact us for a full refund.',
  },
  {
    question: 'Where are you from?',
    answer:
      'We serve clients worldwide with our headquarters in New York. Our team operates across multiple time zones to provide 24/7 support.',
  },
  {
    question: 'What is your opening time?',
    answer:
      'Our support team is available Monday through Friday, 9 AM to 6 PM EST. Premium and Professional plan holders get 24/7 priority support.',
  },
] as const

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-white py-16 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-black text-brand md:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 space-y-4">
          {faqs.map(({ question, answer }, i) => (
            <div
              key={question}
              className="rounded-lg border border-gray-100 transition-colors dark:border-gray-800"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between p-5 text-left"
                aria-expanded={openIndex === i}
              >
                <h3 className="text-base font-bold text-ink dark:text-white">{question}</h3>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-brand transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm leading-relaxed text-gray-500">{answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
