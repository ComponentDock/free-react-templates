import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const stats = [
  { value: '5962', label: 'Projects Completed' },
  { value: '2394', label: 'New Projects' },
  { value: '1439', label: 'Tickets Submitted' },
  { value: '933', label: 'Cup of Coffee' },
] as const

const faqItems = [
  {
    question: 'What services do you offer?',
    answer:
      'We offer a wide range of consulting services including strategy, design, development, and marketing. Our team works closely with you to understand your needs and deliver tailored solutions.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary based on scope and complexity. A standard engagement typically takes 4-12 weeks from kickoff to delivery, with regular check-ins along the way.',
  },
  {
    question: 'What is your pricing structure?',
    answer:
      'We offer flexible pricing models including fixed-price, hourly, and retainer arrangements. Contact us for a custom quote based on your specific requirements.',
  },
] as const

interface FaqItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between py-4 text-left text-sm font-medium text-heading transition-colors hover:text-brand"
      >
        {question}
        <ChevronDown
          className={cn('h-5 w-5 shrink-0 text-brand transition-transform', isOpen && 'rotate-180')}
          aria-hidden="true"
        />
      </button>
      {isOpen && <div className="pb-4 text-sm leading-relaxed text-ink">{answer}</div>}
    </div>
  )
}

export function FaqStats() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section aria-label="FAQ and statistics" className="bg-card-bg py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-lg bg-body-bg p-6 text-center shadow-sm">
              <p className="text-3xl font-bold text-brand">{stat.value}</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wider text-ink">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div>
          <h2 className="mb-6 text-xl font-bold text-heading">Frequently Asked Questions</h2>
          <div>
            {faqItems.map((item, index) => (
              <FaqItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex((prev) => (prev === index ? null : index))}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
