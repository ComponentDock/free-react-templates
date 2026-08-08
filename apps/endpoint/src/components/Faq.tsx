import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How quickly can I get started with Endpoint?',
    answer:
      'You can sign up and make your first API call in under 5 minutes. Our quickstart guides cover all major languages and frameworks, and our auto-generated SDKs handle client setup automatically.',
  },
  {
    question: 'What protocols does the API Gateway support?',
    answer:
      'Endpoint supports REST, GraphQL, gRPC, and WebSocket protocols. You can mix and match protocols across your API surface and the gateway handles routing, transformation, and load balancing for all of them.',
  },
  {
    question: 'How does pricing scale with API volume?',
    answer:
      'Our pricing is based on API calls per month with generous free tier limits. You only pay for what you use, and volume discounts kick in automatically as you scale.',
  },
  {
    question: 'Can I import my existing API into Endpoint?',
    answer:
      'Yes. Endpoint supports OpenAPI and GraphQL schema imports, so you can point our gateway at your existing endpoints and start adding features immediately. Most teams complete migration in less than a day.',
  },
  {
    question: 'What kind of support do you offer?',
    answer:
      'Free tier includes community support via Discord and forums. Growth plans get email support with 24-hour response time. Scale plans include dedicated Slack channels, a named solutions engineer, and 1-hour SLAs.',
  },
] as const

export function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Everything you need to know about Endpoint and our API infrastructure platform.
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
