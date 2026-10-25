import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { FAQ } from '../content'
import { containerClass } from './ui'

/** Six questions, one open at a time; the answers stay in the DOM. */
export function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpen((current) => (current === index ? null : index))
  }

  return (
    <section id="faq" className="bg-white py-20 lg:py-28">
      <div className={containerClass}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full bg-primary-100 px-3 py-1 text-sm leading-5 font-medium text-primary-700">
            {FAQ.pill}
          </p>
          <h2 className="mt-4 text-[30px] leading-[34px] font-bold tracking-[-0.9px] text-gray-900 sm:text-4xl sm:leading-10 dark:text-white">
            {FAQ.title}
          </h2>
          <p className="mt-3 text-base leading-6 text-gray-600 dark:text-gray-400">{FAQ.note}</p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl border-t border-gray-200 dark:border-gray-800">
          {FAQ.items.map((item, index) => {
            const expanded = open === index
            return (
              <div
                key={item.question}
                data-testid="faq-row"
                className="border-b border-gray-200 py-6 dark:border-gray-800"
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between gap-6 text-left"
                  >
                    <span className="text-lg leading-6 font-semibold text-gray-900 dark:text-white">
                      {item.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        'grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gray-100 transition-transform duration-300 motion-reduce:transition-none dark:bg-gray-800',
                        expanded ? 'rotate-45' : '',
                      )}
                    >
                      <Plus className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-answer-${index}`}
                  className={cn(
                    'overflow-hidden transition-all duration-300 motion-reduce:transition-none',
                    expanded ? 'max-h-96 pt-4 opacity-100' : 'max-h-0 opacity-0',
                  )}
                >
                  <p className="text-base leading-6 text-gray-600 dark:text-gray-400">{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
