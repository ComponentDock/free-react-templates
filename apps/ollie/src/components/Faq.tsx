import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FaqProps {
  className?: string
}

interface FaqItem {
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    question: 'Do I need my own equipment?',
    answer:
      'We provide beginner gear for first-timers, but we recommend investing in your own setup as you progress.',
  },
  {
    question: 'What age groups do you accommodate?',
    answer:
      'We welcome skaters of all ages, from kids as young as 6 to adults well into their 50s and beyond.',
  },
  {
    question: 'How do I book a coaching session?',
    answer:
      'Simply visit our contact page or call us directly. We will match you with the right coach for your skill level.',
  },
  {
    question: 'Do you offer injury recovery support?',
    answer:
      'Yes, we work with sports physiotherapists who specialize in action sports injuries and rehabilitation.',
  },
  {
    question: 'Is there a trial period?',
    answer:
      'We offer a free trial session for all new members so you can experience our coaching before committing.',
  },
  {
    question: 'What skatespots do you cover?',
    answer:
      'We operate in over 15 cities with access to 50+ curated spots, parks, and custom-built training areas.',
  },
  {
    question: 'Can I bring friends to group sessions?',
    answer:
      'Absolutely! Group sessions are open to friends. Each guest gets one free trial session.',
  },
  {
    question: 'Do you host competitions?',
    answer:
      'Yes, we organize quarterly local competitions and annual regional events with prizes from our sponsors.',
  },
]

export function Faq({ className = '' }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className={`py-20 bg-surface ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-oswald text-3xl md:text-4xl font-bold uppercase tracking-wider text-white mb-3">
            Frequently Asked
          </h2>
          <div className="h-1 w-16 bg-brand mx-auto" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {faqItems.map((item, i) => (
            <div key={i} className="bg-surface-light rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <span className="font-oswald text-base font-medium uppercase tracking-wider text-white pr-4">
                  {item.question}
                </span>
                {openIndex === i ? (
                  <ChevronUp size={20} className="text-brand flex-shrink-0" />
                ) : (
                  <ChevronDown size={20} className="text-muted flex-shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4">
                  <p className="text-muted leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
