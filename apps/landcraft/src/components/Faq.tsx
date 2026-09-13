import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqItems = [
  {
    question: 'General Inquiries',
    answer:
      'Feel free to reach out to us via phone, email, or our contact form. Our team typically responds within 24 hours during business days.',
  },
  {
    question: 'How It Works',
    answer:
      'We start with a free consultation to understand your needs, then provide a detailed proposal. Once approved, our team executes the project with regular updates.',
  },
  {
    question: 'Service Areas',
    answer:
      'We serve the greater metropolitan area and surrounding communities within a 50-mile radius. Contact us to confirm service availability in your area.',
  },
  {
    question: 'Pricing',
    answer:
      'Pricing depends on the scope and complexity of the project. We offer free estimates and work within your budget to deliver the best results.',
  },
  {
    question: 'Additional Information',
    answer:
      'All our work is backed by a satisfaction guarantee. We are fully licensed and insured, and our team holds professional certifications in landscape architecture.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24" data-testid="faq">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-body">Find answers to commonly asked questions about our services.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <div key={item.question} className="border-b border-gray-200">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-heading">{item.question}</span>
                  <ChevronDown
                    size={18}
                    className={`text-brand transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="pb-4 text-body text-sm">
                    <p>{item.answer}</p>
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
