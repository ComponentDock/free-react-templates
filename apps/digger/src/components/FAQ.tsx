import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    q: 'What services does Digger offer?',
    a: 'We offer comprehensive construction and mining services including land development, surface mining, project consulting, and equipment rental.',
  },
  {
    q: 'How many years of experience does your team have?',
    a: 'Our team has over 30 years of combined experience in the construction and mining industry.',
  },
  {
    q: 'Do you provide environmental assessments?',
    a: 'Yes, we conduct thorough environmental assessments for all our projects to ensure compliance and sustainability.',
  },
  {
    q: 'What safety measures do you follow?',
    a: 'We follow OSHA standards and have our own rigorous safety protocols. All team members undergo regular safety training.',
  },
  {
    q: 'Can you handle large-scale mining projects?',
    a: 'Absolutely. We have the equipment, team, and expertise to handle projects of any scale, from small operations to large mining sites.',
  },
  {
    q: 'Do you offer project financing?',
    a: 'We work with several financial partners to provide flexible financing options for qualified projects.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve clients across the continental United States, with primary operations in the Western and Central regions.',
  },
  {
    q: 'How do I get a project quote?',
    a: 'Contact us through our form or call us directly. We offer free initial consultations and competitive quotes.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-heading mb-16">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 text-left hover:bg-light-bg transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="text-sm font-semibold text-heading pr-4">{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp size={18} className="text-brand flex-shrink-0" />
                ) : (
                  <ChevronDown size={18} className="text-brand flex-shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-4 pb-4">
                  <p className="text-sm text-body leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
