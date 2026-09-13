import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What services does Techwise offer?',
    answer:
      'We offer a comprehensive range of services including UX/UI design, web and mobile development, branding, and search engine optimization. Our team delivers end-to-end digital solutions tailored to your business needs.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary based on scope and complexity. A standard website project typically takes 4-8 weeks, while larger enterprise solutions may take 3-6 months. We provide detailed timelines during our initial consultation.',
  },
  {
    question: 'Do you work with startups or only established businesses?',
    answer:
      'We work with businesses of all sizes, from ambitious startups to established enterprises. Our flexible approach allows us to scale our services to match your budget and requirements.',
  },
  {
    question: 'What is your pricing structure?',
    answer:
      'We offer both project-based and retainer pricing models. Each project is scoped individually to ensure fair and transparent pricing. Contact us for a free consultation and custom quote.',
  },
] as const

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section className="bg-light-bg py-20 transition-colors lg:py-[120px]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">FAQ</span>
          <h2 className="mt-4 text-3xl font-bold text-dark-bg sm:text-4xl">
            Frequently Ask Question
          </h2>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="overflow-hidden rounded bg-white shadow-sm">
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
                className="flex w-full items-center justify-between px-6 py-5 text-left text-sm font-semibold text-dark-bg transition-colors hover:text-brand"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-mist transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-sm leading-relaxed text-mist">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
