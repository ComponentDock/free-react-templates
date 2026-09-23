import { useState } from 'react'
import { Check, ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const checklist = [
  'Experienced and dedicated legal professionals',
  'Personalized legal strategies for every client',
  'Transparent communication and competitive rates',
]

const faqItems = [
  {
    question: 'What services does a notary public provide?',
    answer:
      'A notary public authenticates signatures, administers oaths, certifies documents, and performs other official acts to prevent fraud and ensure the integrity of legal documents.',
  },
  {
    question: 'How do I schedule a consultation?',
    answer:
      'You can schedule a consultation by filling out the appointment form in our hero section, calling our office directly, or sending us an email. We will respond within one business day.',
  },
  {
    question: 'What should I bring to my first meeting?',
    answer:
      'Bring any relevant documents related to your legal matter, a valid form of identification, and a list of questions or concerns you would like to discuss with your attorney.',
  },
]

interface LegalSolutionsProps {
  className?: string
}

export function LegalSolutions({ className }: LegalSolutionsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="legal-solutions" className={cn('bg-white py-20', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left — image */}
          <div>
            <img
              src="https://picsum.photos/seed/oathmark-legal/600/400"
              alt="Legal solutions"
              className="w-full rounded-xl shadow-lg object-cover"
              loading="lazy"
            />
          </div>

          {/* Center — text + checklist */}
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 leading-tight mb-6">
              We Have Legal Solutions
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our firm brings decades of combined experience to every case. We take the time to
              understand your situation and develop a strategy that works for you.
            </p>
            <ul className="space-y-4">
              {checklist.map((item) => (
                <li key={item} className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} className="text-brand" />
                  </div>
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — accordion FAQ */}
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">
              Frequently Asked Questions
            </h3>
            {faqItems.map((item, index) => (
              <div
                key={item.question}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="text-sm font-medium text-gray-900 pr-4">{item.question}</span>
                  <ChevronDown
                    size={18}
                    className={cn(
                      'text-gray-500 shrink-0 transition-transform',
                      openIndex === index && 'rotate-180',
                    )}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-4">
                    <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
