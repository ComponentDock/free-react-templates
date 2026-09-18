import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How to list my item?',
    answer:
      'Creating a listing on Spotlight is simple. Sign up for a free account, click "Add Listing", fill in the details including name, category, location, and description, then submit for review. Listings are typically approved within 24 hours.',
  },
  {
    question: 'Is it free?',
    answer:
      'Yes, basic listings on Spotlight are completely free. We also offer premium plans with additional features like priority placement, verified badges, and analytics dashboards for businesses that want extra visibility.',
  },
  {
    question: 'How the system works?',
    answer:
      'Spotlight aggregates local business listings into a searchable directory. Users can search by category, location, or keyword. Each listing includes photos, reviews, and contact information. Our team verifies every listing for accuracy.',
  },
  {
    question: 'Is this available in my country?',
    answer:
      'Spotlight currently operates in over 50 countries worldwide. We are constantly expanding to new regions. Check our coverage page for the full list of supported areas, or contact us to request coverage in your area.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-light-bg py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-light text-primary">Frequently Asked Questions</h2>
          <p className="text-body">Got questions? We have answers.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-lg border border-border bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between p-4 text-left text-sm font-semibold text-heading transition-colors hover:bg-gray-50"
                  aria-expanded={isOpen}
                >
                  {faq.question}
                  <ChevronDown
                    className={`h-4 w-4 flex-shrink-0 text-body transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-border px-4 py-3">
                    <p className="text-sm leading-relaxed text-body">{faq.answer}</p>
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
