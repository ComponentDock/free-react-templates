import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQ_ITEMS = [
  {
    question: 'Can you explain knowledge of the digital filing system?',
    answer:
      "Forth him herb stars forth over forth that them air isn't be shall fourth winged man firm life a fourth to fruitful a very the unto, creepeth wherein place the Forth him herb stars forth over forth that them air.",
  },
  {
    question: 'How do you approach a multi-step problem?',
    answer:
      "Forth him herb stars forth over forth that them air isn't be shall fourth winged man firm life a fourth to fruitful a very the unto, creepeth wherein place the Forth him herb stars forth over forth that them air.",
  },
  {
    question: 'What technologies do you use for data analysis?',
    answer:
      "Forth him herb stars forth over forth that them air isn't be shall fourth winged man firm life a fourth to fruitful a very the unto, creepeth wherein place the Forth him herb stars forth over forth that them air.",
  },
] as const

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section id="faq" className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <img
              src="https://picsum.photos/seed/stamp-faq/600/500"
              alt="Manufacturing office"
              className="w-full rounded object-cover"
              loading="lazy"
            />
          </div>
          <div className="w-full lg:w-5/12">
            <h2 className="mb-8 text-3xl font-semibold text-ink">Frequently Asked Questions</h2>
            <div className="flex flex-col gap-4">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openIndex === index
                return (
                  <div key={item.question} className="rounded bg-white shadow-sm">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-5 py-4 text-left text-ink transition-colors hover:text-brand"
                      onClick={() => toggle(index)}
                      aria-expanded={isOpen}
                    >
                      <span className="pr-4 font-semibold">{item.question}</span>
                      <ChevronDown
                        size={20}
                        className={`shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 text-mist leading-relaxed">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
