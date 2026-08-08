import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const faqs = [
  {
    question: "What's included in my ticket?",
    answer:
      'All tickets include access to keynotes, talks, and networking events. Builder and above include workshop access.',
  },
  {
    question: 'Is there a virtual attendance option?',
    answer:
      'Yes! We offer a Virtual Pass ($299) that includes livestream access to all main stage content and virtual networking rooms. Recordings are available for 30 days post-event.',
  },
  {
    question: 'Can I get a refund?',
    answer:
      'Full refunds are available until 60 days before the event, and 50% refunds until 30 days before. Tickets are transferable at any time.',
  },
  {
    question: "What's the hackathon about?",
    answer:
      'Teams build production-ready AI applications over 48 hours, with sponsor APIs, mentorship from partner labs, and prizes for the top builds.',
  },
  {
    question: 'Are meals included?',
    answer:
      'Breakfast and lunch are provided all three days, plus coffee throughout. Dietary restrictions are catered for.',
  },
  {
    question: 'How can I submit a talk or poster?',
    answer:
      'Submit through the call for proposals portal — talks run 30–40 minutes and posters are A0 portrait. Applications close 60 days before the event.',
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-gray-50 py-20 dark:bg-gray-900 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Got Questions?
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Everything you need to know about Keynote 2026.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const open = openIndex === index
            const panelId = `keynote-faq-panel-${index}`
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : index)}
                    aria-expanded={open}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-gray-900 transition-colors hover:text-primary-600 dark:text-white dark:hover:text-primary-400"
                  >
                    {faq.question}
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 flex-shrink-0 text-gray-400 transition-transform duration-200',
                        open && 'rotate-180',
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div id={panelId} hidden={!open} className="px-6 pb-6">
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
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
