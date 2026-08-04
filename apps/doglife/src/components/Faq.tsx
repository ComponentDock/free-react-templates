import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const items = [
  {
    question: 'Lorem ipsum dolor sit amet',
    answer:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, voluptas.',
    answer:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  },
  {
    question: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    answer:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave.',
  },
  {
    question: 'consectetur, adipisicing elit?',
    answer:
      'The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli.',
  },
] as const

export function Faq() {
  const [open, setOpen] = useState<ReadonlySet<number>>(new Set())

  const toggle = (index: number) => {
    setOpen((current) => {
      const next = new Set(current)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <section id="faq" className="py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center font-serif text-3xl font-extrabold text-black dark:text-white">
          Frequently Ask Questions
        </h2>
        <div className="mt-12 divide-y divide-gray-200 dark:divide-gray-700">
          {items.map((item, index) => {
            const expanded = open.has(index)
            return (
              <div key={item.question} className="py-4">
                <h3>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between gap-4 text-left text-base font-medium text-black transition-colors hover:text-brand dark:text-white dark:hover:text-brand"
                  >
                    {item.question}
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand text-brand transition-colors ${
                        expanded ? 'bg-brand text-white' : ''
                      }`}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </h3>
                {expanded && (
                  <p className="mt-3 pl-0 text-sm font-light leading-relaxed text-gray-500 dark:text-gray-400">
                    {item.answer}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
