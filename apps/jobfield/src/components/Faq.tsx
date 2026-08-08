import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const faqs = [
  {
    question: 'Is Jobfield free for job seekers?',
    answer:
      'Yes. Creating a profile, browsing jobs, and applying is completely free for job seekers. We make money from employers who post jobs, so you never pay to find your next role.',
  },
  {
    question: 'How do I post a job on Jobfield?',
    answer:
      'Create an employer account, choose a posting plan, and publish your listing in minutes. You can add requirements, benefits, and screening questions, then review applicants from one dashboard.',
  },
  {
    question: 'How long does it take to get hired?',
    answer:
      'The average time-to-hire on Jobfield is under three weeks. Candidates with complete profiles and quick responses receive offers even faster thanks to smart matching.',
  },
  {
    question: 'Can I search for remote jobs specifically?',
    answer:
      'Yes. Filter any search by location and choose "Remote" to see only remote-friendly openings, or combine it with your preferred time zone and salary range.',
  },
  {
    question: 'How does the candidate matching work?',
    answer:
      'Our matching engine analyzes skills, experience, and preferences on both sides, then surfaces the most relevant jobs and candidates first. The more you use Jobfield, the smarter the matches become.',
  },
] as const

export function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Everything you need to know about finding and posting jobs on Jobfield.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = open === index
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-gray-200 bg-white transition-all dark:border-gray-800 dark:bg-gray-900/50"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left font-semibold text-gray-900 dark:text-white"
                  >
                    {faq.question}
                    <span
                      className={cn(
                        'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 transition-transform dark:bg-gray-800',
                        isOpen && 'rotate-180',
                      )}
                    >
                      <ChevronDown
                        className="h-4 w-4 text-primary-600 dark:text-primary-400"
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </h3>
                {isOpen && (
                  <p className="border-t border-gray-100 px-6 pb-6 pt-4 text-gray-600 dark:border-gray-800 dark:text-gray-300">
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
