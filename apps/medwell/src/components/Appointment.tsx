import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const faqs = [
  {
    question: 'God male gathering them it female which green cattle?',
    answer:
      'Great day without sixth a lesser beginning. Their thing abundantly air moving saw fruitful lesser god. Sea abundantly blessed life set.',
  },
  {
    question: 'Moving creepeth moved upon man grass two days?',
    answer:
      'Great day without sixth a lesser beginning. Their thing abundantly air moving saw fruitful lesser god. Sea abundantly blessed life set.',
  },
  {
    question: 'God male gathering them it female which green cattle?',
    answer:
      'Great day without sixth a lesser beginning. Their thing abundantly air moving saw fruitful lesser god. Sea abundantly blessed life set.',
  },
  {
    question: "Saw isn't likeness beginning yielding land days she?",
    answer:
      'Great day without sixth a lesser beginning. Their thing abundantly air moving saw fruitful lesser god. Sea abundantly blessed life set.',
  },
  {
    question: "Saw isn't likeness beginning yielding land days she?",
    answer:
      'Great day without sixth a lesser beginning. Their thing abundantly air moving saw fruitful lesser god. Sea abundantly blessed life set.',
  },
]

export function Appointment() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="contact" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-lg bg-surface p-8 shadow-sm md:p-12">
          <div className="grid gap-10 md:grid-cols-2">
            {/* FAQ Accordion */}
            <div>
              <h2 className="mb-6 font-heading text-2xl font-bold text-heading">
                Have Some Questions?
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => {
                  const isOpen = openIndex === i
                  return (
                    <div key={i} className="border border-border bg-white">
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between px-5 py-4 text-left font-heading text-sm font-semibold text-heading"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={cn(
                            'h-4 w-4 shrink-0 text-body transition-transform',
                            isOpen && 'rotate-180',
                          )}
                        />
                      </button>
                      {isOpen && (
                        <div className="border-t border-border px-5 py-4 text-sm leading-relaxed text-body">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="mb-6 font-heading text-2xl font-bold text-heading">
                Make an Appointment
              </h2>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-heading">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full border border-border bg-white px-4 py-3 text-sm text-heading outline-none focus:border-brand-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-heading">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full border border-border bg-white px-4 py-3 text-sm text-heading outline-none focus:border-brand-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-heading">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={7}
                    placeholder="Message"
                    required
                    className="w-full resize-none border border-border bg-white px-4 py-3 text-sm text-heading outline-none focus:border-brand-500"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-brand-500 px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-600"
                >
                  Make an Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
