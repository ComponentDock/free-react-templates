import { useState } from 'react'

const faqs = [
  {
    question: 'Complete CMS integration?',
    answer:
      'Our platform seamlessly integrates with all major content management systems, making it easy to manage and update your content without any technical knowledge.',
  },
  {
    question: 'What impacts my website performance?',
    answer:
      'Performance depends on image optimization, code splitting, and caching strategies. Our templates are built with performance best practices in mind.',
  },
  {
    question: 'What does the template include?',
    answer:
      'The template includes all sections, components, and assets you need to build a complete website. It comes with responsive design, accessibility features, and clean code.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(1)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy mb-8 leading-tight">
            Work fast, create
            <br />
            beautifully.
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={faq.question} className="border border-border rounded overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left px-6 py-4 font-heading font-semibold text-navy hover:bg-mist transition-colors flex justify-between items-center"
                  aria-expanded={openIndex === i}
                >
                  {faq.question}
                  <span className="text-brand text-xl font-bold">
                    {openIndex === i ? '−' : '+'}
                  </span>
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-4 text-body font-body leading-relaxed">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div>
          <img
            src="https://picsum.photos/seed/spruce-faq/600/500"
            alt="FAQ illustration"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  )
}
