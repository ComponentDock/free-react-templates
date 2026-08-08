import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { Reveal } from './Reveal'

const faqs = [
  {
    question: 'How far in advance should I book?',
    answer:
      'We recommend booking 1–2 weeks ahead for weekday appointments and 3–4 weeks for weekends and holidays. Same-day openings are occasionally available — call us in the morning to check.',
  },
  {
    question: 'What should I do before my appointment?',
    answer:
      'Arrive 15 minutes early to unwind in our lounge, stay hydrated, and avoid heavy meals right before your treatment. Your therapist will guide you through everything else.',
  },
  {
    question: 'Do you accommodate health conditions?',
    answer:
      'Absolutely. Please share any health conditions, allergies, or pregnancy details when booking so we can tailor your treatments and consult with you before we begin.',
  },
  {
    question: 'Do you sell gift cards?',
    answer:
      'Yes — Sooth gift cards make the perfect present. They are available in any amount, never expire, and can be used across treatments, packages, and our retail line.',
  },
  {
    question: 'Can I book for a group?',
    answer:
      'We love hosting groups! From bridal parties to corporate retreats, our private suites can accommodate up to eight guests. Contact us for group rates and custom itineraries.',
  },
] as const

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-wider text-primary-600 uppercase dark:text-primary-400">
            FAQ
          </p>
          <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const open = openIndex === index
            return (
              <Reveal key={faq.question} delay={index * 60}>
                <div
                  className={cn(
                    'rounded-2xl border border-gray-200 bg-white transition-colors dark:border-gray-800 dark:bg-gray-900',
                    open && 'border-primary-200 dark:border-primary-900',
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : index)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-heading text-lg font-bold text-gray-900 dark:text-white">
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
                  {open ? (
                    <p className="px-6 pb-6 text-gray-600 dark:text-gray-300">{faq.answer}</p>
                  ) : null}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
