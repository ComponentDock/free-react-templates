import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface FaqItem {
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    question: 'How do you approach consulting for new clients?',
    answer:
      'We begin with a comprehensive assessment of your business needs, market position, and growth objectives. Our team then develops a customized strategy with clear milestones and measurable outcomes.',
  },
  {
    question: 'What industries do you specialize in?',
    answer:
      'We work across multiple industries including finance, technology, hospitality, retail, and healthcare. Our diverse expertise allows us to bring fresh perspectives to any business challenge.',
  },
  {
    question: 'How long does a typical consulting engagement last?',
    answer:
      'Engagement timelines vary based on scope and complexity. A strategic assessment may take 4–6 weeks, while full implementation programs typically run 3–12 months with ongoing support.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex justify-center">
            <img
              src="https://picsum.photos/seed/stratagem-faq/500/400"
              alt="FAQ illustration"
              className="w-full max-w-md rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>

          <div>
            <h2 className="text-3xl font-light text-navy md:text-4xl">Frequently ask</h2>
            <p className="mt-4 text-mist">
              Find answers to common questions about our consulting services
            </p>

            <div className="mt-8 space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={item.question}
                  className="overflow-hidden rounded-lg border border-gray-100"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-medium text-navy transition-colors hover:bg-gray-50"
                    aria-expanded={openIndex === index}
                  >
                    {item.question}
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 shrink-0 text-mist transition-transform',
                        openIndex === index && 'rotate-180',
                      )}
                      aria-hidden="true"
                    />
                  </button>
                  {openIndex === index && (
                    <div className="border-t border-gray-100 px-6 py-4 text-sm leading-relaxed text-mist">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
