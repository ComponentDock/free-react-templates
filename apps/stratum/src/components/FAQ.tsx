const faqs = [
  {
    question: 'Can I accept both Paypal and Stripe?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.',
  },
  {
    question: 'What available is refund period?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.',
  },
  {
    question: 'Where are you from?',
    answer:
      'Voluptatum nobis obcaecati perferendis dolor totam unde dolores quod maxime corporis officia et. Distinctio assumenda minima maiores.',
  },
  {
    question: 'What is your opening time?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.',
  },
  {
    question: 'Can I accept both Paypal and Stripe?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.',
  },
  {
    question: 'What available is refund period?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.',
  },
  {
    question: 'Can I accept both Paypal and Stripe?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.',
  },
  {
    question: 'What available is refund period?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.',
  },
]

export function FAQ() {
  const midpoint = Math.ceil(faqs.length / 2)
  const leftCol = faqs.slice(0, midpoint)
  const rightCol = faqs.slice(midpoint)

  return (
    <section id="faq" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-heading uppercase text-[#ff8b00] text-center mb-12">
          Frequently Ask Questions
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
          <div>
            {leftCol.map((faq, i) => (
              <div key={`left-${i}`} className="mb-8">
                <h3 className="text-lg text-black mb-2">{faq.question}</h3>
                <p className="text-[#939393]">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div>
            {rightCol.map((faq, i) => (
              <div key={`right-${i}`} className="mb-8">
                <h3 className="text-lg text-black mb-2">{faq.question}</h3>
                <p className="text-[#939393]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
