import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqItems = [
  {
    question: 'God male gathering them it female which green cattle?',
    answer:
      'Great day without sixth a lesser beginning. Their thing abundantly air moving saw fruitful lesser god. Sea abundantly blessed life set. Land. Lights divided man in deep in open upon.',
  },
  {
    question: 'Moving creepeth moved upon man grass two days?',
    answer:
      'Great day without sixth a lesser beginning. Their thing abundantly air moving saw fruitful lesser god. Sea abundantly blessed life set. Land. Lights divided man in deep in open upon.',
  },
  {
    question: 'God male gathering them it female which green cattle?',
    answer:
      'Great day without sixth a lesser beginning. Their thing abundantly air moving saw fruitful lesser god. Sea abundantly blessed life set. Land. Lights divided man in deep in open upon.',
  },
  {
    question: "Saw isn't likeness beginning yielding land days she?",
    answer:
      'Great day without sixth a lesser beginning. Their thing abundantly air moving saw fruitful lesser god. Sea abundantly blessed life set. Land. Lights divided man in deep in open upon.',
  },
  {
    question: "Saw isn't likeness beginning yielding land days she?",
    answer:
      'Great day without sixth a lesser beginning. Their thing abundantly air moving saw fruitful lesser god. Sea abundantly blessed life set. Land. Lights divided man in deep in open upon.',
  },
]

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border border-border">
      <button
        className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium text-heading hover:bg-light-bg transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {question}
        {isOpen ? (
          <ChevronUp className="h-4 w-4 shrink-0" />
        ) : (
          <ChevronDown className="h-4 w-4 shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="border-t border-border px-5 py-4 text-sm leading-relaxed text-body-text">
          {answer}
        </div>
      )}
    </div>
  )
}

export function Appointment() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="appointment" className="bg-light-bg py-20" aria-label="Appointment">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* FAQ Accordion */}
          <div>
            <h2 className="mb-8 text-3xl font-bold font-serif text-heading md:text-4xl">
              Have Some Questions?
            </h2>
            <div className="space-y-3">
              {faqItems.map((item, index) => (
                <FaqItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
              ))}
            </div>
          </div>

          {/* Appointment Form */}
          <div>
            <h2 className="mb-8 text-3xl font-bold font-serif text-heading md:text-4xl">
              Make an Appointment
            </h2>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-heading">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full border border-border px-4 py-3 text-sm text-heading outline-none focus:border-brand transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-heading">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full border border-border px-4 py-3 text-sm text-heading outline-none focus:border-brand transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-heading">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Message"
                  className="w-full resize-none border border-border px-4 py-3 text-sm text-heading outline-none focus:border-brand transition-colors"
                />
              </div>
              <button
                type="submit"
                className="bg-brand px-8 py-3 text-sm font-medium text-white hover:bg-brand-dark transition-colors"
              >
                Make an Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
