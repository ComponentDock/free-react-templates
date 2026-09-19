import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

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
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between py-4 text-left text-sm font-medium text-gray-900 transition hover:text-primary-500"
        onClick={onToggle}
      >
        {question}
        <ChevronDown
          className={cn(
            'h-5 w-5 shrink-0 text-gray-400 transition-transform',
            isOpen && 'rotate-180',
          )}
        />
      </button>
      {isOpen && <p className="pb-4 text-sm text-gray-500">{answer}</p>}
    </div>
  )
}

const faqs = [
  {
    question: 'Are your templates responsive?',
    answer: 'Yes, all templates are fully responsive and work across all device sizes.',
  },
  {
    question: 'Does it include all the features mentioned?',
    answer: 'Absolutely, every feature listed in the template is included out of the box.',
  },
  {
    question: 'Can I use these themes for my client?',
    answer: 'Yes, you are free to use these templates for personal and client projects.',
  },
  {
    question: 'How do I customize the color scheme?',
    answer: 'Edit the theme tokens in index.css to change brand colors across the entire template.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="text-gray-500">Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="mx-auto max-w-2xl">
          {faqs.map((faq, i) => (
            <FaqItem
              key={`${faq.question}-${i}`}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
