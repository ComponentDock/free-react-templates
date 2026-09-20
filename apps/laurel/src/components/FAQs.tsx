const faqs = [
  {
    question: 'How do I enroll in a course?',
    answer:
      'Simply browse our course catalog, select the course you want, and click the Enroll button. You will receive instant access to all course materials.',
  },
  {
    question: 'Can I access courses on mobile?',
    answer:
      'Yes, all Laurel courses are fully responsive and can be accessed on any device including smartphones and tablets.',
  },
  {
    question: 'Do I get a certificate?',
    answer:
      'Absolutely! Upon completing a course, you will receive a verified certificate of completion that you can share on LinkedIn or your resume.',
  },
  {
    question: 'Are there any prerequisites?',
    answer:
      'Most of our courses are designed for beginners. Some advanced courses may have prerequisites, which are clearly listed on the course page.',
  },
  {
    question: 'Can I get a refund?',
    answer:
      'We offer a 30-day money-back guarantee. If you are not satisfied with a course, contact our support team for a full refund.',
  },
  {
    question: 'How do instructors create courses?',
    answer:
      'Our expert instructors are vetted professionals who create courses with our support team to ensure the highest quality content.',
  },
]

export function FAQs() {
  return (
    <section id="faqs" className="py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-brand-heading sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="rounded-[10px] bg-white p-6 shadow-md">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary-light text-sm font-bold text-primary">
                {index + 1}
              </div>
              <h3 className="font-heading text-base font-semibold text-brand-heading">
                {faq.question}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-body">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
