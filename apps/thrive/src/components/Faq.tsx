import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const faqs = [
  {
    question: 'How is Blastoff different from other platforms?',
    answer:
      'Blastoff combines CI/CD, hosting, analytics and collaboration in one platform — so you never stitch together a dozen tools again.',
  },
  {
    question: 'Can I migrate an existing project?',
    answer:
      'Yes. Import any Git repository and we will detect your framework, set up the build and deploy your first preview in minutes.',
  },
  {
    question: 'Which cloud providers do you support?',
    answer:
      'We run on AWS, GCP and Cloudflare — you can choose your region, and data residency is available on the Scale plan.',
  },
  {
    question: 'Is there a free tier?',
    answer:
      'The Hobby plan is free forever and includes 3 projects. Pro features are free for 14 days on any plan, no credit card required.',
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Everything you need to know before you launch.
          </p>
        </div>
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const open = openIndex === index
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : index)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${index}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-bold text-gray-900 transition-colors hover:text-primary-600 dark:text-white dark:hover:text-primary-400"
                  >
                    {faq.question}
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 shrink-0 text-primary-600 transition-transform dark:text-primary-400',
                        open && 'rotate-180',
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-label={faq.question}
                  className={cn('px-6 pb-5', open ? 'block' : 'hidden')}
                >
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
