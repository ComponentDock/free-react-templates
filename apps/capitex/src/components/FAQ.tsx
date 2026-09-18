import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const faqItems = [
  {
    question: 'What types of loans do you offer?',
    answer:
      'We offer student loans, business loans, startup loans, personal loans, and mortgage financing. Each product is tailored to specific needs with competitive rates.',
  },
  {
    question: 'How long does the approval process take?',
    answer:
      'Our streamlined approval process typically takes 24-48 hours. Once approved, funds are transferred to your account within 48 hours.',
  },
  {
    question: 'What are the interest rates?',
    answer:
      'Interest rates vary based on loan type, amount, and your credit profile. We offer competitive rates starting from 3.9% APR for qualified applicants.',
  },
  {
    question: 'Can I repay early without penalties?',
    answer:
      'Yes! We encourage early repayment and do not charge any prepayment penalties. You can pay off your loan anytime without extra fees.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-gray-bg py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        {/* Left: Image */}
        <div>
          <img
            src="https://picsum.photos/seed/capitex-faq/600/450"
            alt="FAQ"
            className="w-full rounded object-cover"
          />
        </div>

        {/* Right: Accordion */}
        <div>
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-3">
            {faqItems.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <div key={item.question} className="rounded bg-white shadow-sm">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-navy">{item.question}</span>
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 shrink-0 text-body transition-transform',
                        isOpen && 'rotate-180',
                      )}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-border px-6 py-4">
                      <p className="text-sm text-body">{item.answer}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
