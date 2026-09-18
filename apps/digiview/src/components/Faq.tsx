import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const faqs = [
  {
    q: 'What services does DigiView offer?',
    a: 'We offer web development, SEO optimization, UI/UX design, cyber security, performance optimization, and digital strategy consulting.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Most projects are completed within 4 to 12 weeks depending on scope and complexity. We provide a detailed timeline during the discovery phase.',
  },
  {
    q: 'Do you work with small businesses?',
    a: 'Yes, we work with businesses of all sizes. Our solutions are scalable and tailored to fit your budget and goals.',
  },
  {
    q: 'What is your pricing model?',
    a: 'We offer both project-based and retainer pricing. Contact us for a free consultation and custom quote.',
  },
]

interface FaqProps {
  className?: string
}

export function Faq({ className }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className={cn('bg-white py-20', className)}>
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={faq.q} className="rounded-lg border border-gray-200">
                <button
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-gray-900"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  {faq.q}
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 text-gray-400 transition-transform',
                      isOpen && 'rotate-180',
                    )}
                  />
                </button>
                {isOpen && <div className="px-5 pb-4 text-sm text-gray-500">{faq.a}</div>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
