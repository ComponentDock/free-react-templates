import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What types of woodworking services do you offer?',
    answer:
      'We provide a full range of woodworking services including custom cabinetry, furniture building, moldings and trim, deck construction, flooring, and commercial millwork. Every project is tailored to your specifications.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary depending on scope and complexity. A custom cabinet set may take 4-6 weeks, while a full kitchen remodel could take 8-12 weeks. We provide detailed timelines during the consultation phase.',
  },
  {
    question: 'Do you source sustainable materials?',
    answer:
      'Yes, we prioritize sustainable and responsibly sourced lumber. All our wood comes from certified suppliers, and we use eco-friendly finishes and adhesives whenever possible.',
  },
  {
    question: 'Can I get a free estimate for my project?',
    answer:
      'Absolutely. We offer free initial consultations and estimates for all woodworking and construction projects. Contact us through our form or call us directly to schedule your visit.',
  },
  {
    question: 'Do you handle both residential and commercial projects?',
    answer:
      'Yes, our team is experienced in both residential and commercial woodworking. From home renovations and custom furniture to office buildouts and retail installations, we handle projects of all sizes.',
  },
] as const

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">FAQ</span>
          <h2 className="mt-4 text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-ink/10 bg-paper transition-colors dark:border-white/10 dark:bg-gray-900"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-sm font-semibold text-ink dark:text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-brand transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm leading-relaxed text-mist dark:text-gray-400">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
