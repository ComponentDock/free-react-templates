import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqItems = [
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
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* FAQ questions */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-8">Why Choose Us</h2>
            <div className="space-y-4">
              {faqItems.map((item, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-medium text-brand-navy hover:bg-gray-50 transition-colors"
                    aria-expanded={openIndex === idx}
                    aria-controls={`faq-panel-${idx}`}
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openIndex === idx && (
                    <div id={`faq-panel-${idx}`} className="px-5 pb-4 text-sm text-gray-600">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://picsum.photos/seed/seoflow-faq/500/400"
              alt="SEO strategy illustration"
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
