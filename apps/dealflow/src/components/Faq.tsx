import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const faqs = [
  {
    question: 'How long does it take to set up Dealflow?',
    answer:
      'Most teams are up and running within a day. Our guided onboarding wizard walks you through importing contacts, setting up your pipeline stages, and connecting integrations. Enterprise customers get a dedicated onboarding specialist to ensure a smooth transition.',
  },
  {
    question: 'Can I import data from my existing CRM?',
    answer:
      'Yes, Dealflow supports one-click imports from Salesforce, HubSpot, Pipedrive, and most other CRM platforms. You can also import data via CSV files or our REST API. All your contacts, deals, and history transfer seamlessly.',
  },
  {
    question: 'What integrations does Dealflow support?',
    answer:
      'We integrate with 200+ tools including Gmail, Outlook, Slack, Zoom, Zapier, Salesforce, QuickBooks, and more. Our open API also allows you to build custom integrations for your specific tech stack.',
  },
  {
    question: 'Is my data secure with Dealflow?',
    answer:
      'Absolutely. We use bank-level AES-256 encryption, SOC 2 Type II compliance, and GDPR-compliant data handling. Your data is backed up in real-time across multiple geographic regions with 99.9% uptime guaranteed.',
  },
  {
    question: 'Do you offer a free trial?',
    answer:
      'Yes, we offer a 14-day free trial on all plans with no credit card required. You get full access to all features so you can evaluate Dealflow with your real data and workflows before committing.',
  },
  {
    question: 'What kind of support is available?',
    answer:
      'All plans include email support with 24-hour response times. Professional plans get priority chat support, and Enterprise customers receive a dedicated account manager, phone support, and custom training sessions for their team.',
  },
] as const

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section id="faq" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Everything you need to know about Dealflow. Can&apos;t find what you&apos;re looking
            for? Contact our support team.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const open = openIndex === index
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={open}
                    aria-controls={`faq-answer-${index}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-gray-900 transition-colors hover:text-primary-600 dark:text-white dark:hover:text-primary-400"
                  >
                    {faq.question}
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 shrink-0 text-gray-400 transition-transform',
                        open && 'rotate-180',
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {open && (
                  <div
                    id={`faq-answer-${index}`}
                    className="border-t border-gray-100 px-6 py-5 dark:border-gray-800"
                  >
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
