import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const steps = [
  {
    title: 'Getting Started',
    content:
      'Begin your adoption journey by learning about the process, requirements, and what to expect. Our team will guide you through the initial steps and help you understand the timeline.',
  },
  {
    title: 'Envisioning your family',
    content:
      'Think about what kind of family you want to build. Consider the age, background, and needs of the child that would be the best fit for your family.',
  },
  {
    title: 'Getting approved',
    content:
      'Complete the necessary background checks, home study, and training requirements. Our social workers will support you throughout this process.',
  },
  {
    title: 'Being matched with a child',
    content:
      'Once approved, our team will work with you to find the perfect match. We consider your preferences and the child needs to create the best possible fit.',
  },
  {
    title: 'Receiving a placement',
    content:
      'When a match is made, we facilitate the introduction and placement process. Our team ensures a smooth transition for both the child and your family.',
  },
  {
    title: 'Finalizing an adoption',
    content:
      'Complete the legal requirements and finalize the adoption. We provide legal guidance and support through the court process.',
  },
  {
    title: 'State information',
    content:
      'Understand the specific requirements and regulations in your state. Each state has different laws regarding adoption, and we help you navigate them.',
  },
]

export function StepsAccordion() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="steps" className="bg-white pb-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
          {/* Left spacer for alignment with AboutSection */}
          <div className="hidden md:block md:w-5/12" />
          <div className="w-full md:w-7/12">
            <div className="space-y-3">
              {steps.map((step, i) => (
                <div key={i} className="rounded border bg-white shadow-sm">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                    className="flex w-full items-center justify-between px-5 py-4 text-left"
                    aria-expanded={openIndex === i}
                  >
                    <span className="font-semibold text-ink">
                      {i + 1}. {step.title}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-text-gray transition-transform ${
                        openIndex === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openIndex === i && (
                    <div className="border-t px-5 py-4 text-text-gray">{step.content}</div>
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
