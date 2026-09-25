import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const faqs = [
  {
    question: 'How much do you charge for a building project?',
    answer:
      'Our pricing depends on the scope and complexity of the project. We offer flexible packages starting from our Starter plan. Contact us for a customized quote.',
  },
  {
    question: 'What is your design process?',
    answer:
      'We follow a structured process: initial consultation, concept development, design refinement, documentation, and construction oversight. Each phase involves close collaboration with our clients.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary based on size and complexity. A residential interior design project typically takes 4-8 weeks, while full architectural projects may take 3-12 months.',
  },
  {
    question: 'Will you provide detailed plans?',
    answer:
      'Yes, we provide comprehensive plans including floor plans, elevations, sections, 3D renders, and material specifications as part of our design documentation package.',
  },
  {
    question: 'How can I get started with your services?',
    answer:
      'Simply reach out through our contact form or email us. We will schedule an initial consultation to discuss your project requirements, timeline, and budget.',
  },
] as const

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-paper py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <img
              src="https://picsum.photos/seed/archcraft-faq/600/400"
              alt="Architecture project"
              className="w-full rounded object-cover"
            />
          </div>
          <div>
            <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-brand">
              Ask Us, We Are Happy To Answer
            </p>
            <h2 className="mb-8 text-3xl font-bold text-ink">Frequently Ask Questions</h2>
            <div className="space-y-3">
              {faqs.map(({ question, answer }, i) => (
                <div key={question} className="rounded border border-line bg-white">
                  <button
                    type="button"
                    aria-expanded={openIndex === i}
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-ink"
                  >
                    {question}
                    <ChevronDown
                      aria-hidden="true"
                      className={cn(
                        'h-4 w-4 shrink-0 text-mist transition-transform',
                        openIndex === i && 'rotate-180',
                      )}
                    />
                  </button>
                  {openIndex === i && (
                    <div className="border-t border-line px-5 py-4 text-sm leading-relaxed text-mist">
                      {answer}
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
