import { type FormEvent, useState } from 'react'
import { Send } from 'lucide-react'

const faqItems = [
  {
    question: 'What services do you offer?',
    answer:
      'We offer a wide range of agricultural services including organic farming, dairy production, fruit cultivation, and sustainable crop management.',
  },
  {
    question: 'Are your products certified organic?',
    answer:
      'Yes, all our products are certified organic and grown without harmful chemicals or pesticides to ensure the highest quality for our customers.',
  },
  {
    question: 'How can I place a bulk order?',
    answer:
      'You can place a bulk order by filling out the contact form or calling our sales team directly. We offer competitive pricing for large quantities.',
  },
] as const

const services = ['Fresh Vegetables', 'Agricultural Products', 'Organic Products', 'Dairy Products']

export function RequestQuote() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <section id="contact" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left — form */}
          <div>
            <h2 className="mb-8 text-3xl font-bold text-ink">Request A Quote</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="rounded border border-divider bg-white px-4 py-3 text-sm text-ink placeholder:text-mist focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="rounded border border-divider bg-white px-4 py-3 text-sm text-ink placeholder:text-mist focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone"
                className="w-full rounded border border-divider bg-white px-4 py-3 text-sm text-ink placeholder:text-mist focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              />
              <select className="w-full rounded border border-divider bg-white px-4 py-3 text-sm text-mist focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand">
                <option value="">Select a Service</option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full resize-none rounded border border-divider bg-white px-4 py-3 text-sm text-ink placeholder:text-mist focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded bg-brand px-8 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>

          {/* Right — FAQ */}
          <div>
            <h2 className="mb-8 text-3xl font-bold text-ink">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={item.question} className="rounded border border-divider bg-white">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-semibold text-ink"
                    onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                    aria-expanded={expandedIndex === i}
                  >
                    {item.question}
                    <span className="text-xl text-brand">
                      {expandedIndex === i ? '\u2212' : '+'}
                    </span>
                  </button>
                  {expandedIndex === i && (
                    <div className="border-t border-divider px-6 py-4">
                      <p className="text-sm leading-relaxed text-mist">{item.answer}</p>
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
