import { faqs } from '../data'
import { SectionTitle } from './SectionTitle'

/** FAQ blocks (`#faq-section`): 8 stacked question/answer pairs in two
 *  columns, bold black questions with short lorem answers. */
export function FaqSection() {
  return (
    <section id="faq-section" className="py-[2.5em] md:py-[5em]">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle>Frequently Ask Questions</SectionTitle>
        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <article key={`${faq.question}-${index}`}>
              <h3 className="text-lg font-bold text-heading">{faq.question}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
