import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'Adieus who direct esteem It esteems luckily?',
    answer:
      'Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing.',
  },
  {
    question: 'Who direct esteem It esteems?',
    answer:
      'Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing.',
  },
  {
    question: 'Duis consectetur feugiat auctor?',
    answer:
      'Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing.',
  },
  {
    question: 'Consectetur feugiat auctor?',
    answer:
      'Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-3 h-[3px] w-15 rounded bg-brand" />
          <h2 className="text-3xl font-normal text-navy lg:text-[44px]">Frequently ask</h2>
        </div>
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={faq.question} className="rounded border border-gray-200">
                <button
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium text-navy"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  {faq.question}
                  {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {isOpen && (
                  <div className="border-t border-gray-200 px-5 py-4 text-sm text-body-text">
                    {faq.answer}
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
