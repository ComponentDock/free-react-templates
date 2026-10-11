import { useState } from 'react'
import { FAQ } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-gap bg-white">
      <SectionHeading title={FAQ.title} subtitle={FAQ.subtitle} />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-4">
        <div className="text-right">
          {FAQ.facts.map((fact) => (
            <div key={fact.label} className="mb-7">
              <h2 className="counter-text text-5xl font-bold leading-none">{fact.value}</h2>
              <p className="mt-2 text-body">{fact.label}</p>
            </div>
          ))}
        </div>
        <div className="lg:col-span-3">
          {FAQ.questions.map((item, i) => (
            <div key={item.question} className="border-b border-black/10 py-5">
              <h2>
                <button
                  type="button"
                  aria-expanded={openIndex === i}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between text-left text-lg font-semibold uppercase"
                >
                  {item.question}
                </button>
              </h2>
              {openIndex === i ? <p className="mt-4 text-body">{item.answer}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
