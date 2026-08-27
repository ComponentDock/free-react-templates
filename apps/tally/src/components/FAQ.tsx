import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ_ITEMS = [
  {
    question: 'What services do you offer?',
    answer:
      'We provide comprehensive accounting, tax preparation, financial consulting, and business advisory services tailored to your specific needs.',
  },
  {
    question: 'How do you ensure accuracy in financial reports?',
    answer:
      'Our team follows rigorous quality control procedures, uses advanced accounting software, and performs multi-level reviews to ensure the highest accuracy in all financial reports.',
  },
  {
    question: 'What industries do you serve?',
    answer:
      'We serve a wide range of industries including technology, healthcare, real estate, manufacturing, retail, and professional services. Our expertise allows us to adapt to any sector.',
  },
  {
    question: 'How can I get started with Tally?',
    answer:
      'Getting started is easy. Simply contact us through our website or call us directly. We will schedule a free consultation to understand your needs and create a customized plan.',
  },
]

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  function toggle(index: number) {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="bg-white py-20" aria-label="FAQ">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        {/* Left images */}
        <div className="space-y-4">
          <img
            src="https://picsum.photos/seed/tally-faq1/500/300"
            alt="FAQ illustration 1"
            className="rounded-lg shadow-md w-full"
          />
          <img
            src="https://picsum.photos/seed/tally-faq2/500/300"
            alt="FAQ illustration 2"
            className="rounded-lg shadow-md w-full"
          />
        </div>

        {/* Right accordion */}
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">FAQ</p>
          <h2 className="mb-8 text-3xl font-bold text-dark md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="rounded-lg border border-gray-200">
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left font-semibold text-dark hover:bg-light transition-colors"
                  aria-expanded={activeIndex === i}
                >
                  <span>{item.question}</span>
                  {activeIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {activeIndex === i && (
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
