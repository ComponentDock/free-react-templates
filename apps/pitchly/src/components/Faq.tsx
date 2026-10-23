import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const items = [
  {
    question: 'Sedeiusmod tempor inccsetetur aliquatraiy?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodas temporo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrd exercitation ullamco laboris nisi ut aliquip ex comodo consequat. Duis aute dolor in reprehenderit.',
  },
  {
    question: 'Tempor inccsetetur aliquatraiy?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodas temporo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrd exercitation ullamco laboris nisi ut aliquip ex comodo consequat. Duis aute dolor in reprehenderit.',
  },
  {
    question: 'Lorem ipsum dolor amet, consectetur adipisicing?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodas temporo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrd exercitation ullamco laboris nisi ut aliquip ex comodo consequat. Duis aute dolor in reprehenderit.',
  },
] as const

export function Faq() {
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <section id="faq" className="bg-paper py-16 dark:bg-gray-900 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold uppercase tracking-wide text-gray-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit voluptates, temporibus
            at, facere harum fugiat!
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {items.map((item, i) => {
            const open = openIndex === i
            return (
              <div key={item.question} className="rounded-md bg-white shadow-sm dark:bg-gray-950">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex((current) => (current === i ? -1 : i))}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-medium text-gray-900 transition-colors hover:text-primary-500 dark:text-white dark:hover:text-primary-400"
                  >
                    {item.question}
                    <ChevronDown
                      className={cn('h-5 w-5 shrink-0 transition-transform', open && 'rotate-180')}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {open && (
                  <p className="px-6 pb-5 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
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
