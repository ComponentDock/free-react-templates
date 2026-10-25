import { faqs } from '../data'

/** Eight complete questions in two columns of four. */
export function Faq() {
  return (
    <section id="faq" aria-label="Frequently asked questions" className="bg-white py-[5em]">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="mx-auto mb-[5em] max-w-[66%] text-center">
          <h2 className="text-[32px] font-medium text-brand normal-case lg:text-[48px]">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-[16px] text-body">
            The eight questions the desk is asked most often, answered the way we would answer them
            on the phone.
          </p>
        </div>

        <ul className="grid gap-x-[30px] md:grid-cols-2">
          {faqs.map((item) => (
            <li key={item.question} className="mb-12">
              <h3 className="mb-6 text-[20px] font-medium text-ink normal-case">{item.question}</h3>
              <p className="text-[16px] text-body">{item.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
