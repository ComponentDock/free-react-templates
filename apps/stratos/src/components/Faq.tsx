import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What frameworks and languages does Stratos support?',
    answer:
      'Stratos supports all major frameworks and languages including React, Next.js, Astro, SvelteKit, Remix, Node.js, Python, Go, Rust, Ruby, and PHP. Any Dockerized application can also be deployed using our container runtime.',
  },
  {
    question: 'How does pricing work?',
    answer:
      'We offer a generous free tier for hobby projects. Paid plans start at $20/month for Pro and $100/month for Business. You only pay for the resources you use — compute, bandwidth, and storage are all metered with predictable pricing and spending alerts.',
  },
  {
    question: 'What is your uptime guarantee?',
    answer:
      'Stratos guarantees 99.99% uptime on our Pro and Business plans, backed by SLA credits. Our infrastructure spans 40+ regions worldwide with automatic failover and redundancy built into every layer of the stack.',
  },
  {
    question: 'Can I migrate from my current provider?',
    answer:
      'Yes. We offer free migration assistance for teams moving from AWS, GCP, Azure, Heroku, or any other provider. Our migration tools can import your databases, configure DNS, and replicate your CI/CD pipeline with minimal downtime.',
  },
  {
    question: 'How do you handle security and compliance?',
    answer:
      'Stratos is SOC 2 Type II certified and GDPR compliant. We provide automatic SSL/TLS, DDoS protection, WAF, private networking, and encrypted storage at rest. Enterprise plans include HIPAA compliance and dedicated security reviews.',
  },
] as const

export function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Everything you need to know about Stratos&apos;s platform and services.
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
