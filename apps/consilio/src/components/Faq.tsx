import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const questions = [
  {
    question: 'What types of businesses do you work with?',
    answer:
      'We work with small and mid-sized businesses across finance, healthcare, manufacturing, retail, and professional services — anywhere clear strategy and disciplined execution drive growth.',
  },
  {
    question: 'How long does a typical consulting engagement last?',
    answer:
      'Most engagements run 8 to 16 weeks, depending on scope. We structure every project in phases so you see measurable progress early and can adjust as we learn.',
  },
  {
    question: 'What makes Consilio different from other consulting firms?',
    answer:
      'We pair senior consultants with your teams for the full engagement — no bait-and-switch staffing — and we tie our recommendations to outcomes you can track in your own numbers.',
  },
  {
    question: 'Do you offer remote consulting services?',
    answer:
      'Yes. We run workshops, audits, and advisory sessions remotely with the same rigor as on-site work, and we travel for key milestones when it matters.',
  },
  {
    question: 'How do I get started with a consultation?',
    answer:
      'Book a free consultation through the form below. We will schedule a 30-minute call to understand your goals and map the first steps — no obligation.',
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section aria-labelledby="faq-heading" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-widest text-eyebrow">
            <span className="h-0.5 w-14 bg-eyebrow" aria-hidden="true" />
            Got Questions?
            <span className="h-0.5 w-14 bg-eyebrow" aria-hidden="true" />
          </p>
          <h2
            id="faq-heading"
            className="font-display text-3xl font-bold text-brand-deep dark:text-white"
          >
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-3">
          {questions.map((item, index) => {
            const open = index === openIndex
            return (
              <div
                key={item.question}
                className={cn(
                  'rounded border transition-colors',
                  open
                    ? 'border-accent/40 bg-gray-50 dark:bg-gray-900'
                    : 'border-gray-100 dark:border-gray-800',
                )}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span className="font-display text-sm font-bold text-brand-deep dark:text-white">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 shrink-0 text-accent transition-transform',
                      open && 'rotate-180',
                    )}
                    aria-hidden="true"
                  />
                </button>
                {open && (
                  <p className="px-5 pb-5 text-sm leading-relaxed text-body dark:text-gray-400">
                    {item.answer}
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
