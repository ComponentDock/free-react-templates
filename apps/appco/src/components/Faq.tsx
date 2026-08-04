import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How do I get started with Appco?',
    answer:
      'Sign up for a free account, invite your team, and follow the guided onboarding to create your first project in minutes.',
  },
  {
    question: 'Is there a free trial available?',
    answer:
      'Yes — every plan starts with a 14-day free trial. No credit card required to get started.',
  },
  {
    question: 'Can I switch between plans?',
    answer:
      'Absolutely. You can upgrade, downgrade, or cancel at any time, and we prorate the difference automatically.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes. We use encryption in transit and at rest, regular security audits, and never sell your data.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards, PayPal, and bank transfers for annual enterprise billing.',
  },
  {
    question: 'How can I contact support?',
    answer:
      'Reach us 24/7 via in-app chat or email at support@appco.com — a real human always answers.',
  },
] as const

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-paper py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink dark:text-white sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const open = openIndex === index
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-800"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : index)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-base font-bold text-ink dark:text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-primary-600 transition-transform dark:text-primary-400 ${
                        open ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div hidden={!open}>
                  <p className="px-6 pb-5 text-sm leading-relaxed text-mist dark:text-gray-400">
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
