import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { faq } from '../content'
import { containerClass } from './ui'

/**
 * Five rows, one open at a time, and the two attributes the reference forgets:
 * every button carries `aria-expanded` and points at its own panel.
 */
export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="scroll-mt-20 bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className={containerClass}>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-sm leading-5 font-medium text-primary-700 dark:bg-primary-900/40 dark:text-primary-200">
            {faq.pill}
          </span>
          <h2 className="mt-4 text-3xl leading-9 font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 dark:text-white">
            {faq.title}
          </h2>
          <p className="mt-3 text-lg leading-7 text-gray-600 dark:text-gray-400">{faq.sub}</p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl divide-y divide-gray-200 dark:divide-gray-800">
          {faq.items.map((item, index) => {
            const open = openIndex === index
            return (
              <div key={item.question} className="py-6">
                <button
                  type="button"
                  data-faq-toggle=""
                  aria-expanded={open}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-center justify-between gap-6 text-left"
                >
                  <span className="text-lg leading-7 font-semibold text-gray-900 dark:text-gray-100">
                    {item.question}
                  </span>
                  <span
                    data-faq-icon=""
                    aria-hidden="true"
                    className={cn(
                      'grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gray-100 text-gray-700 transition-transform duration-200 motion-reduce:transition-none dark:bg-gray-800 dark:text-gray-200',
                      open && 'rotate-45',
                    )}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <div
                  id={`faq-panel-${index}`}
                  className={cn(
                    'grid transition-all duration-200 motion-reduce:transition-none',
                    open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pt-4 pr-12 text-base leading-6 text-gray-600 dark:text-gray-400">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
